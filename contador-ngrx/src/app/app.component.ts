import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ACTIONS_CONTADOR from './contador-ngrx/contador.actions';
import { AppStore } from './app.reducers';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contador: number;
  contadorNgrx: number;
  constructor(private store: Store<AppStore> ) {
    this.contador=10;
    this.store.select('contador').subscribe(data=> this.contadorNgrx=(data));
  }
  increment(){
    this.contador++
  }
  decrement(){
    this.contador--
  }
  incrementNgrx(){
    this.store.dispatch(ACTIONS_CONTADOR.increment())
  }
  decrementNgrx(){
    this.store.dispatch(ACTIONS_CONTADOR.decrement())
  }

}
