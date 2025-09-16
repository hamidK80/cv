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
        name: 'Boiler Repair',
        description: 'Fast diagnosis and repair of all boiler issues',
        icon: '🔧',
        benefit: 'Restores heat in under 2 hours'
      },
      {
        id: 'service',
        name: 'Annual Service',
        description: 'Complete boiler maintenance and safety check',
        icon: '🛠️',
        benefit: 'Prevents breakdowns and saves energy'
      },
      {
        id: 'emergency',
        name: 'Emergency Call-outs',
        description: '24/7 emergency boiler repair service',
        icon: '🚨',
        benefit: 'On-site within 4 hours'
      },
      {
        id: 'install',
        name: 'New Installation',
        description: 'Professional boiler installation and setup',
        icon: '🏠',
        benefit: 'Energy-efficient and warranty included'
      }
    ];

    this.workingHours = {
      weekdays: '8:00 AM - 6:00 PM',
      weekends: '9:00 AM - 4:00 PM',
      emergency: '24/7 Available'
    };

    this.serviceArea = ['London', 'Surrey', 'Kent', 'Essex'];
    this.responseTime = 'Same day service available';
  }
}
