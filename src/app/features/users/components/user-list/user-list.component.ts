import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { User } from '../../../../core/interfaces/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, MatCard, MatIcon],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  @Input() users!: User[];
  @Output() userSelected: EventEmitter<User> = new EventEmitter();

  onSelectedUser(user: User) {
    this.userSelected.emit(user);
  }
}
