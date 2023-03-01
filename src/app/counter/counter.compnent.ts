import { Component } from '@angular/core';
@Component({
  selector:'app-counter',
  template:`
  <h3>Counter: {{counter}}</h3>
<button (click)="increaseBy(1)">+1</button>
<button (click)="increaseBy(-1)">-1</button>
<button type="reset"  (click)="resetCounter()">Reset</button>

  `,
})
export class CounterComponent{
  public counter:number=0;

  increaseBy(value:number){
    this.counter+=value
  }
  resetCounter(){
    this.counter=0;
  }

}
