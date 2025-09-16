import { Component, signal } from '@angular/core';
import { ServiceInfo } from '../../../models/service-info.model';

@Component({
  selector: 'app-services-component',
  imports: [],
  templateUrl: './services-component.html',
  styleUrl: './services-component.css'
})
export class ServicesComponent {
  private serviceInfo = new ServiceInfo();
  
  services = signal(this.serviceInfo.services);
  workingHours = signal(this.serviceInfo.workingHours);
  responseTime = signal(this.serviceInfo.responseTime);
}
