import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DialogComponent } from './dialog.component';

import { routing } from './app-routing.module';

// Import of the angular-material angular module
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,

    // Add routing
    routing,

     // Import of the angular-material angular module
    AngularMaterialModule
  ],
  declarations: [ AppComponent, HelloComponent, DialogComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [ DialogComponent ]
})
export class AppModule { }
