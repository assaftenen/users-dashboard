import { AddUser } from './../../actions/users.actions';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.formGroup = this.fb.group({
      'name': ['', [Validators.required]],
      'lastName': ['', [Validators.required]],
      'phone': ['', [Validators.required]],
      'age': ['', [Validators.required]],
      'address': ['', Validators.required]
    });
  }
  onSubmit(formInputs) {
    this.store.dispatch(new AddUser({ user: formInputs }))
    debugger
  }


}
