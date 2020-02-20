import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

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
    debugger
  }


}
