import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { provideRouter, RouterOutlet, RouterLink, withHashLocation } from '@angular/router';

@Component({
  selector: 'app-router',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './router.component.html',
  styleUrl: './router.component.css'
})
export class RouterComponent {

}

@Component({
  standalone: true,
  template: `<p>Home route!</p>`
})
export class Home {}

@Component({
  standalone: true,
  template: `<p>About route!</p>`
})
export class About {}

const routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About }
];

bootstrapApplication(RouterComponent, {
  providers: [provideRouter(routes, withHashLocation())]
});