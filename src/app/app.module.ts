import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';

//for forms in the app
import {FormsModule} from '@angular/forms';

//navbar
import{NavbarComponent} from './components/navbar/navbar.component';

//routing
import {RouterModule,Routes} from '@angular/router';

//flash messages module
import {FlashMessagesModule } from 'angular2-flash-messages';

//user detail and master
import{UserDataService} from './services/user/user.data.service'
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './components/user/user.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';


//create routes for app
const appRoutes:Routes=[
  {path:'',component:UserListComponent}, 
  {path:'user/:id',component:UserDetailComponent},
  {path:'userlist',component:UserListComponent},

  {path:'adduser',component:AddUserComponent},

  {path:'edituser/:id',component:EditUserComponent},

  {path:'**',component:PagenotfoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserDetailComponent,
    UserListComponent,
    UserComponent,
    AddUserComponent,
    PagenotfoundComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [
    UserDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

