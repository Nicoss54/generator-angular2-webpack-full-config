import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './hello-world/welcome/welcome.component';


const routes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full'},
    { path: 'welcome', component: WelcomeComponent }
];




@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }
