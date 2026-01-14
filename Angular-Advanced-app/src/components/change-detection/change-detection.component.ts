import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  imports: [CommonModule], 
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent {
   items = signal([{ id: 1, label: 'First' }]);

  addItem() {
    this.items.update(current =>
      [...current, { id: Date.now(), label: 'New' }]
    );
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
