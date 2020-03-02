import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-content',
  template: `
  <h1 mat-dialog-title>Default Dialog</h1>
  <div mat-dialog-content>
    <p> This is a standard dialog </p>
  </div>`,
  styles: []
})
export class DialogContentComponent  {
}