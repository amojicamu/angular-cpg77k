import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styles: []
})
export class DialogComponent  {
  constructor(
    private router : Router,
    public dialogRef: MatDialogRef<DialogComponent>){ }

  onNoClick(): void {
    this.router.navigate([{outlets: {details: null}}]);
    this.dialogRef.close();
  }
}