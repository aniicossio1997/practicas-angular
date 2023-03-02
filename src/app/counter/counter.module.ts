import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.compnent';

@NgModule({
  declarations:[
    CounterComponent
  ],
  exports:[
    CounterComponent
  ],

})
export class CounterModule{}