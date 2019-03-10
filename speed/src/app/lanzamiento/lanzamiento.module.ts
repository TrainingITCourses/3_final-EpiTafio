import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LanzamientoRoutingModule } from './lanzamiento-routing.module';
import { ApiService } from './api.service';
import { LanzamientoEffects } from './reducers/lanzamiento.effects';
import { reducer } from './reducers/lanzamiento.reducer';
import { LanzamientoContainerComponent } from 'src/app/lanzamiento/lanzamiento-container/lanzamiento-container.component';

@NgModule({
  declarations: [LanzamientoContainerComponent],
  imports: [
    CommonModule,
    LanzamientoRoutingModule,
    StoreModule.forFeature('lanzamientoFeature', { lanzamiento: reducer }),
    EffectsModule.forFeature([LanzamientoEffects])
  ],
  providers: [ApiService]
})
export class LanzamientoModule { }
