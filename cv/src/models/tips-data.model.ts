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
        title: 'Bleed Your Radiators',
        content: 'Bleed your radiators monthly to avoid cold spots and improve heating efficiency.',
        category: 'maintenance'
      },
      {
        id: 'check-pressure',
        title: 'Check Boiler Pressure',
        content: 'Keep your boiler pressure between 1-2 bar. Low pressure can cause heating issues.',
        category: 'maintenance'
      },
      {
        id: 'annual-service',
        title: 'Annual Service',
        content: 'Schedule annual boiler service to prevent breakdowns and maintain efficiency.',
        category: 'service'
      },
      {
        id: 'thermostat',
        title: 'Smart Thermostat',
        content: 'Install a smart thermostat to save energy and control heating remotely.',
        category: 'efficiency'
      },
      {
        id: 'insulation',
        title: 'Pipe Insulation',
        content: 'Insulate hot water pipes to reduce heat loss and save on energy bills.',
        category: 'efficiency'
      }
    ];
  }

  getRandomTip(): Tip {
    const randomIndex = Math.floor(Math.random() * this.tips.length);
    return this.tips[randomIndex];
  }
}
