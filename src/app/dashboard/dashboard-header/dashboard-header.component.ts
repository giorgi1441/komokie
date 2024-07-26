import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
    imports: [
        RouterLink,
        NgOptimizedImage
    ],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.css'
})
export class DashboardHeaderComponent {

}
