import { Action } from '@ngrx/store';

export enum LanzamientoActionTypes {
  LoadLanzamientos = '[Lanzamiento] Load Lanzamientos',
  
  
}

export class LoadLanzamientos implements Action {
  readonly type = LanzamientoActionTypes.LoadLanzamientos;
}


export type LanzamientoActions = LoadLanzamientos;
