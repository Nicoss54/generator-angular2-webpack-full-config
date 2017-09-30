import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { HelloWorldModule } from './hello-world/hello-world.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        HelloWorldModule,
        AppRoutingModule
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
