import { Action } from '@ngrx/store';

export enum EstadoActionTypes {
  LoadEstados = '[Estado] Load Estados',
  EstadosLoaded = '[Estado] Estados Loaded'
}

export class LoadEstados implements Action {
  readonly type = EstadoActionTypes.LoadEstados;
}
export class EstadosLoaded implements Action {
  readonly type = EstadoActionTypes.EstadosLoaded;
  constructor(readonly payload: any[]) {}
}

export type EstadoActions = LoadEstados | EstadosLoaded;
