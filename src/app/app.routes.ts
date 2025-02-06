import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PrincipalLayoutComponent } from './layouts/principal-layout/principal-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: PrincipalLayoutComponent
      }
    ]
  }
];
