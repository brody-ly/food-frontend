import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {LetseatComponent} from './letseat/letseat.component';


export const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'letseat',
        component: LetseatComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);