import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountStateService } from '../../core/services/account-state.service';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { TransactionsService } from './services/transactions.service';
import { Transaction } from './interfaces/transactions';
import { HttpClientModule } from '@angular/common/http';
import { MatCard } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { Balance } from '../../core/interfaces/balances';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, TransactionsListComponent, HttpClientModule, MatCard, MatFormField, MatIcon, MatLabel],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
  providers: [TransactionsService],
})
export class TransactionsComponent implements OnInit {
  transactionService = inject(TransactionsService);
  accountState = inject(AccountStateService);

  transactions: Transaction[] = [];
  account!: Balance;

  constructor() {
    this.account = this.accountState.selectedAccount() as Balance;
  }

  ngOnInit() {
    this.getBalanceService();
  }

  getBalanceService() {
    this.transactionService.getTransaction(this.account.idAccount).subscribe({
      next: (transactions: Transaction[]) => {
        this.transactions = transactions;
      },
    })
  }
}
