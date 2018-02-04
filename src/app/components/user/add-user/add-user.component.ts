import { Component, OnInit,Output,EventEmitter } from '@angular/core';

//import UserDataservice
import { UserDataService} from '../../../services/user/user.data.service';
//router
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '../../../models/User';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  
})
export class AddUserComponent implements OnInit {

  @Output() userAdded=new EventEmitter<User>();

  name:string;
  username:string;
  email:string;


  user:User={};

 

  constructor(
    public userDataService:UserDataService,
    public router:Router,
    public route:ActivatedRoute
  ) { }

  ngOnInit() {
  }


  /*addUser(){
    console.log('add user');

    this.userAdded.emit(
      {
        name:this.name,
        username:this.username,
        email:this.email        
      }
    );
  }*/


  addNewUser(){

    console.log("adding user...");

    //only wrote this way to keep emmiter output example
    this.user.name=this.name;
    this.user.username=this.username;
    this.user.email=this.email;     

    this.userDataService.addUser(this.user).subscribe(user=>{
      this.router.navigate(['/userlist']);
    })


  }





}
