import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppState, selectUsers, selectUsersCount } from './../../reducers/index'
import { distinctUntilChanged } from 'rxjs/operators';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name = 'Reali Applications';
  page = 'Create User';
  usersCount$: any;
  count: number = 0

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.usersCount$ = this.store.pipe(select(selectUsersCount), distinctUntilChanged()).subscribe(userCount => {
      this.count = userCount;
    });

  }


}
