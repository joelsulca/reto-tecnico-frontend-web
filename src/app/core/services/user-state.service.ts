import { Injectable, signal } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({ providedIn: 'root' })
export class UserStateService {
  selectedUser = signal<User | null>(null);
}
