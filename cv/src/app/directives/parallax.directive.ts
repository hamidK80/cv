import { Directive, ElementRef, effect, inject, signal } from '@angular/core';

@Directive({
  selector: '[parallax]'
})
export class ParallaxDirective {
  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly y = signal(0);

  constructor() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onScroll = () => this.y.set(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    effect(() => {
      const el = this.element.nativeElement;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || 0;
      const progress = Math.max(0, Math.min(1, 1 - rect.top / viewportH));
      const amplitude = rect.height * 0.12; // stronger parallax
      const offset = (progress - 0.5) * 2 * amplitude;
      el.style.setProperty('transform', `translate3d(0, ${offset.toFixed(2)}px, 0)`);
      el.style.setProperty('will-change', 'transform');
    });
  }
}


