import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './components/welcome/welcome.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full'},
    { path: 'welcome', component: WelcomeComponent }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
