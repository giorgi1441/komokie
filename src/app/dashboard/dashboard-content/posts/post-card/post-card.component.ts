import { Component, input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
  host: {
    'class': 'cursor-pointer'
  }
})
export class PostCardComponent {
  title = input.required<string>();
  description = input<string>()
}
