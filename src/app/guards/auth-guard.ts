import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  // 1. SSR Check: Permite a execução inicial no servidor Node.js
  if (!isPlatformBrowser(platformId)) {
    return true; 
  }

  // 2. Leitura do Token (Alterne os comentários ao integrar a API)
  // const token = localStorage.getItem('token');
  const token = 'token'; // Mock temporário para desenvolvimento

  // 3. Validação de Acesso
  if (token) {
    return true;
  }

  // 4. Redirecionamento seguro via UrlTree mantendo o estado da SPA
  return router.createUrlTree(['/login']);
};