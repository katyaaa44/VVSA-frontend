import { Component, inject, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import {TransactionsService, ITransactionDetailResponse } from '../../api/transactions.service';
import { TransactionTypePipe } from '../../utils/pipes/transaction-type.pipe';

@Component({
  selector: 'app-transaction-details',
  standalone: true,
  imports: [CommonModule, TransactionTypePipe],
  templateUrl: './transaction-details.component.html',
  styleUrl: './transaction-details.component.css'
})

export class TransactionDetailsComponent implements OnChanges {
  @Input({ required: true }) transactionId!: number;

  private transactionsService = inject(TransactionsService);

  transaction$?: Observable<ITransactionDetailResponse>;

  ngOnChanges(): void {
    if (this.transactionId != null) {
      this.transaction$ = this.transactionsService.getTransactionById$(this.transactionId);
    }
  }
}
