import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './components/counter.component';
import { ComponentDirectivesComponent } from './components/component-directives/component-directives.component';
import { EventsComponent } from './components/events/events.component';
import { ConditionalsComponent } from './components/conditionals/conditionals.component';
import { ListsComponent } from './components/lists/lists.component';
import { FormsComponent } from './components/forms/forms.component';
import { RouterComponent } from './components/router/router.component';
import { routes } from './app/app.routes';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, CounterComponent, ComponentDirectivesComponent, EventsComponent, ConditionalsComponent, ListsComponent,
    FormsComponent
  ],
  template: `
    <h3>{{ title }}</h3>
    <input [(ngModel)]="current" type="text" placeholder="Type Name" />
    <button  [attr.aria-label]="label" (click)="read()">Change Name</button>
    <p>Hello {{ currentName | uppercase }}!</p>
    <app-counter></app-counter>
    <app-component-directives></app-component-directives>
    <p app-attribute-directives>component-attribute works!</p>
    <app-events></app-events>
    <app-conditionals></app-conditionals>
    <app-lists></app-lists>
    <app-forms></app-forms>
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
