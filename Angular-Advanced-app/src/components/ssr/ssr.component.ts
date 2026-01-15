import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ssr',
  standalone: true,
  imports: [],
  templateUrl: './ssr.component.html',
  styleUrl: './ssr.component.css'
})
export class SsrComponent {
  isOn = typeof window !== 'undefined';
}
