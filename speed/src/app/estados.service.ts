import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {
  constructor(private http: HttpClient) {}
  public getEstados$ = (): Observable<any[]> =>
    this.http
      .get('./assets//data/launchstatus.json')
      .pipe(map((res: any) => res.types));
}
