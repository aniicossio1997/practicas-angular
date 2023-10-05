import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { environment } from '../environments/environment';

// NgRx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { ContadorReducer } from './contador-ngrx/contador.reducer';
import { HijoNgrxComponent } from './contador-ngrx/hijo-ngrx/hijo-ngrx.component';
import { NietoNgrxComponent } from './contador-ngrx/nieto-ngrx/nieto-ngrx.component';

@NgModule({
  declarations: [
    AppComponent,
  HijoComponent,
  NietoComponent,
  HijoNgrxComponent,
  NietoNgrxComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ contador:ContadorReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
