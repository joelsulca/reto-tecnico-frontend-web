import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../interfaces/transactions';
import { environment } from '../../../environments/environment';


@Injectable()
export class TransactionsService {
  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${environment.baseUrl}/transactions/all`);
  }

  getTransaction(idAccount: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${environment.baseUrl}/transactions/${idAccount}`);
  }
}
