import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor() { }

  private http = inject(HttpClient);
  getTransactions$() {
  return this.http.get<{ 
  data: ITransaction[]}>(`/api/transactions`);
  
}
}

export interface ITransaction {
  transactionId: number;
  fullName: string;
  transactionType: number;
  accountNumber: string;
  bankCode: string;
  issueDate: Date;
  amount: number;

}