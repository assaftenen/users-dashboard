import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, selectUsers } from '../reducers';
import { distinctUntilChanged } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUser } from '../Interfaces/dahsboard.interfaces';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {
  error$: Observable<string>;
  usersList$: Observable<IUser[]>;

  constructor(private store: Store<AppState>) { }
  ngOnInit(): void {
    this.usersList$ = this.store.pipe(select(selectUsers), distinctUntilChanged());
  }
  ngOnDestroy() {
    !environment.production ? console.log('dashbordIsDead') : null;

  }

}
