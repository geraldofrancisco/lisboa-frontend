import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { MainLayout } from './layouts/main-layout/main-layout';
import { authGuard } from './guards/auth-guard';
import { Dashboard } from './pages/dashboard/dashboard';
import { Component } from '@angular/core';
import { EmailTypeList } from './pages/email-type/email-type-list/email-type-list';

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
                path: 'email-type',
                children: [
                    { path: '', component: EmailTypeList },
                ]
            }
        ]
    },
    { path: '**', redirectTo: 'login' }
];
