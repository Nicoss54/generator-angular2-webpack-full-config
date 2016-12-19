import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { routing, appRoutingProviders } from './app.routing';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        appRoutingProviders
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
