import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './containers/user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'users-list', loadChildren: () => import('./users-list/users-list.module').then(m => m.UsersListModule) },
  { path: '', redirectTo: '/user', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
