import { Component, HostListener, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

// Componentes PrimeNG
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    DrawerModule,
    ButtonModule,
    AvatarModule,
    BadgeModule,
    CardModule
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css' // Importação do arquivo de estilo externo
})
export class MainLayout implements OnInit {
  private platformId = inject(PLATFORM_ID);

  isMobile: boolean = false;
  drawerVisible: boolean = false;
  sidebarCollapsed: boolean = false;
  analyticsOpen: boolean = true;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  checkScreenSize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < 1024;
      if (!this.isMobile) {
        this.drawerVisible = false;
      }
    }
  }

  toggleSidebar() {
    if (this.isMobile) {
      this.drawerVisible = !this.drawerVisible;
    } else {
      this.sidebarCollapsed = !this.sidebarCollapsed;
    }
  }

  toggleAnalytics() {
    this.analyticsOpen = !this.analyticsOpen;
  }
}