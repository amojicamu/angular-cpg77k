import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';

const routes: Routes = [
  { path: '', component: HelloComponent, pathMatch: 'full' },
  { path: 'hello', component: HelloComponent },
  {
    path: 'login',
    component: HelloComponent,
    outlet: 'modal'
  }
];

const appRoutes: Routes = [
  ...routes
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);