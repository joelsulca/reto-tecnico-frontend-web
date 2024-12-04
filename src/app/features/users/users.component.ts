import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/user-list/user-list.component';
import { User } from '../../core/interfaces/user';
import { UserStateService } from '../../core/services/user-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, HttpClientModule, UserListComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  providers: [UsersService],
})
export class UsersComponent implements OnInit {
  userService = inject(UsersService);
  userState = inject(UserStateService);
  router = inject(Router);
  users: User[] = [];

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (transactions: User[]) => {
        this.users = transactions;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onUserSelected(user: User) {
    this.userState.selectedUser.set(user);
    this.router.navigate(['dashboard', 'balances']);
  }
}
