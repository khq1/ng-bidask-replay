import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Bidask } from './model/bidask';

@Injectable({
  providedIn: 'root',
})
export class GetService {
 
  private _Url:string = './assets/bid-ask.json';

  constructor(private http: HttpClient) {}

  getBidasks(): Observable<Bidask[]> {
    return this.http.get<Bidask[]>(this._Url)
  }
}
