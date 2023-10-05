import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/app.reducers';
import { divide, multiplicate } from '../contador.actions';

@Component({
  selector: 'app-hijo-ngrx',
  templateUrl: './hijo-ngrx.component.html',
  styleUrls: ['./hijo-ngrx.component.css']
})
export class HijoNgrxComponent implements OnInit {


   contador:number=0;

  constructor(private store:Store<AppStore>) {
    this.store.select('contador').subscribe(data=> this.contador=data);
  }
  ngOnInit(): void {
  }
  multiplicar(){
    this.store.dispatch(multiplicate({numero:2}))
  }
  dividir(){
    this.store.dispatch(divide({numero:2}))
  }

}
