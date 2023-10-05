import {createAction, props} from '@ngrx/store'

// las acciones simples
export const increment = createAction('[Contador] Increment');
export const decrement = createAction('[Contador] Decrement');
export const reset= createAction('[Contador] Reset');

//compuestas con parámetros
export const multiplicate = createAction('[Contador] Multiplicate',props<{numero:number}>());
export const divide = createAction('[Contador] Divide',props<{numero:number}>());

