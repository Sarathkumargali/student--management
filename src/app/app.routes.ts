import { Routes } from '@angular/router';
import { Signup } from './signup/signup'; 
import { Signin } from './signin/signin';
import { Homepage } from './homepage/homepage';

export const routes: Routes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: 'signin', component: Signin },
    { path: 'signup', component: Signup },
    { path: 'homepage', component: Homepage },
];
