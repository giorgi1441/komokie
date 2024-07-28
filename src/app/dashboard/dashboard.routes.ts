import { Routes } from "@angular/router";

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/users',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import("./dashboard.component").then(c => c.DashboardComponent),
    children: [
      {
        path: 'users',
        loadComponent: () => import("./dashboard-content/users/users.component").then(c => c.UsersComponent)
      },
      {
        path: 'posts',
        loadComponent: () => import("./dashboard-content/posts/posts.component").then(c => c.PostsComponent)
      }
    ]
  },
];
