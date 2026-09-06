import { Component, HostListener, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';

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
    BadgeModule
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout implements OnInit {
  private platformId = inject(PLATFORM_ID);

  isMobile: boolean = false;
  drawerVisible: boolean = false;
  sidebarCollapsed: boolean = false; // Estado para ocultar/exibir no Desktop
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

  // Método unificado para alternar a visibilidade no mobile e no desktop
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