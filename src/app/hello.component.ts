import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <button mat-raised-button color="primary" (click)="onClick('default')">Open Default</button>
    <br />
    <br />
    <button mat-raised-button color="primary" (click)="onClick('options')">Open Options</button>
    <br />
    `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Output()
  public clicked = new EventEmitter<String>();

  onClick(target: string) {
    this.clicked.emit(target);
  }
}
