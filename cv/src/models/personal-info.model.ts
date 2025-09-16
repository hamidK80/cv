export class PersonalInfo {
  name: string;
  title: string;
  phone: string;
  whatsapp: string;
  email: string;
  photo: string;
  story: string;
  experience: number;
  certifications: string[];

  constructor() {
    this.name = 'Hamid Kiani';
    this.title = 'Boiler & Water Heater Expert';
    this.phone = '+1234567890';
    this.whatsapp = '+1234567890';
    this.email = 'hamid@example.com';
    this.photo = '/assets/images/hamid-photo.jpg';
    this.story = 'Passionate about keeping homes warm and safe. Specialized in boiler repair with years of hands-on experience.';
    this.experience = 5;
    this.certifications = [
      'Gas Safe Registered',
      'Boiler Installation Certified',
      'Emergency Repair Specialist'
    ];
  }
}
