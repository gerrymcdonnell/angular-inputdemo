import { Component, OnInit,Input } from '@angular/core';

//import Dataservice
import { UserDataService } from '../../services/user/user.data.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',

})
export class UserComponent implements OnInit {

  //users array
  users:User[];
  
  
  //takes input from the user-list component and passes it here
  //see user-list-component for details
  @Input('user') user:User;


  constructor(public userDataService:UserDataService) 
  {


  }

  ngOnInit() {
  }

}
