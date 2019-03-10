import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { environment } from '../../environments/environment';
import * as fromEstado from './estado.reducer';

export interface GlobalState {
  router: any;
  estado: fromEstado.EstadoState;
}

export const reducers: ActionReducerMap<GlobalState>  = {
  router: routerReducer,
  estado: fromEstado.reducer
};


export const metaReducers: MetaReducer<GlobalState>[] = !environment.production ? [] : [];
