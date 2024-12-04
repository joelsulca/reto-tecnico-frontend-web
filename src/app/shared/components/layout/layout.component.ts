import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatIconButton } from '@angular/material/button';
import { UserStateService } from '../../../core/services/user-state.service';
import { User } from '../../../core/interfaces/user';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    MatNavList,
    MatToolbar,
    MatIconModule,
    MatIconButton,
    MatListItem,
    MatSidenavModule,
    RouterModule,
    MatDivider,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  userState = inject(UserStateService);
  user!: User;

  constructor() {
    this.user = this.userState.selectedUser() as User;
  }
}
