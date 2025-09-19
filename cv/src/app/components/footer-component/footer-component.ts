import { Component, signal, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  imports: [],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css'
})
export class FooterComponent implements OnInit {
  footerData = signal({
    businessName: 'تعمیرات حرفه‌ای دیگ بخار',
    tagline: 'متخصص قابل اعتماد محلی دیگ بخار و آبگرمکن شما',
    phone: '+989213298733',
    email: 'info@boilerrepair.com',
    address: 'تهران، خیابان ولیعصر، پلاک 123',
    serviceAreas: ['تهران', 'کرج', 'اصفهان', 'شیراز', 'مشهد'],
    socialLinks: {
      facebook: '#',
      instagram: '#',
      linkedin: '#'
    },
    quickLinks: [
      { name: 'خانه', anchor: '#hero' },
      { name: 'درباره من', anchor: '#about' },
      { name: 'خدمات', anchor: '#services' },
      { name: 'نحوه کار', anchor: '#how-it-works' },
      { name: 'گالری', anchor: '#gallery' },
      { name: 'تماس', anchor: '#contact' }
    ],
    serviceLinks: [
      { name: 'تعمیر دیگ بخار', anchor: '#services' },
      { name: 'سرویس آبگرمکن', anchor: '#services' },
      { name: 'خدمات اضطراری', anchor: '#contact' },
      { name: 'نگهداری', anchor: '#services' },
      { name: 'نصب', anchor: '#services' }
    ],
    legalLinks: [
      { name: 'حریم خصوصی', href: '#' },
      { name: 'شرایط خدمات', href: '#' },
      { name: 'گارانتی', href: '#' }
    ],
    certifications: [
      'دارای مجوز و بیمه',
      'دارای گواهی گاز',
      'خدمات اضطراری 24/7',
      'گارانتی 5 ساله'
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
        "addressLocality": "تهران",
        "addressRegion": "تهران",
        "postalCode": "12345",
        "addressCountry": "IR"
      },
      "areaServed": this.footerData().serviceAreas,
      "serviceType": [
        "تعمیر دیگ بخار",
        "سرویس آبگرمکن",
        "لوله‌کشی اضطراری",
        "نگهداری سیستم گرمایش"
      ],
      "openingHours": [
        "Mo-Fr 07:00-18:00",
        "Sa 08:00-16:00"
      ],
      "priceRange": "$$",
      "paymentAccepted": ["نقد", "کارت اعتباری", "چک"],
      "currenciesAccepted": "IRR",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "خدمات تعمیر دیگ بخار",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "تعمیر اضطراری دیگ بخار",
              "description": "خدمات تعمیر اضطراری دیگ بخار 24/7"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "نصب دیگ بخار",
              "description": "نصب و تعویض حرفه‌ای دیگ بخار"
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
