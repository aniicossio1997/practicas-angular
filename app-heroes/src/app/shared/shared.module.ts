import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { Error404PageComponent } from './error404-page/error404-page.component';



@NgModule({
  declarations: [
    Error404PageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    Error404PageComponent
  ]
})
export class SharedModule { }
