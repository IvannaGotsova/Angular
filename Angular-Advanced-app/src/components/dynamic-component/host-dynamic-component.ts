import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponentComponent } from './dynamic-component.component';

@Component({
  selector: 'app-host-dynamic-component',
  template: `<ng-container #vc></ng-container>`
})
export class HostDynamicComponent {
  @ViewChild('vc', { read: ViewContainerRef, static: true }) vc!: ViewContainerRef;

  ngOnInit() {
    this.vc.createComponent(DynamicComponentComponent);
  }
}
