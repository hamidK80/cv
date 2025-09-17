import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-how-it-works-copmonent',
  imports: [],
  templateUrl: './how-it-works-copmonent.html',
  styleUrl: './how-it-works-copmonent.css'
})
export class HowItWorksCopmonent {
  steps = signal([
    {
      id: 1,
      title: 'تماس با ما',
      description: 'با مشکل دیگ بخار خود با ما تماس بگیرید یا در واتساپ پیام دهید. چند سوال سریع می‌پرسیم تا مشکل را درک کنیم.',
      icon: '📞',
      details: '24/7 برای موارد اضطراری در دسترس'
    },
    {
      id: 2,
      title: 'تشخیص و برآورد',
      description: 'به ملک شما می‌آییم، مشکل را تشخیص می‌دهیم و برآورد شفافی بدون هزینه‌های پنهان ارائه می‌دهیم.',
      icon: '🔍',
      details: 'تشخیص همان روز در دسترس'
    },
    {
      id: 3,
      title: 'تعمیر و پیگیری',
      description: 'مشکل را سریع و کارآمد حل می‌کنیم، سپس نکاتی برای جلوگیری از مشکلات آینده ارائه می‌دهیم.',
      icon: '✅',
      details: 'گارانتی 12 ماهه شامل'
    }
  ]);
}
