import { Injectable } from '@angular/core';
import { BehaviorSubject, from, map, Observable, Subject, tap } from 'rxjs';
import { Gasto } from '../interfaces/gasto.interface';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  presupuesto:number=0;
  restante= new BehaviorSubject(0);
  listaGastos:Gasto[]=[]
  private gastos$=new Subject<Gasto>();
  constructor() { }
  
  addGasto(gasto:Gasto){
    //this.listaGastos.push(gasto);
    this.restante.pipe(tap(
      data=> console.log(data)
    ))
   
    this.gastos$.next(gasto);
  }

  getRestanteObservable(){
    return this.restante.asObservable();
  }

  getGastos():Observable<Gasto>{
    return this.gastos$.asObservable();
  }
  getRestante():number{
    let restoNumber:number=0;
    this.restante.subscribe(data=>restoNumber=data);
    return restoNumber;
  }
}
