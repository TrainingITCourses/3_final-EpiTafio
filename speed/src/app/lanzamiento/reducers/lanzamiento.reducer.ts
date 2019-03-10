import { LanzamientoActions, LanzamientoActionTypes } from './lanzamiento.actions';


export interface LanzamientoState {
  total: number;
  _id?: string;
  message?: string;
}

export const lanzamientoInitialState: LanzamientoState = {
  total: 0,
  _id: '',
  message: ''
};

export function reducer(state = lanzamientoInitialState, action: LanzamientoActions): LanzamientoState {
  switch (action.type) {

    default:
      return state;
  }
}
