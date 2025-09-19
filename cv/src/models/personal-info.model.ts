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
    this.name = 'حمید کوشافر';
    this.title = 'متخصص تعمیر و نصب پکیج دیواری و رادیاتور';
    this.phone = '+989213298733';
    this.whatsapp = '+989213298733';
    this.email = 'hamid@example.com';
    this.photo = '/assets/images/hamid-photo.jpg';
    this.story = 'علاقه‌مند به گرم نگه داشتن خانه‌ها و اطمینان از ایمنی آنها. متخصص تعمیر دیگ بخار با سال‌ها تجربه عملی.';
    this.experience = 5;
    this.certifications = [
      'دارای مجوز گاز',
      'متخصص نصب دیگ بخار',
      'متخصص تعمیرات اضطراری'
    ];
  }
}
