import { Component } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { UpdateAvailableEvent } from '@angular/service-worker/src/low_level';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { GlobalState } from 'src/app/reducers';
import { LoadEstados } from './reducers/estado.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FINAL';
  public estados$;
  public developerVersion = '1';
  constructor(
    private store: Store<GlobalState>,
    swUpdate: SwUpdate,
    swPush: SwPush
  ) {
    this.store.dispatch(new LoadEstados());
    this.estados$ = this.store.select('estado').pipe(map(res => res.types));
    if (swUpdate.isEnabled) {
      swUpdate.available.subscribe(
        (event: UpdateAvailableEvent) => {
          const msg =
            'current: ' +
            event.current.hash +
            '. Load new: ' +
            event.available.hash +
            ' ?';
          if (confirm(msg)) window.location.reload();
        }
      );
    }
    swPush
      .requestSubscription({
        serverPublicKey: 'VAPID_PUBLIC_KEY'
      })
      .then(sub =>
        swPush.messages.subscribe(m => console.log(m))
      )
      .catch(err => console.error('Imposible subscribirse'));

  }
}
