import { Component } from '@angular/core';

interface ItemSidebar{
  label: string;
  icon: string;
  url: string;
}
@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {
  public sidebarItems:ItemSidebar[]=[
    {label:'Listado',icon:'label',url:'./list'},
    {label:'Añadir',icon:'add',url:'./new-hero'},
    {label:'Buscar',icon:'search',url:'./search'},
  ]
}
