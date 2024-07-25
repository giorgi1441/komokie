import { Component } from '@angular/core';
import { DashboardHeaderComponent } from "./dashboard-header/dashboard-header.component";
import { RouterOutlet } from "@angular/router";
import { DashboardFooterrComponent } from "./dashboard-footerr/dashboard-footerr.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ DashboardHeaderComponent, RouterOutlet, DashboardFooterrComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {

}
