import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { EstadosService } from '../estados.service';
import { EstadoActionTypes, EstadosLoaded, LoadEstados } from './estado.actions';

@Injectable()
export class EstadoEffects {
  @Effect()
/*
  public load$ = this.actions$.ofType(EstadoActionTypes.LoadEstados).pipe(mergeMap(() =>
  this.estados.getEstados$().pipe(map(estados => new EstadosLoaded(estados)))));
*/
  public load$ = this.actions$.pipe(ofType(
    EstadoActionTypes.LoadEstados), mergeMap((action: LoadEstados) =>
  this.estados.getEstados$().pipe(map(types => new EstadosLoaded(types)))));

  constructor(private actions$: Actions, private estados: EstadosService) {}

}
