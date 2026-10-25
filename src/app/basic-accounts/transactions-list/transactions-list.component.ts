import { Component, inject} from '@angular/core';
import { ITransactionsResponse, TransactionsService } from '../../api/transactions.service';
import { Transaction } from '../../models/transaction.model';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transactions-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './transactions-list.component.html',
  styleUrl: './transactions-list.component.css'
})
export class TransactionsListComponent {
  private transactionsService = inject(TransactionsService);
  transactions$: Observable<ITransactionsResponse> = this.transactionsService.getTransactions$();

  }


