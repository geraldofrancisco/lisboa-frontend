import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../../services/theme/theme';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './theme.html',
  styleUrl: './theme.css',
})
export class Theme {
  themeService = inject(ThemeService);

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
