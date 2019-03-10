import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LanzamientoRoutingModule } from './lanzamiento-routing.module';
import { ApiService } from './api.service';
import { LanzamientoEffects } from './reducers/lanzamiento.effects';
import { reducer } from './reducers/lanzamiento.reducer';
import { LanzamientoContainerComponent } from 'src/app/lanzamiento/lanzamiento-container/lanzamiento-container.component';
import { ResultadoPresenterComponent } from './resultado-presenter/resultado-presenter.component';
import { ControlPresenterComponent } from './control-presenter/control-presenter.component';

@NgModule({
  declarations: [LanzamientoContainerComponent, ResultadoPresenterComponent, ControlPresenterComponent],
  imports: [
    CommonModule,
    LanzamientoRoutingModule,
    StoreModule.forFeature('lanzamientoFeature', { lanzamiento: reducer }),
    EffectsModule.forFeature([LanzamientoEffects])
  ],
  providers: [ApiService]
})
export class LanzamientoModule { }
