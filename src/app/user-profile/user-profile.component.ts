import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    name: string = 'Doe';
    firstName: string = 'John';
    age: number = 25;
    quote: string = '';
    photo: string = 'https://randomuser.me/api/portraits/lego/2.jpg'
  
  showAge = false;
  hidden() {
    return this.showAge = !this.showAge;
  }

  ngOnInit(): void {
  }

}
