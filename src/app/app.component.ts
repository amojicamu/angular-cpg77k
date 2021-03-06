import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(
    public dialog: MatDialog,
    private router : Router) {}

  public onClick(target: string) {
    this.router.navigate([{outlets: {details: target}}]);

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px'
    });
  }
}
