import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';
import { DialogContentComponent } from './dialog-content.component';
import { OptionsDialogComponent } from './option-dialog.component'

const routes: Routes = [
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
  { path: 'hello', component: HelloComponent },
  {
    path: 'modals',
    component: DialogContentComponent,
    outlet: 'modal',
    children: [
          {
            path: 'default',
            component: DialogContentComponent
          },
          {
            path: 'options',
            component: OptionsDialogComponent
          }
        ]
  }
];

const appRoutes: Routes = [
  ...routes
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);