import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  headerColor: string = 'blue';
  title: string = 'calc';
  _currentNumber: string = '';
  _currentDisplay: string = '';
  _numbers: Array<number> = [];
  _operators: Array<string> = [];
  _newOperation: boolean = true;

  getValue(event: Event) {
    let valor: any = '';

    const elemento = event.target as HTMLElement;
    valor = elemento.textContent;

    this.addSelection(valor.toString());
  }

  addSelection(value: string) {
    let newNumber: number;

    if (this._newOperation) this._currentDisplay = '';

    if (!isNaN(parseInt(value))) {
      this._currentNumber = this._currentNumber + value;
      this._currentDisplay = this._currentDisplay + value;
      this._newOperation = false;
    } else {
      if (!this._newOperation) {
        newNumber = parseInt(this._currentNumber, 10);
        this._numbers.push(newNumber);
        this._operators.push(value);
        this._currentNumber = '';
        this._currentDisplay = this._currentDisplay + value;
        if (value == '=') {
          this.calculateResult();
          this._newOperation = true;
          this.clearValue();
        }
      }
    }
  }

  clearValue() {
    this._currentNumber = '';
    this._numbers = [];
    this._operators = [];
  }

  clearOperations() {
    this.clearValue();
    this._currentDisplay = '';
  }

  calculateResult() {
    try {
      const resultado = this.doOperations(this._numbers, this._operators);
      console.log('El resultado es:', resultado);
      this._currentDisplay = resultado.toString();
    } catch (error) {
      console.error('Error:', error);
    }
  }

  doOperations(
    numbersList: Array<number>,
    operatorsList: Array<string>
  ): number {
    let i: number = 0;
    let operator: string;
    let result, nextNumber: number;

    result = numbersList[i];
    for (i = 0; i < operatorsList.length; i++) {
      nextNumber = numbersList[i + 1];
      operator = operatorsList[i];
      switch (operator) {
        case '+':
          result += nextNumber;
          break;
        case '-':
          result -= nextNumber;
          break;
        case '*':
          result *= nextNumber;
          break;
        case '/':
          if (nextNumber === 0) {
            this._currentDisplay = 'error';
            throw new Error('No se puede dividir por cero');
          }
          result /= nextNumber;
          break;
        case '=':
          break;
        default:
          throw new Error('Operador no válido');
      }
    }
    return result;
  }
}
