import { Component } from '@angular/core';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'app-attribute-directives',
})
export class AttributeDirectivesComponent {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }
}
