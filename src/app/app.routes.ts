import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import("./dashboard/dashboard.routes").then(r => r.DASHBOARD_ROUTES)
  }
];
