import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Gasto } from 'src/app/interfaces/gasto.interface';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gastos',
  templateUrl: './listar-gastos.component.html',
  styleUrls: ['./listar-gastos.component.css']
})
export class ListarGastosComponent implements OnInit, OnDestroy {

  subscription:Subscription;
  presupuesto:number=0;
  restante:number=0;
  listaGastos:Gasto[]=[];
  constructor(private _presupuestoService:PresupuestoService){
    this.subscription=this._presupuestoService.getGastos().subscribe(gasto=>{
      this.restante=this.restante-gasto.costo;
      this.listaGastos.push(gasto);
    })
  }
  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.presupuesto=this._presupuestoService.presupuesto;
    this.restante=this._presupuestoService.restante;
  }
  aplicarColorRestante(){
    if(this.presupuesto /4 > this.restante){
      return 'alert alert-danger';
    }
    if(this.presupuesto /2 > this.restante){
      return 'alert alert-warning';
    }

    return 'alert alert-secondary'
  }

}
