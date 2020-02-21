import { AddUser } from './../../actions/users.actions';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { take } from 'rxjs/operators';
import { IUser } from 'src/app/Interfaces/dahsboard.interfaces';








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
    this.userIdByUrl = this.activeRoute.snapshot.paramMap.get("id")
    if (this.userIdByUrl) {
      this.store.select("users").pipe(take(1)).subscribe(result => {
        debugger
        this.user = result.usersList.find(user => user.phone === this.userIdByUrl)
        if (this.user) {
          this.updateFormFilds()
        }

      })
    }
  }
  updateFormFilds() {
    if (this.user) {
      let { firstName, lastName, phone, age, address } = this.user
      this.formGroup.patchValue({ firstName, lastName, phone, age, address })
      debugger
    }
  }
  createForm() {
    this.formGroup = this.fb.group({
      'firstName': ['', [Validators.required]],
      'lastName': ['', [Validators.required]],
      'phone': ['', [Validators.required]],
      'age': ['', [Validators.required]],
      'address': ['', Validators.required]
    });
  }
  onSubmit(formInputs) {
    this.store.dispatch(new AddUser({ user: formInputs }))
    this.formGroup.reset();
    this.router.navigateByUrl('/users-list')
  }


}
