import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { Gasto } from 'src/app/interfaces/gasto.interface';
import { PresupuestoService } from 'src/app/services/presupuesto.service';
import { ConfirmationModalComponent } from 'src/app/shared/confirmation-modal/confirmation-modal.component';
import { ButtonStyle } from 'src/app/shared/confirmation-modal/confirmation-modal.types';

@Component({
  selector: 'app-listar-gastos',
  templateUrl: './listar-gastos.component.html',
  styleUrls: ['./listar-gastos.component.css']
})
export class ListarGastosComponent implements OnInit, OnDestroy {
  indexList:number|null=null
  subscription:Subscription;
  presupuesto:number=0;
  //restante:number=0;
  listaGastos:Gasto[]=[];
  @ViewChild('confirmationModal') 
  private modalComponent!: ConfirmationModalComponent;
  modalStyle: string = 'modal-style-danger';
  modalTitle: string = 'Confirmar eliminacion';
  modalBody: string = '¿Usted desea eliminar el item de la lista?';
  modalButtonColor:  ButtonStyle ='btn-danger';
  modalButtonOkTitle:string='Si';
  modalButtonCancelTitle:string='No';
  async openModal() {
    return await this.modalComponent.open();
  }
  constructor(private _presupuestoService:PresupuestoService){
    this.subscription=this._presupuestoService.getGastos().subscribe(gasto=>{
     // this.restante=this.restante-gasto.costo;
      this.listaGastos.push(gasto);
    })
  }
  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.presupuesto=this._presupuestoService.presupuesto;
    //this.restante=this._presupuestoService.restante;
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
// - modal--//


  getConfirmationValue(value: any) {
    if (value == 'Save click') {
      console.log(value);
      if(this.indexList!==null){
        let gasto=this.listaGastos[this.indexList]
        let total:number=0;
        this.listaGastos.splice(this.indexList, 1);
        //this._presupuestoService.deleteGasto(gasto.costo)
        this._presupuestoService.getRestanteObservable().subscribe( data=>
          {
            total=data+gasto.costo;
          })
        this._presupuestoService.restante.next(total);
      }
    }

  }

  open(id:number) {
    this.indexList=id;
    this.openModal();
  }
  get restante(){
    let restanteNumber:number=0;
    restanteNumber=this._presupuestoService.getRestante()
    return restanteNumber
  }
  

}
