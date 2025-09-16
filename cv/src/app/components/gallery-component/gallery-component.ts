import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-gallery-component',
  imports: [],
  templateUrl: './gallery-component.html',
  styleUrl: './gallery-component.css'
})
export class GalleryComponent {
  galleryItems = signal([
    {
      id: 1,
      title: 'Boiler Installation',
      beforeImage: '/assets/images/boiler-before.jpg',
      afterImage: '/assets/images/boiler-after.jpg',
      caption: 'Complete boiler replacement with modern energy-efficient unit',
      service: 'Installation',
      year: '2024'
    },
    {
      id: 2,
      title: 'Radiator Repair',
      beforeImage: '/assets/images/radiator-before.jpg',
      afterImage: '/assets/images/radiator-after.jpg',
      caption: 'Fixed leaking radiator and restored full heating',
      service: 'Repair',
      year: '2024'
    },
    {
      id: 3,
      title: 'Pipe Replacement',
      beforeImage: '/assets/images/pipe-before.jpg',
      afterImage: '/assets/images/pipe-after.jpg',
      caption: 'Replaced corroded pipes with new copper fittings',
      service: 'Repair',
      year: '2023'
    },
    {
      id: 4,
      title: 'System Upgrade',
      beforeImage: '/assets/images/system-before.jpg',
      afterImage: '/assets/images/system-after.jpg',
      caption: 'Upgraded entire heating system for better efficiency',
      service: 'Upgrade',
      year: '2023'
    },
    {
      id: 5,
      title: 'Emergency Fix',
      beforeImage: '/assets/images/emergency-before.jpg',
      afterImage: '/assets/images/emergency-after.jpg',
      caption: 'Same-day emergency repair during winter breakdown',
      service: 'Emergency',
      year: '2024'
    },
    {
      id: 6,
      title: 'Maintenance Service',
      beforeImage: '/assets/images/maintenance-before.jpg',
      afterImage: '/assets/images/maintenance-after.jpg',
      caption: 'Annual service and cleaning for optimal performance',
      service: 'Maintenance',
      year: '2024'
    }
  ]);
  
  selectedItem = signal<number | null>(null);
  
  selectItem(id: number) {
    this.selectedItem.set(this.selectedItem() === id ? null : id);
  }
}
