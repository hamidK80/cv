import { Component, signal } from '@angular/core';
import { PersonalInfo } from '../../../models/personal-info.model';

@Component({
  selector: 'app-about-component',
  imports: [],
  templateUrl: './about-component.html',
  styleUrl: './about-component.css'
})
export class AboutComponent {
  private personalInfo = new PersonalInfo();
  
  name = signal(this.personalInfo.name);
  story = signal(this.personalInfo.story);
  experience = signal(this.personalInfo.experience);
  certifications = signal(this.personalInfo.certifications);
  photo = signal(this.personalInfo.photo);
}
