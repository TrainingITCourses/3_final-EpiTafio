import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { environment } from '../../../environments/environment.prod';
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
  }

}
