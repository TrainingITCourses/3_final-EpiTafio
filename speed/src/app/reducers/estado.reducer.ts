import { EstadoActionTypes, EstadoActions } from './estado.actions';

export interface EstadoState {
  types: any[];
}

export const initialState: EstadoState = {
  types: []
};

export function reducer(
  state = initialState,
   action: EstadoActions
   ): EstadoState {
  switch (action.type) {
    case EstadoActionTypes.EstadosLoaded:
      return { types: action.payload };
    default:
      return state;
  }
}
