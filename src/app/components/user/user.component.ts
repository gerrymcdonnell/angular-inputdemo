import { Component, OnInit,Input } from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',

})
export class UserComponent implements OnInit {

  //takes input from the user-list component and passes it here
  //see user-list-component for details
  @Input('user') user:User;
  constructor() { }

  ngOnInit() {
  }

}
