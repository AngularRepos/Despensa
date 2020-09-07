import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';
import { HomeComponent } from './generic/home/home.component';
import { NavbarComponent } from './generic/navbar/navbar.component';
import { Page404Component } from './generic/page404/page404.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserLoginComponent,
    UserRegisterComponent,
    HomeComponent,
    NavbarComponent,
    Page404Component,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
