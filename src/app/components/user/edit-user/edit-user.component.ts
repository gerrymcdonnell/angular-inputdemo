import { Component, OnInit } from '@angular/core';

//import UserDataservice
import { UserDataService} from '../../../services/user/user.data.service';

//included with flash mesages component
import { FlashMessagesService } from 'angular2-flash-messages';

//router
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '../../../models/User';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  
})
export class EditUserComponent implements OnInit {

  id:string;
  user:User={};

  constructor(
    public userDataService:UserDataService,
    public router:Router,
    public route:ActivatedRoute,
    public flashMessagesService:FlashMessagesService
  ) { }


  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];
    // Get Client
    this.userDataService.getUser(this.id).subscribe(user=> {
      this.user= user;
      console.log(this.user);
    });
  }


  editUser(){
    console.log('edit user');

    this.userDataService.updateUser(this.user).subscribe(user=>{            
      console.log("calling updateUser()");     
    })
  }

}
