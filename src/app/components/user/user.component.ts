import { Component, OnInit,Input } from '@angular/core';

//import Dataservice
import { UserDataService } from '../../services/user/user.data.service';
import {User} from '../../models/user';

//included with flash mesages component
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',

})
export class UserComponent implements OnInit {

  //users array
  users:User[];

  isEdit:boolean=false;
  saveStatus:string="Add User";
  
  
  //takes input from the user-list component and passes it here
  //see user-list-component for details
  @Input('user') user:User;


  constructor(
    public userDataService:UserDataService,
    public fMS:FlashMessagesService
  ) 
  {


  }

  ngOnInit() {
  }

  onDeleteClick(id){
    this.userDataService.deleteUser(id).subscribe(res=>{
      
      /*console.log(res.message);     
      console.log('deleted user' + res); */

      this.fMS.show(res.message, {cssClass:'alert-success', timeout: 4000});

    })
  }// end delete

/*
  onSubmit(isEdit){
        
    if(isEdit==true){
        //edit user
        this.userDataService.updateUser(this.user).subscribe(user=>{
            
            console.log("calling updateUser()");

            //look for the one we edited and add new one back
            for(let i=0;i<this.users.length;i++){
                if(this.users[i].id==this.user.id){
                    //splice removes elements from an array
                    this.users.splice(i,1);
                    console.log("doing splice");
                }
            }
            //add it back to the top
            this.users.unshift(this.user);
            
            //change text of save/add button to edit
            this.saveStatus="Add user";
            //clear text boxes

            //donest work
            this.fMS.show('Updated user', {cssClass:'alert-success', timeout: 4000});
        })
    }
    else{
        //its an add
        console.log("adding user...");
        this.userDataService.addUser(this.user).subscribe(user=>{
            this.users.unshift(user);
            console.log(user);

            this.fMS.show('Added user', {cssClass:'alert-success', timeout: 4000});
        })
    }  
  }
*/











onEditClick($e,user){
  /*this.isEdit=true;
  this.user=user;

  console.log("edit button clicked - onEditClick()");
  //change text of save/add button to edit
  this.saveStatus="Save Edit";
  console.log($e);*/

  
}


}
