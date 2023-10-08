import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const CargarUsuarios = createAction('[Usuarios ] Cargar Usuarios');
export const CargarUsuariosSuccess = createAction(
  '[Usuarios ] Cargar Usuarios Success',
  props<{usuarios:Usuario[]}>()
  );

export const CargarUsuariosError = createAction(
  '[Usuarios ] Cargar Usuarios Error',
  props<{payload:any}>()
  );
