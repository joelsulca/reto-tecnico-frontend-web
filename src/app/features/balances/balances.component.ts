import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceListComponent } from './components/balance-list/balance-list.component';
import { BalancesService } from './services/balances.service';
import { HttpClientModule } from '@angular/common/http';
import { AccountStateService } from '../../core/services/account-state.service';
import { Router } from '@angular/router';
import { User } from '../../core/interfaces/user';
import { UserStateService } from '../../core/services/user-state.service';
import { Balance } from '../../core/interfaces/balances';

@Component({
  selector: 'app-balances',
  standalone: true,
  imports: [CommonModule, HttpClientModule, BalanceListComponent],
  templateUrl: './balances.component.html',
  styleUrl: './balances.component.scss',
  providers: [BalancesService]
})
export class BalancesComponent implements OnInit {
  balanceService = inject(BalancesService);
  accountState = inject(AccountStateService);
  userState = inject(UserStateService);
  router = inject(Router);
  balances: Balance[] = [];

  user!: User;

  constructor() {
    this.user = this.userState.selectedUser() as User;
  }

  ngOnInit() {
    this.getBalances();
  }

  getBalances() {
    this.balanceService.getBalance(this.user.idUser).subscribe({
      next: (balances: Balance[]) => {
        this.balances = balances;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onBalanceSelected(accountBalance: Balance) {
    this.accountState.selectedAccount.set(accountBalance);
    this.router.navigate(['dashboard', 'transactions']);
  }
}
