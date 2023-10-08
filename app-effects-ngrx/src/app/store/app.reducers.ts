import { ActionReducerMap } from '@ngrx/store';
import * as reducers  from './reducers/index';


export interface AppState {
   usuarios:reducers.IUsuariosState
}



export const appReducers: ActionReducerMap<AppState> = {
   usuarios: reducers.usuariosReducer,
}
