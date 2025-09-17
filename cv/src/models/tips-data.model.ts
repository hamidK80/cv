export interface Tip {
  id: string;
  title: string;
  content: string;
  category: string;
}

export class TipsData {
  tips: Tip[];

  constructor() {
    this.tips = [
      {
        id: 'bleed-radiators',
        title: 'هواگیری رادیاتورها',
        content: 'رادیاتورهای خود را ماهانه هواگیری کنید تا از نقاط سرد جلوگیری کرده و کارایی گرمایش را بهبود دهید.',
        category: 'maintenance'
      },
      {
        id: 'check-pressure',
        title: 'بررسی فشار دیگ بخار',
        content: 'فشار دیگ بخار خود را بین 1-2 بار نگه دارید. فشار کم می‌تواند باعث مشکلات گرمایش شود.',
        category: 'maintenance'
      },
      {
        id: 'annual-service',
        title: 'سرویس سالانه',
        content: 'سرویس سالانه دیگ بخار را برنامه‌ریزی کنید تا از خرابی جلوگیری کرده و کارایی را حفظ کنید.',
        category: 'service'
      },
      {
        id: 'thermostat',
        title: 'ترموستات هوشمند',
        content: 'ترموستات هوشمند نصب کنید تا انرژی صرفه‌جویی کرده و گرمایش را از راه دور کنترل کنید.',
        category: 'efficiency'
      },
      {
        id: 'insulation',
        title: 'عایق‌بندی لوله‌ها',
        content: 'لوله‌های آب گرم را عایق‌بندی کنید تا اتلاف گرما را کاهش داده و در هزینه‌های انرژی صرفه‌جویی کنید.',
        category: 'efficiency'
      }
    ];
  }

  getRandomTip(): Tip {
    const randomIndex = Math.floor(Math.random() * this.tips.length);
    return this.tips[randomIndex];
  }
}
