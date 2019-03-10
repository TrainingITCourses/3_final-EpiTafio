import { Action } from '@ngrx/store';

export enum LanzamientoActionTypes {
  LoadLanzamiento = '[Lanzamiento] Load Lanzamiento',
  LoadedLanzamiento = '[Lanzamiento] Loaded Lanzamiento',
  NotLoadedLanzamiento = '[Lanzamiento] Not Loaded Lanzamiento'

}

export class LoadLanzamiento implements Action {
  readonly type = LanzamientoActionTypes.LoadLanzamiento;
  constructor(readonly payload: any) {}
}
export class LoadedLanzamiento implements Action {
  readonly type = LanzamientoActionTypes.LoadedLanzamiento;
  constructor(readonly payload: any) {}
}
export class NotLoadedLanzamiento implements Action {
  readonly type = LanzamientoActionTypes.NotLoadedLanzamiento;
  constructor(readonly payload: any) {}
}

export type LanzamientoActions = LoadLanzamiento | LoadedLanzamiento | NotLoadedLanzamiento;
