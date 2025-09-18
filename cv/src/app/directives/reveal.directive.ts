import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[revealOnScroll]'
})
export class RevealDirective {
  private readonly element = inject(ElementRef<HTMLElement>);

  constructor() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = this.element.nativeElement;
    el.style.display = 'block';
    el.style.width = '100%';
    el.style.transformOrigin = 'center center';
    el.style.willChange = 'opacity, filter, transform';
    el.style.backfaceVisibility = 'hidden';
    // Persist a random horizontal direction per element
    const existingDir = el.getAttribute('data-reveal-dir');
    const dir = existingDir === 'left' ? -1 : existingDir === 'right' ? 1 : (Math.random() < 0.5 ? -1 : 1);
    if (!existingDir) el.setAttribute('data-reveal-dir', dir === -1 ? 'left' : 'right');
    el.style.opacity = '0';
    el.style.filter = 'blur(8px)';

    let last = 0;
    let firstRun = true;
    let hasSnapped = false;
    const thresholds = [0, 0.05, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 0.95, 1];
    const applyFromViewport = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;
      const overlap = Math.max(0, Math.min(rect.bottom, viewportH) - Math.max(rect.top, 0));
      const base = Math.min(viewportH, Math.max(1, rect.height));
      const ratio = Math.max(0, Math.min(1, overlap / base));
      // Slide-in should complete early: start at 0%, finish by ~30%
      let t = 0;
      if (ratio >= 0.3) t = 1;
      else if (ratio <= 0.0) t = 0;
      else t = (ratio - 0.0) / 0.3;
      t = t * t * (3 - 2 * t);
      const alpha = 0.25;
      let smoothed = last + (t - last) * alpha;
      last = smoothed;
      let blur = (1 - smoothed) * 8;
      let opacity = smoothed;
      // Translate fully off-screen when hidden, slide to center as visible
      const elWidth = Math.max(1, Math.ceil(rect.width));
      const vw = Math.max(1, window.innerWidth || 0);
      const offscreen = vw + elWidth + 16; // guarantee fully outside viewport
      // Small parallax component while visible based on distance from viewport center
      const centerDelta = ((rect.top + rect.bottom) / 2 - viewportH / 2) / viewportH; // -1..1
      const parallax = centerDelta * 24 * dir; // max ~24px drift
      // If section is mostly visible (>=60%), lock perfectly in place with no drift
      const mostlyVisible = ratio >= 0.6;
      if (firstRun && mostlyVisible) { smoothed = 1; last = 1; }
      const tx = mostlyVisible ? 0 : (1 - smoothed) * offscreen * dir + smoothed * parallax;
      if (mostlyVisible) { blur = 0; opacity = 1; }
      el.style.filter = `blur(${blur.toFixed(1)}px)`;
      el.style.opacity = opacity.toFixed(3);
      el.style.transform = `translate3d(${tx.toFixed(1)}px, 0, 0)`;
      el.style.visibility = opacity < 0.01 ? 'hidden' : 'visible';
      el.style.pointerEvents = opacity > 0.05 ? 'auto' : 'none';
      // Smooth auto-snap: if >=30% visible and not near top, align section top to viewport top
      if (!hasSnapped && ratio >= 0.3 && Math.abs(rect.top) > 8) {
        hasSnapped = true;
        const targetTop = window.scrollY + rect.top;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
      }
      if (ratio <= 0.05) hasSnapped = false;
      if (firstRun) firstRun = false;
    };

    const io = new IntersectionObserver(() => {
      requestAnimationFrame(applyFromViewport);
    }, { threshold: thresholds });

    io.observe(el);
    const onScroll = () => requestAnimationFrame(applyFromViewport);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    applyFromViewport();
  }
}


