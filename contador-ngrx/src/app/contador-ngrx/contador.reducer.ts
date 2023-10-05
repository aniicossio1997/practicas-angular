import { Action, createReducer, on } from "@ngrx/store";
import {
  decrement,
  divide,
  increment,
  multiplicate,
  reset,
} from "./contador.actions";

export const initialState = 20;
const _contadorReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0),
  on(multiplicate, (state, { numero }) => state * numero),
  on(divide, (state, { numero }) => state / numero)
);

export function ContadorReducer(state: number = initialState, action: Action) {
  return _contadorReducer(state, action);
}
