import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])

  ],
  exports:[ConfirmationModalComponent]
})
export class SharedModule { }
