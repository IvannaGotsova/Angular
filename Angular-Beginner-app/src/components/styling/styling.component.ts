import { Component } from '@angular/core';

@Component({
  selector: 'app-styling',
  imports: [],
  templateUrl: './styling.component.html',
  styleUrl: './styling.component.css'
})
export class StylingComponent {
  bgColor = 'darkblue';

  changeColor() {
    this.bgColor = this.bgColor === 'darkblue' ? 'lightblue' : 'darkblue';
  }
}
