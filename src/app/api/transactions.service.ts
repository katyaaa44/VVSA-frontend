import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction.model';

export interface ITransactionsResponse {
  data: Transaction[];
}

export interface ITransactionDetailResponse {
  data: Transaction;
}

@Injectable({
  providedIn: 'root'
})

export class TransactionsService {

  constructor() { }

  private http = inject(HttpClient);

  getTransactions$() : Observable<ITransactionsResponse>{
    return this.http.get<ITransactionsResponse>(`/api/transactions`);
  }

  getTransactionById$(id: number): Observable<ITransactionDetailResponse> {
    return this.http.get<ITransactionDetailResponse>(
      `/api/transactions/${id}`
    );
  }
}
