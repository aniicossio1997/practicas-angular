import { Injectable } from '@angular/core';
import { Actions, createEffect,ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions/usuarios.actions'
import { map, mergeMap, tap } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsuariosEffects{
  constructor(private actions$:Actions, private usuariosService:UsuarioService ){}

  cargarUsuarios$=createEffect(
    ()=>this.actions$.pipe(
      ofType(usuariosActions.CargarUsuarios),
      mergeMap(
        ()=> this.usuariosService.getUsers().pipe(
          map(users => usuariosActions.CargarUsuariosSuccess({usuarios:users}))
          )

      )
    )
  );
}
