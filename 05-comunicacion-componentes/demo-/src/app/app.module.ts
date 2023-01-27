import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentePadreComponent } from './components/componente-padre/componente-padre.component';
import { ComponenteHijoComponent } from './components/componente-hijo/componente-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePadreComponent,
    ComponenteHijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
