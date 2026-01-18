import { Component, OnInit, OnDestroy } from '@angular/core'

@Component({
  selector: 'app-lifecyle-hooks',
  imports: [],
  templateUrl: './lifecyle-hooks.component.html',
  styleUrl: './lifecyle-hooks.component.css'
})
export class LifecyleHooksComponent implements OnInit, OnDestroy {

  constructor() {
    console.log('Constructor: Component instance created');
  }

  ngOnInit(): void {
    console.log('ngOnInit: Component initialized');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Component is about to be destroyed');
  }
}
