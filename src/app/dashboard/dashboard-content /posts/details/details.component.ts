import { Component, inject } from '@angular/core';
import { DIALOG_DATA } from "@angular/cdk/dialog";

@Component({
    selector: 'app-details',
    standalone: true,
    imports: [],
    templateUrl: './details.component.html',
    styleUrl: './details.component.css'
})
export class DetailsComponent {
    data: { postTitle: string, body: string } = inject(DIALOG_DATA);
}
