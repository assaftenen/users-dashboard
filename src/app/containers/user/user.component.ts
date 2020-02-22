import { IUser } from 'src/app/Interfaces/dahsboard.interfaces';
// store
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { AddUser, UpdateUser } from './../../actions/users.actions';
// core
import { Component, OnInit } from '@angular/core';
// router and co
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
//forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//rx
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  formGroup: FormGroup;
  userIdByUrl: string;
  user: IUser

  constructor(private fb: FormBuilder, private store: Store<AppState>, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm();
    this.userIdByUrl = this.activeRoute.snapshot.paramMap.get("id");
    if (this.userIdByUrl) {
      this.store.select("users").pipe(take(1)).subscribe(usersState => {
        const suspectedUser = usersState.usersList.find(user => {
          if (Number(user.userId) == Number(this.userIdByUrl)) {
            return user;
          }
        })
        if (suspectedUser) {
          this.user = suspectedUser
          this.updateFormFilds(suspectedUser);
        }
      })
    }
  }

  updateFormFilds(suspectedUser) {
    if (suspectedUser) {
      let { firstName, lastName, phone, age, address } = suspectedUser;
      this.formGroup.patchValue({ firstName, lastName, phone, age, address });
    }
  }

  createForm() {
    this.formGroup = this.fb.group({
      'firstName': ['', [Validators.required]],
      'lastName': ['', [Validators.required]],
      'phone': ['', [Validators.required, Validators.pattern("^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$")]],
      'age': ['', [Validators.required, Validators.max(75), Validators.min(18)]],
      'address': ['', Validators.required]
    });
  }
  onSubmit(formInputs) {
    if (this.user?.userId) {
      this.store.dispatch(new UpdateUser(({ user: { ...formInputs, userId: this.user.userId } })));
    } else {
      this.store.dispatch(new AddUser({ user: formInputs }));
    }
    this.router.navigateByUrl('/users-list')
  }
  resetForm(event) {
    event.preventDefault();
    this.formGroup.reset();
    this.user = null;
  }


}
