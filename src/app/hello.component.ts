import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<button mat-raised-button color="primary" (click)="onClick()">Open Dialog</button>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Output()
  public selectCriteria = new EventEmitter<boolean>();

  onClick() {
    this.selectCriteria.emit();
  }
}
