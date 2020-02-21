import { Router } from '@angular/router';
import { DeleteUser } from './../../../actions/users.actions';
import { Store } from '@ngrx/store';
import { IUser } from './../../../Interfaces/dahsboard.interfaces';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { AppState } from 'src/app/reducers';




@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: IUser
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.user?.currentValue) {
      this.user = { ...changes?.user?.currentValue }
    }
  }

  onDeleteClicked() {
    this.store.dispatch(new DeleteUser({ user: this.user }));
  }
  onEditClicked() {
    this.router.navigateByUrl(`/user/${this.user?.phone}`);

  }

}
