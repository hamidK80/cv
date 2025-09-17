import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-gallery-component',
  imports: [],
  templateUrl: './gallery-component.html',
  styleUrl: './gallery-component.css'
})
export class GalleryComponent {
  galleryItems = signal([
    {
      id: 1,
      title: 'نصب دیگ بخار',
      beforeImage: '/assets/images/boiler-before.jpg',
      afterImage: '/assets/images/boiler-after.jpg',
      caption: 'تعویض کامل دیگ بخار با واحد مدرن و بهینه انرژی',
      service: 'نصب',
      year: '2024'
    },
    {
      id: 2,
      title: 'تعمیر رادیاتور',
      beforeImage: '/assets/images/radiator-before.jpg',
      afterImage: '/assets/images/radiator-after.jpg',
      caption: 'تعمیر رادیاتور نشت‌دار و بازگرداندن گرمایش کامل',
      service: 'تعمیر',
      year: '2024'
    },
    {
      id: 3,
      title: 'تعویض لوله',
      beforeImage: '/assets/images/pipe-before.jpg',
      afterImage: '/assets/images/pipe-after.jpg',
      caption: 'تعویض لوله‌های خورده شده با اتصالات مسی جدید',
      service: 'تعمیر',
      year: '2023'
    },
    {
      id: 4,
      title: 'ارتقای سیستم',
      beforeImage: '/assets/images/system-before.jpg',
      afterImage: '/assets/images/system-after.jpg',
      caption: 'ارتقای کامل سیستم گرمایش برای کارایی بهتر',
      service: 'ارتقا',
      year: '2023'
    },
    {
      id: 5,
      title: 'تعمیر اضطراری',
      beforeImage: '/assets/images/emergency-before.jpg',
      afterImage: '/assets/images/emergency-after.jpg',
      caption: 'تعمیر اضطراری همان روز در طول خرابی زمستانی',
      service: 'اضطراری',
      year: '2024'
    },
    {
      id: 6,
      title: 'خدمات نگهداری',
      beforeImage: '/assets/images/maintenance-before.jpg',
      afterImage: '/assets/images/maintenance-after.jpg',
      caption: 'سرویس سالانه و تمیزکاری برای عملکرد بهینه',
      service: 'نگهداری',
      year: '2024'
    }
  ]);
  
  selectedItem = signal<number | null>(null);
  
  selectItem(id: number) {
    this.selectedItem.set(this.selectedItem() === id ? null : id);
  }
}
