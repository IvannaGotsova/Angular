import { Component, OnInit } from '@angular/core';
import { NumbersService } from './numbers';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-angular-services-di',
  imports: [CommonModule],
  templateUrl: './angular-services-di.component.html',
  styleUrl: './angular-services-di.component.css'
})
export class AngularServicesDIComponent implements OnInit {
  numbers: string[] = [];

  constructor(private numberService: NumbersService) {}

  ngOnInit(): void {
    this.numbers = this.numberService.getNumbers();
  }
}
