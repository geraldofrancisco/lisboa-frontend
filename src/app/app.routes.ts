import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { MainLayout } from './layouts/main-layout/main-layout';
import { authGuard } from './guards/auth-guard';
import { Dashboard } from './pages/dashboard/dashboard';
import { EmailTypeList } from './pages/fundational/email-type/email-type-list/email-type-list';
import { EmailList } from './pages/fundational/email/email-list/email-list';


export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        component: MainLayout,
        canActivate: [authGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: Dashboard },
            {
                path: 'fundational',
                children: [
                    {
                        path: 'email', 
                        children: [
                            { path: '', component: EmailList },
                            { path: 'type', component: EmailTypeList }
                        ]
                    },
                ]
            }
        ]
    },
    { path: '**', redirectTo: 'login' }
];
