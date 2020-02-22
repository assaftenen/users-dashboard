import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared/shared.module';
import { NgModule } from '@angular/core';
//@ToDo-Assaf : should we use ChommonModule on v9?
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
// Router and co.
import { RouterModule } from '@angular/router';
import { UserListRoutes } from './user-list.routes'
// components
import { UserCardComponent } from './components/user-card/user-card.component';

// materials  modules


@NgModule({
  declarations: [UsersListComponent, UserCardComponent],
  imports: [
    RouterModule.forChild(UserListRoutes),
    CommonModule,
    MaterialModule,
    SharedModule.forRoot()

  ]
})
export class UsersListModule { }
