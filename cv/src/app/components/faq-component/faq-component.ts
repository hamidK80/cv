import { Component, signal } from '@angular/core';
import { FAQData } from '../../../models/faq-data.model';

@Component({
  selector: 'app-faq-component',
  imports: [],
  templateUrl: './faq-component.html',
  styleUrl: './faq-component.css'
})
export class FaqComponent {
  private faqData = new FAQData();
  
  questions = signal(this.faqData.questions);
  mythBusters = signal(this.faqData.mythBusters);
  
  openQuestionId = signal<string | null>(null);
  
  toggleQuestion(id: string) {
    this.openQuestionId.set(this.openQuestionId() === id ? null : id);
  }
  
  isOpen(id: string): boolean {
    return this.openQuestionId() === id;
  }
}
