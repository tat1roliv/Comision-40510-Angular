import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
//import { ROOT_REDUCERS } from './core/state/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    CoreModule,
    //StoreModule.forRoot(ROOT_REDUCERS),
    StoreModule.forRoot({},{}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




