import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, selectUsers } from '../reducers';
import { distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  error$: any;
  usersList$

  constructor(private store: Store<AppState>) { }
  ngOnInit(): void {
    this.usersList$ = this.store.pipe(select(selectUsers), distinctUntilChanged())
  }

}
