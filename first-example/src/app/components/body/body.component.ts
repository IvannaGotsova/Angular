import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { InputParentComponent } from '../input-parent/input-parent.component';
import { OutputParentComponent } from '../output-parent/output-parent.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ButtonComponent, InputComponent, InputParentComponent, OutputParentComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
