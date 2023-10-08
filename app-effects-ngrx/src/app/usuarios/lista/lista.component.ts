import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import * as usersActions from 'src/app/store/actions/index'
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor( public usuarioService: UsuarioService, private store:Store<AppState> ) { }

  ngOnInit() {
    this.store.select('usuarios').subscribe(data=>this.usuarios=data.users)
    this.store.dispatch(usersActions.CargarUsuarios())

  }

}
