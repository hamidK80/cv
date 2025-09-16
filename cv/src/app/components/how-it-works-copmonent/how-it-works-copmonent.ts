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
      title: 'Contact Us',
      description: 'Call or WhatsApp us with your boiler issue. We\'ll ask a few quick questions to understand the problem.',
      icon: '📞',
      details: 'Available 24/7 for emergencies'
    },
    {
      id: 2,
      title: 'Diagnosis & Quote',
      description: 'We visit your property, diagnose the issue, and provide a transparent quote with no hidden fees.',
      icon: '🔍',
      details: 'Same-day diagnosis available'
    },
    {
      id: 3,
      title: 'Repair & Follow-up',
      description: 'We fix the problem quickly and efficiently, then provide tips to prevent future issues.',
      icon: '✅',
      details: '12-month warranty included'
    }
  ]);
}
