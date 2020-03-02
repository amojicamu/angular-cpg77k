import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogComponent } from './dialog.component';

@Component({
  selector: 'app-dialog-content',
  template: `
  <h1 mat-dialog-title>Options Dialog</h1>
  <div mat-dialog-content>
    <p> This is another dialog to prove we can display different ones<p>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="onNoClick()">No Thanks</button>
  </div>
  `,
  styles: []
})
export class OptionsDialogComponent  {
   constructor(
    private router : Router,
    public dialogRef: MatDialogRef<DialogComponent>) {}

  onNoClick(): void {
    this.router.navigate([{outlets: {details: null}}]);
    this.dialogRef.close();
  }
}