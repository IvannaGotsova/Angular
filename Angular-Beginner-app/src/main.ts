import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h3>{{ title }}</h3>
    <input [(ngModel)]="current" type="text" placeholder="Type Name" />
    <button (click)="read()">Change Name</button>
    <p>Hello {{ currentName }}!</p>
  `,
  imports: [FormsModule]
})
export class App {
  title = 'Hello User!';
  current = '';
  currentName = '';

  read() {
    this.currentName = this.current;
  }
}

bootstrapApplication(App, {
  providers: [],
});
