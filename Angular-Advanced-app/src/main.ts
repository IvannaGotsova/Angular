import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { SignalsComponent } from './components/signals/signals.component';
import { ChangeDetectionComponent } from './components/change-detection/change-detection.component';
import { DynamicComponentComponent } from './components/dynamic-component/dynamic-component.component';
import { AngularServicesDIComponent } from './components/angular-services-di/angular-services-di.component';
import { FormsComponent } from './components/forms/forms.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecurityComponent } from './components/security/security.component';
import { SsrComponent } from './components/ssr/ssr.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BootstrapComponent, ControlFlowComponent, SignalsComponent, ChangeDetectionComponent, DynamicComponentComponent,
    AngularServicesDIComponent, FormsComponent, AnimationsComponent, SecurityComponent, SsrComponent
  ],
  template: `
    <h3>Hello from Advanced</h3>
    <app-bootstrap></app-bootstrap>
    <app-control-flow></app-control-flow>
    <app-signals></app-signals>
    <app-change-detection></app-change-detection>
    <app-dynamic-component></app-dynamic-component>
    <app-angular-services-di></app-angular-services-di>
    <app-forms></app-forms>
    <app-animations></app-animations>
    <app-security></app-security>
    <app-ssr></app-ssr>
  `
})
export class App {
  
}

bootstrapApplication(App, {
  providers: [ importProvidersFrom(BrowserAnimationsModule)],
});
