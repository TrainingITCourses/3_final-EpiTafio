import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { environment } from '../../../environments/environment.prod';
import { LoadLanzamiento } from '../reducers/lanzamiento.actions';
import { lanzamientoInitialState, LanzamientoState } from '../reducers/lanzamiento.reducer';
@Component({
  selector: 'app-lanzamiento-container',
  templateUrl: './lanzamiento-container.component.html',
  styleUrls: ['./lanzamiento-container.component.css']
})
export class LanzamientoContainerComponent implements OnInit {
  public cohete: LanzamientoState = lanzamientoInitialState;
  constructor(private route: ActivatedRoute,
    private store: Store<LanzamientoState>) { }

  ngOnInit() {
    this.store.select<LanzamientoState>('lanzamientoFeature').subscribe((value: any) => {
      this.cohete = value.lanzamiento;
    })
  }

}
