import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  counter = signal(0);

  increment() {
    this.counter.set(this.counter() + 1);
  }
  decrement() {
    this.counter.set(this.counter() - 1);
  }
}
