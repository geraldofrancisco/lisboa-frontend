import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'app-theme';
  private platformId = inject(PLATFORM_ID);
  
  currentTheme = signal<Theme>('dark');

  constructor() {
    this.initTheme();
  }

  private initTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme;
      // Se não houver registro no localStorage, o padrão é 'dark'
      const themeToApply: Theme = savedTheme ? savedTheme : 'dark';
      this.applyTheme(themeToApply);
    }
  }

  toggleTheme(): void {
    const nextTheme: Theme = this.currentTheme() === 'dark' ? 'light' : 'dark';
    this.applyTheme(nextTheme);
  }

  private applyTheme(theme: Theme): void {
    this.currentTheme.set(theme);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.THEME_KEY, theme);

      const htmlElement = document.documentElement;
      
      if (theme === 'dark') {
        htmlElement.classList.add('my-app-dark');
      } else {
        htmlElement.classList.remove('my-app-dark');
      }
    }
  }
}