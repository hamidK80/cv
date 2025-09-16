import { Component, signal, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  imports: [],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css'
})
export class FooterComponent implements OnInit {
  footerData = signal({
    businessName: 'Professional Boiler Repair',
    tagline: 'Your trusted local boiler and water heater expert',
    phone: '+1 (555) 123-4567',
    email: 'info@boilerrepair.com',
    address: '123 Main Street, Your City, State 12345',
    serviceAreas: ['Downtown', 'Northside', 'Eastside', 'Westside', 'Southside'],
    socialLinks: {
      facebook: '#',
      instagram: '#',
      linkedin: '#'
    },
    quickLinks: [
      { name: 'Home', anchor: '#hero' },
      { name: 'About', anchor: '#about' },
      { name: 'Services', anchor: '#services' },
      { name: 'How It Works', anchor: '#how-it-works' },
      { name: 'Gallery', anchor: '#gallery' },
      { name: 'Contact', anchor: '#contact' }
    ],
    serviceLinks: [
      { name: 'Boiler Repair', anchor: '#services' },
      { name: 'Water Heater Service', anchor: '#services' },
      { name: 'Emergency Service', anchor: '#contact' },
      { name: 'Maintenance', anchor: '#services' },
      { name: 'Installation', anchor: '#services' }
    ],
    legalLinks: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Warranty', href: '#' }
    ],
    certifications: [
      'Licensed & Insured',
      'Gas Safe Certified',
      '24/7 Emergency Service',
      '5-Year Warranty'
    ]
  });

  currentYear = signal(new Date().getFullYear());

  ngOnInit() {
    this.injectStructuredData();
  }

  scrollToSection(anchor: string) {
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private injectStructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": this.footerData().businessName,
      "description": this.footerData().tagline,
      "telephone": this.footerData().phone,
      "email": this.footerData().email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": this.footerData().address,
        "addressLocality": "Your City",
        "addressRegion": "State",
        "postalCode": "12345",
        "addressCountry": "US"
      },
      "areaServed": this.footerData().serviceAreas,
      "serviceType": [
        "Boiler Repair",
        "Water Heater Service",
        "Emergency Plumbing",
        "HVAC Maintenance"
      ],
      "openingHours": [
        "Mo-Fr 07:00-18:00",
        "Sa 08:00-16:00"
      ],
      "priceRange": "$$",
      "paymentAccepted": ["Cash", "Credit Card", "Check"],
      "currenciesAccepted": "USD",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Boiler Repair Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Emergency Boiler Repair",
              "description": "24/7 emergency boiler repair service"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Boiler Installation",
              "description": "Professional boiler installation and replacement"
            }
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }
}
