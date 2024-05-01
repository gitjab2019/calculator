import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})



export class BotonComponent {
   private _color!: number;
   @Input() _simbol: string = '';

  public get color(): number {
    return this._color;
  }
  public set color(value: number) {
    this._color = value;
  }

  public get simbol(): string {
    return this._simbol;
  }
  public set simbol(value: string) {
    this._simbol = value;
  }

}

