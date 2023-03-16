import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gastos',
  templateUrl: './listar-gastos.component.html',
  styleUrls: ['./listar-gastos.component.css']
})
export class ListarGastosComponent implements OnInit, OnDestroy {

  subscription:Subscription;
  constructor(private _presupuestoService:PresupuestoService){
    this.subscription=this._presupuestoService.getGastos().subscribe(gastos=>{
      console.log(gastos);
    })
  }
  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
  ngOnInit(): void {
  }

}
