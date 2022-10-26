import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
title = 'You Signed'

model: User = new User("", "", "", "");

onSubmit(): void {
  // form submitted
  console.log(this.model);
}
  constructor() { }

  ngOnInit(): void {
  }

}
