import { Component } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator.component';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';

@Component({
  selector: 'app-root',
  imports: [ListaComprasComponent, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'conceitos-basicos';
}
