import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <button mat-raised-button color="primary" (click)="onClick()">Open Dialog</button>
    <br />
    <br />
    <a [routerLink]="[ '', {outlets: { modal: 'default' } } ]">Default</a>
    <br />
    <a [routerLink]="[ '', {outlets: { modal: 'options' } } ]">Options</a>`
    ,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Output()
  public clicked = new EventEmitter<boolean>();

  onClick() {
    this.clicked.emit();
  }
}
