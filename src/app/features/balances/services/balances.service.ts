import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Balance } from '../../../core/interfaces/balances';


@Injectable()
export class BalancesService {
  constructor(private http: HttpClient) {}

  getBalances(): Observable<Balance[]> {
    return this.http.get<Balance[]>(`${environment.baseUrl}/balances/all`);
  }

  getBalance(idUser: number): Observable<Balance[]> {
    return this.http.get<Balance[]>(`${environment.baseUrl}/balances/${idUser}`);
  }
}
