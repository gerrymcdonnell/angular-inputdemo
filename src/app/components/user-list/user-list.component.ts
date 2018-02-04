import { Component, OnInit } from '@angular/core';

//import Dataservice
import { UserDataService } from '../../services/user/user.data.service';
import {User} from '../../models/user';

//included with flash mesages component
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  //users array
  users:any[];

  //user obj
  user={
    id:'',
    name:'',
    username:'',
    email:''
  }


  isEdit:boolean=false;
  saveStatus:string="Add User";

  constructor(
      public userDataService:UserDataService,      
        public fMS:FlashMessagesService
    ) {

    //use data service its a n obseravble so we must subscribe to it
    this.userDataService.getUsers().subscribe(users=>{
        //NOTE: this may cuases problem check cakephp output
        this.users=users;
    })  
    //this.fMS.show('Showing All Users', {cssClass:'alert-success', timeout: 2000});   

   }

   
  ngOnInit() {
    //flash message doenst work
    //this.fMS.show('Sandbox', {cssClass:'alert-danger', timeout: 4000});
  }


//for output emmiter
/*addUser(user:User){
    console.log(user);

    this.userDataService.addUser(user).subscribe(user=>{
        
        this.users.unshift(user);
        console.log(user);

        this.fMS.show('Added user', {cssClass:'alert-success', timeout: 4000});
    })
}*/




}


