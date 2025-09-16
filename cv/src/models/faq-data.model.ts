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
        question: 'How much does a boiler tune-up cost?',
        answer: 'Our annual service starts from £89. This includes full inspection, cleaning, and safety checks. We provide transparent pricing with no hidden fees.',
        category: 'pricing'
      },
      {
        id: 'noisy',
        question: 'Can I fix a noisy boiler myself?',
        answer: 'While some minor issues can be DIY, boiler noise often indicates serious problems. We recommend professional diagnosis to prevent costly damage.',
        category: 'repair'
      },
      {
        id: 'emergency',
        question: 'Do you offer emergency services?',
        answer: 'Yes! We provide 24/7 emergency call-outs for urgent boiler failures. Response time is typically within 4 hours.',
        category: 'service'
      },
      {
        id: 'warranty',
        question: 'What warranty do you provide?',
        answer: 'All our repairs come with a 12-month warranty. New installations include manufacturer warranty plus our 2-year service guarantee.',
        category: 'warranty'
      }
    ];

    this.mythBusters = [
      {
        id: 'bleeding',
        myth: 'You need to bleed radiators every month',
        truth: 'Modern radiators only need bleeding when they feel cold at the top. Over-bleeding can cause more problems.',
        category: 'maintenance'
      }
    ];
  }
}
