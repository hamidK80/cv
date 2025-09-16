import { Component, signal, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isVisible = signal(false);
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  navigationItems = signal([
    { name: 'Home', anchor: '#hero' },
    { name: 'About', anchor: '#about' },
    { name: 'Services', anchor: '#services' },
    { name: 'How It Works', anchor: '#how-it-works' },
    { name: 'Gallery', anchor: '#gallery' },
    { name: 'Contact', anchor: '#contact' }
  ]);

  contactInfo = signal({
    phone: '+1 (555) 123-4567',
    businessName: 'Professional Boiler Repair'
  });

  private scrollTimeout: any;

  ngOnInit() {
    // Header starts hidden and only shows on scroll
    this.isVisible.set(false);
  }

  ngOnDestroy() {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Show header when scrolled down, hide when at top
    if (scrollTop > 100) {
      this.isVisible.set(true);
      this.isScrolled.set(true);
    } else {
      this.isVisible.set(false);
      this.isScrolled.set(false);
    }

    // Hide mobile menu when scrolling
    if (this.isMobileMenuOpen()) {
      this.isMobileMenuOpen.set(false);
    }
  }

  scrollToSection(anchor: string) {
    const element = document.querySelector(anchor);
    if (element) {
      const headerHeight = 80; // Account for fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu after navigation
    this.isMobileMenuOpen.set(false);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }

  callNow() {
    window.location.href = `tel:${this.contactInfo().phone}`;
  }
}
