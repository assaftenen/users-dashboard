import { NgModule } from '@angular/core';
//@ToDo-Assaf : should we use ChommonModule on v9?
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { RouterModule } from '@angular/router';
import { UserListRoutes } from './user-list.routes'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [UsersListComponent],
  imports: [
    RouterModule.forChild(UserListRoutes),
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class UsersListModule { }
