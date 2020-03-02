import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';
import { DialogContentComponent } from './dialog-content.component';

const routes: Routes = [
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
  { path: 'hello', component: HelloComponent },
  {
    path: 'login',
    component: DialogContentComponent,
    outlet: 'modal'
  }
];

const appRoutes: Routes = [
  ...routes
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);