import { Component, input } from '@angular/core';

@Component({
  selector: 'app-grid-title',
  standalone: true,
  imports: [],
  templateUrl: './grid-title.html',
  styleUrl: './grid-title.css',
})
export class GridTitle {
  title = input.required<string>();
  subtitle = input<string>();
  icon = input<string>();
}
