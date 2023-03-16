import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css']
})
export class IngresarPresupuestoComponent {
  public cantidad:number=0;
  public cantidadIncorrenta:boolean=false;

  constructor(private _presupuestoService:PresupuestoService,
    private router:Router){}

  agregar(){
    if(this.cantidad >0){
      this.cantidadIncorrenta=false
      this._presupuestoService.presupuesto=this.cantidad;
      this._presupuestoService.restante=this.cantidad;
      this.router.navigate(['/gastos']);
    }else{
      this.cantidadIncorrenta=true
    }

    
  }
}
