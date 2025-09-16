import { Component, signal, computed } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { TipsData } from '../../../models/tips-data.model';

@Component({
  selector: 'app-tip-component',
  imports: [TitleCasePipe],
  templateUrl: './tip-component.html',
  styleUrl: './tip-component.css'
})
export class TipComponent {
  private tipsData = new TipsData();
  
  currentTip = computed(() => this.tipsData.getRandomTip());
  
  refreshTip() {
    // Force recomputation by creating new instance
    this.tipsData = new TipsData();
  }
}
