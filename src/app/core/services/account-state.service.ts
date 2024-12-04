import { Injectable, signal } from '@angular/core';
import { Balance } from '../interfaces/balances';

@Injectable({ providedIn: 'root' })
export class AccountStateService {
  selectedAccount = signal<Balance | null>(null);
}
