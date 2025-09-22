import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  number1: number = 0;
  number2: number = 0;
  result: number = 0;

  calculateResult() {
    this.result = this.number1 + this.number2;
  }
}
