import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { EffectsArray } from './store/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UsuariosModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([...EffectsArray]),
    StoreDevtoolsModule.instrument({ maxAge: 25, name:'users',
    logOnly: environment.production, // Restrict extension to log-only mode

  }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
