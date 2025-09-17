import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-component',
  imports: [FormsModule],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css'
})
export class ContactComponent {
  contactInfo = signal({
    phone: '+989123456789',
    email: 'info@boilerrepair.com',
    address: 'تهران، خیابان ولیعصر، پلاک 123',
    serviceAreas: ['تهران', 'کرج', 'اصفهان', 'شیراز', 'مشهد'],
    businessHours: {
      weekdays: '7:00 صبح - 6:00 عصر',
      saturday: '8:00 صبح - 4:00 عصر',
      sunday: 'فقط اضطراری'
    }
  });

  contactForm = signal({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    urgency: 'normal'
  });

  submitForm() {
    // In a real app, this would send the form data
    const formData = this.contactForm();
    const mailtoLink = `mailto:${this.contactInfo().email}?subject=Service Request from ${formData.name}&body=Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AService: ${formData.service}%0AUrgency: ${formData.urgency}%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
  }

  callNow() {
    window.location.href = `tel:${this.contactInfo().phone}`;
  }

  getServiceIcon(area: string): string {
    const icons: { [key: string]: string } = {
      'تهران': '🏢',
      'کرج': '🏘️',
      'اصفهان': '🌅',
      'شیراز': '🌇',
      'مشهد': '🏡'
    };
    return icons[area] || '📍';
  }
}
