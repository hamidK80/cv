import { Component, signal, computed } from '@angular/core';
import { PersonalInfo } from '../../../models/personal-info.model';

@Component({
  selector: 'app-hero-component',
  imports: [],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.css'
})
export class HeroComponent {
  private personalInfo = new PersonalInfo();
  
  name = signal(this.personalInfo.name);
  title = signal(this.personalInfo.title);
  phone = signal(this.personalInfo.phone);
  whatsapp = signal(this.personalInfo.whatsapp);
  
  callUrl = computed(() => `tel:${this.phone()}`);
  whatsappUrl = computed(() => `https://wa.me/${this.whatsapp().replace(/[^\d]/g, '')}`);
}
