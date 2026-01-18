import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simplePipeUppercase',
  standalone: true 
})

export class PipesComponent implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
