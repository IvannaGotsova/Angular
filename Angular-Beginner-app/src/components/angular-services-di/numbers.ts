import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class NumbersService {
  private numbers: string[] = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

  getNumbers(): string[] {
    return this.numbers;
  }
}