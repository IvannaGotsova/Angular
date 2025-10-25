import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms'

@Component({
  selector: 'app-conditionals',
  imports: [FormsModule],
  templateUrl: './conditionals.component.html',
  styleUrl: './conditionals.component.css'
})
export class ConditionalsComponent {

  userInput: string = '';
  result: string = '';

  checkInputType(): void {
    if (!this.userInput) {
      this.result = 'Enter letter or number.';
    } else if (!isNaN(Number(this.userInput))) {
      this.result = 'It is a number.';
    } else if (/^[a-zA-Z]$/.test(this.userInput)) {
      this.result = 'It is a letter.';
    } else {
      this.result = 'It is something else.';
    }
  }
}
