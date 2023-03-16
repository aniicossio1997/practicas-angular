import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Gasto } from 'src/app/interfaces/gasto.interface';
import { PresupuestoService } from 'src/app/services/presupuesto.service';


@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {
  //gasto:Gasto={ nombre:'', costo:0}
  public titulo:string='';
  public costo:number=0;
  isFormIncorrect:boolean=false;
  textIncorrect:string='Nombre o costo incorrecto'
  constructor(private _presupuestoService:PresupuestoService){}
  ngOnInit(): void {
  }

  handleForm(){
    
    if(this.costo>this._presupuestoService.restante){
      this.isFormIncorrect=true;
      this.textIncorrect='El costo ingresada supera al presupuesto';
      return;
    }
    if(this.titulo==='' || this.costo <=0){
      this.isFormIncorrect=true;
      return;
    }
    //crea el objeto
    const GASTO:Gasto={
      costo:this.costo,
      titulo:this.titulo
    }
    this._presupuestoService.addGasto(GASTO);
    this.isFormIncorrect=false;
    this.costo=0;
    this.titulo='';
  }

}
