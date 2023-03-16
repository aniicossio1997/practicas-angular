import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Gasto } from '../interfaces/gasto.interface';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  presupuesto:number=0;
  restante:number=0;
  listaGastos:Gasto[]=[]
  private gastos$=new Subject<Gasto>();
  constructor() { }
  
  addGasto(gasto:Gasto){
    //this.listaGastos.push(gasto);
    this.restante=this.restante-gasto.costo;
    //observable
    this.gastos$.next(gasto);
  }

  getGastos():Observable<Gasto>{
    
    return this.gastos$.asObservable();
  }
}
