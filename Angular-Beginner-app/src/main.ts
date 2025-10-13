import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h3>{{ title }}</h3>
    <input [(ngModel)]="current" type="text" placeholder="Type Name" />
    <button  [attr.aria-label]="label" (click)="read()">Change Name</button>
    <p>Hello {{ currentName | uppercase }}!</p>
  `
})
export class App {
  title = 'Hello User!';
  current = '';
  currentName = '';
  wide = true;
  get label() { return this.wide ? 'Name' : ''; }

  read() {
    this.currentName = this.current;
  }
}

bootstrapApplication(App, {
  providers: [],
});
