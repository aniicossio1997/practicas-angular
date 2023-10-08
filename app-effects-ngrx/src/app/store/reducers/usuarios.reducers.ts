import * as ACCIONES_USERS from 'src/app/store/actions/index';

import { createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export interface IUsuariosState {
    users:Usuario[],
    loaded:boolean,
    loading:boolean,
    error:any

}

export const usuariosInitialState: IUsuariosState = {
   loaded:false,
   loading:false,
   users:[],
   error:null
}

const _usuariosReducer = createReducer(usuariosInitialState,
    on(ACCIONES_USERS.CargarUsuarios, state => ({ ...state,loading:true})),
    on(ACCIONES_USERS.CargarUsuariosSuccess, (state,{usuarios}) => ({
      ...state,
      loaded:false,
      error:null,
      loading:false,
      users:[...usuarios]
    })),
    on(ACCIONES_USERS.CargarUsuariosError, (state,{payload}) => ({
      ...state,
      loaded:false,
      error:payload,
      loading:false,

    })),

);

export function usuariosReducer(state:any, action:any) {
    return _usuariosReducer(state, action);
}
