import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { DirectivaPersonalizadaDirective } from './directives/directiva-personalizada.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasComponent,
    DirectivaPersonalizadaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
