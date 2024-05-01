import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrl: './visor.component.css'
})
export class VisorComponent {
  @Input() _display: string='';

  public get saldo(): string {
    return this._display;
  }
  public set saldo(value: string) {
    this._display = value;
  }

}
