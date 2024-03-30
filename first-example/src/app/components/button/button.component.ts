import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Output () addMeRequest = new EventEmitter()

  onAdd() {
    this.addMeRequest.emit(console.log("Added on the Console"));
  }
}
