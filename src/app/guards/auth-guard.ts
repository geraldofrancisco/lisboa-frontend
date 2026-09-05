import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  if (!isPlatformBrowser(platformId)) {
    return true; 
  }

  //descomentar quando tiver token implementado
  //const token = localStorage.getItem('token');

  const token = "token"; //quando tiver implementado apagar essa linha
  
  if (token) {
    return true; // Permite o acesso à rota
  } else {
    // Se não houver token, redireciona para a tela de login
    return router.createUrlTree(['/login']);
  }

};
