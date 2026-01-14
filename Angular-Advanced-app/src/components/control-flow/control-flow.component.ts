import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})

export class ControlFlowComponent {
   people = [
    { name: 'First', number: 'one' },
    { name: 'Second', number: 'two' },
    { name: 'Third', number: 'three' },
    { name: 'Fourth', number: 'four' },
    { name: 'Fifth', number: 'five' }
  ];
}
