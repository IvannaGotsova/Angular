import { Component } from '@angular/core';
import { OutputChildComponent } from '../output-child/output-child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-output-parent',
  standalone: true,
  imports: [OutputChildComponent, CommonModule],
  templateUrl: './output-parent.component.html',
  styleUrl: './output-parent.component.css'
})
export class OutputParentComponent {
  outputExamples = ["exampleOne ", "exampleTwo", "exampleThree", "exampleFour", "exampleFive"];

  addOutputExample(newOutput:string) {
    this.outputExamples.push(newOutput);
  }
}
