export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  benefit: string;
}

export interface WorkingHours {
  weekdays: string;
  weekends: string;
  emergency: string;
}

export class ServiceInfo {
  services: Service[];
  workingHours: WorkingHours;
  serviceArea: string[];
  responseTime: string;

  constructor() {
    this.services = [
      {
        id: 'repair',
        name: 'تعمیر دیگ بخار',
        description: 'تشخیص سریع و تعمیر تمام مشکلات دیگ بخار',
        icon: '🔧',
        benefit: 'گرما را در کمتر از 2 ساعت بازمی‌گرداند'
      },
      {
        id: 'service',
        name: 'سرویس سالانه',
        description: 'نگهداری کامل دیگ بخار و بررسی ایمنی',
        icon: '🛠️',
        benefit: 'از خرابی جلوگیری می‌کند و انرژی صرفه‌جویی می‌کند'
      },
      {
        id: 'emergency',
        name: 'خدمات اضطراری',
        description: 'خدمات تعمیر اضطراری دیگ بخار 24/7',
        icon: '🚨',
        benefit: 'حضور در محل در کمتر از 4 ساعت'
      },
      {
        id: 'install',
        name: 'نصب جدید',
        description: 'نصب و راه‌اندازی حرفه‌ای دیگ بخار',
        icon: '🏠',
        benefit: 'بهره‌وری انرژی بالا و گارانتی شامل'
      }
    ];

    this.workingHours = {
      weekdays: '8:00 صبح - 6:00 عصر',
      weekends: '9:00 صبح - 4:00 عصر',
      emergency: '24/7 در دسترس'
    };

    this.serviceArea = ['تهران', 'کرج', 'اصفهان', 'شیراز'];
    this.responseTime = 'خدمات همان روز در دسترس';
  }
}
