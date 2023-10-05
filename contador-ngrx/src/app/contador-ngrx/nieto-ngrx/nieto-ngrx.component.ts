import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/app.reducers';
import * as actions from '../contador.actions'
@Component({
  selector: 'app-nieto-ngrx',
  templateUrl: './nieto-ngrx.component.html',
  styleUrls: ['./nieto-ngrx.component.css']
})
export class NietoNgrxComponent implements OnInit {

   contador:number=0;

  constructor(private store:Store<AppStore>) {
    this.store.select('contador').subscribe(data=> this.contador=data);
  }

  ngOnInit(): void {
  }
  reset(){
    this.store.dispatch(actions.reset())
  }
}
