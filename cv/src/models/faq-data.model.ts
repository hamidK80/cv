export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface MythBuster {
  id: string;
  myth: string;
  truth: string;
  category: string;
}

export class FAQData {
  questions: FAQ[];
  mythBusters: MythBuster[];

  constructor() {
    this.questions = [
      {
        id: 'cost',
        question: 'هزینه سرویس سالانه دیگ بخار چقدر است؟',
        answer: 'سرویس سالانه ما از 2,500,000 تومان شروع می‌شود. این شامل بازرسی کامل، تمیزکاری و بررسی ایمنی است. قیمت‌گذاری شفاف بدون هزینه‌های پنهان.',
        category: 'pricing'
      },
      {
        id: 'noisy',
        question: 'آیا می‌توانم خودم دیگ بخار پر سر و صدا را تعمیر کنم؟',
        answer: 'اگرچه برخی مشکلات جزئی قابل تعمیر خودی است، اما صدای دیگ بخار اغلب نشان‌دهنده مشکلات جدی است. توصیه می‌کنیم برای جلوگیری از خسارت‌های پرهزینه، تشخیص حرفه‌ای انجام دهید.',
        category: 'repair'
      },
      {
        id: 'emergency',
        question: 'آیا خدمات اضطراری ارائه می‌دهید؟',
        answer: 'بله! ما خدمات اضطراری 24/7 برای خرابی‌های فوری دیگ بخار ارائه می‌دهیم. زمان پاسخ معمولاً کمتر از 4 ساعت است.',
        category: 'service'
      },
      {
        id: 'warranty',
        question: 'چه گارانتی ارائه می‌دهید؟',
        answer: 'تمام تعمیرات ما با گارانتی 12 ماهه همراه است. نصب‌های جدید شامل گارانتی سازنده به علاوه ضمانت خدمات 2 ساله ما است.',
        category: 'warranty'
      }
    ];

    this.mythBusters = [
      {
        id: 'bleeding',
        myth: 'باید هر ماه رادیاتورها را هواگیری کنید',
        truth: 'رادیاتورهای مدرن فقط زمانی نیاز به هواگیری دارند که در بالا سرد باشند. هواگیری بیش از حد می‌تواند مشکلات بیشتری ایجاد کند.',
        category: 'maintenance'
      }
    ];
  }
}
