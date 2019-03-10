import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-resultado-presenter',
  templateUrl: './resultado-presenter.component.html',
  styleUrls: ['./resultado-presenter.component.css']
})
export class ResultadoPresenterComponent implements OnInit {
  @Input() cohete = { cantidad: 0 };
  @Input() lanzamientos: any[];
  constructor() { }

  ngOnInit() {
  }

}
