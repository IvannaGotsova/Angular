import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { InputParentComponent } from '../input-parent/input-parent.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ButtonComponent, InputComponent, InputParentComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
