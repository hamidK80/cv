import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-toolbox-component',
  imports: [],
  templateUrl: './toolbox-component.html',
  styleUrl: './toolbox-component.css'
})
export class ToolboxComponent {
  tools = signal([
    {
      id: 1,
      name: 'مانومتر دیجیتال',
      description: 'تست فشار دقیق برای تشخیص صحیح دیگ بخار',
      icon: '📊',
      benefit: 'از تشخیص اشتباه جلوگیری می‌کند و خوانش فشار صحیح را تضمین می‌کند'
    },
    {
      id: 2,
      name: 'آنالایزر احتراق',
      description: 'تحلیل پیشرفته گاز برای بهینه‌سازی کارایی دیگ بخار',
      icon: '🔥',
      benefit: 'کارایی را به حداکثر می‌رساند و هزینه‌های انرژی را کاهش می‌دهد'
    },
    {
      id: 3,
      name: 'دوربین تصویربرداری حرارتی',
      description: 'تشخیص حرارت برای شناسایی مشکلات پنهان',
      icon: '📷',
      benefit: 'مشکلات را قبل از تبدیل شدن به تعمیرات پرهزینه شناسایی می‌کند'
    },
    {
      id: 4,
      name: 'ست آچار حرفه‌ای',
      description: 'ابزارهای با کیفیت بالا برای تعمیرات قابل اعتماد',
      icon: '🔧',
      benefit: 'اتصالات محکم و تعمیرات ماندگار را تضمین می‌کند'
    },
    {
      id: 5,
      name: 'کیت تشخیص نشت',
      description: 'تجهیزات پیشرفته برای شناسایی دقیق نشت آب',
      icon: '💧',
      benefit: 'نشت‌ها را سریع و بدون آسیب غیرضروری پیدا می‌کند'
    },
    {
      id: 6,
      name: 'تجهیزات ایمنی',
      description: 'تجهیزات ایمنی کامل برای خدمات محافظت شده',
      icon: '🛡️',
      benefit: 'شرایط کاری ایمن برای همه را تضمین می‌کند'
    }
  ]);
}
