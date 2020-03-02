import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-content',
  template: `
  <h1 mat-dialog-title>Options Dialog</h1>
  <div mat-dialog-content>
    <p> This is another dialog to prove we can display different ones<p>
  </div>`,
  styles: []
})
export class OptionsDialogComponent  {
}