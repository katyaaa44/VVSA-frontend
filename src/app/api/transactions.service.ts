import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor() { }

  private http = inject(HttpClient);
  getTransactions$() {
  return this.http.get<{ 
  data: Transaction[]}>(`/api/transactions`);
  
}
}
