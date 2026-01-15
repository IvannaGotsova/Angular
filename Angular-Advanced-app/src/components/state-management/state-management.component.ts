import { Component } from '@angular/core';
import { CounterService } from './counter';

@Component({
  selector: 'app-state-management',
  imports: [],
  templateUrl: './state-management.component.html',
  styleUrl: './state-management.component.css'
})
export class StateManagementComponent {
  count = 0;

  constructor(private counterService: CounterService) {
    this.counterService.count$.subscribe(value => this.count = value);
  }

  increment() {
    this.counterService.increment();
  }

  iderement() {
    this.counterService.decrement();
  }

  reset() {
    this.counterService.reset();
  }
}
