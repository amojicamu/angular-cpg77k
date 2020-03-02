import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<a mat-raised-button [routerLink]="[ {outlets: { modal: 'login' } } ]">Open Dialog</a>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
