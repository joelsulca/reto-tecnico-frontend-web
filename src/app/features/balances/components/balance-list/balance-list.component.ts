import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Balance } from '../../../../core/interfaces/balances';

@Component({
  selector: 'app-balance-list',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule],
  templateUrl: './balance-list.component.html',
  styleUrl: './balance-list.component.scss'
})
export class BalanceListComponent {
  @Input() balances!: Balance[];
  @Output() balanceSelected: EventEmitter<Balance> = new EventEmitter();

  onClickBalance(accountBalance: Balance) {
    this.balanceSelected.emit(accountBalance);
  }
}
