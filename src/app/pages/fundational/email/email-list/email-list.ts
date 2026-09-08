import { Component } from '@angular/core';
import { GridTitle } from '../../../../layouts/grid-title/grid-title';

@Component({
  selector: 'app-email-list',
  standalone: true,
  imports: [GridTitle],
  templateUrl: './email-list.html',
  styleUrl: './email-list.css',
})
export class EmailList {}
