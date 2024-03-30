import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit {
 
  @Input() color: string;

  constructor() {}

  ngOnInit(): void {}
}
