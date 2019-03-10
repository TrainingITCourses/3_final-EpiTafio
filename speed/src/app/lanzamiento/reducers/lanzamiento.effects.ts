import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { LanzamientoActionTypes, LoadLanzamiento, LoadedLanzamiento, NotLoadedLanzamiento } from './lanzamiento.actions';


@Injectable()
export class LanzamientoEffects {



  constructor(private actions$: Actions) {}

}
