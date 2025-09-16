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
      name: 'Digital Manometer',
      description: 'Precision pressure testing for accurate boiler diagnostics',
      icon: '📊',
      benefit: 'Prevents misdiagnosis and ensures proper pressure readings'
    },
    {
      id: 2,
      name: 'Combustion Analyzer',
      description: 'Advanced gas analysis for optimal boiler efficiency',
      icon: '🔥',
      benefit: 'Maximizes efficiency and reduces energy costs'
    },
    {
      id: 3,
      name: 'Thermal Imaging Camera',
      description: 'Heat detection for identifying hidden issues',
      icon: '📷',
      benefit: 'Spots problems before they become costly repairs'
    },
    {
      id: 4,
      name: 'Professional Wrench Set',
      description: 'High-quality tools for reliable repairs',
      icon: '🔧',
      benefit: 'Ensures secure connections and lasting repairs'
    },
    {
      id: 5,
      name: 'Leak Detection Kit',
      description: 'Advanced equipment for pinpointing water leaks',
      icon: '💧',
      benefit: 'Finds leaks quickly without unnecessary damage'
    },
    {
      id: 6,
      name: 'Safety Equipment',
      description: 'Complete safety gear for protected service',
      icon: '🛡️',
      benefit: 'Ensures safe working conditions for everyone'
    }
  ]);
}
