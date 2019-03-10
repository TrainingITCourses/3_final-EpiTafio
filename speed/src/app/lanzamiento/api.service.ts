import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {
  private url = environment.apiUrl + 'pub/items';
  constructor(private http: HttpClient) { }

  getLanzamiento$ = lanzamientoId => this.http.get(this.url + '/' + lanzamientoId);
  postLanzamiento$ = lanzamiento => this.http.post(this.url, lanzamiento);
  putLanzamiento$ = lanzamiento => this.http.put(this.url + '/' + lanzamiento._id, lanzamiento);
}
