import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-child',
  standalone: true,
  imports: [],
  templateUrl: './output-child.component.html',
  styleUrl: './output-child.component.css'
})
export class OutputChildComponent {
  @Output() newOutputEventExample = new EventEmitter<string>();

  addOutputEventExample(value: string) {
    this.newOutputEventExample.emit(value);
  }
}
