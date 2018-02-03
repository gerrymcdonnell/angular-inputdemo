import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import {User} from '../../../models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  
})
export class AddUserComponent implements OnInit {

  @Output() userAdded=new EventEmitter<User>();
  
  name:string;
  username:string;
  email:string;

  constructor() { }

  ngOnInit() {
  }


  addUser(){
    this.userAdded.emit(
      {
        name:this.name,
        username:this.username,
        email:this.email        
      }
    );
  }

}
