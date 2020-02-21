import { Route } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name = 'Reali Applications';
  page = 'Create User';
  constructor() { }

  ngOnInit(): void {
  }
  onUserNavigate(userRoute?: string) {
    // userRoute ? 

  }

}
