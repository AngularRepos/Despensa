import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';
import { HomeComponent } from './generic/home/home.component';
import { Page404Component } from './generic/page404/page404.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { PantryComponent } from './pantry/pantry.component';
import { NewPantryComponent } from './pantry/new-pantry/new-pantry.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: UserLoginComponent },
  {path: 'register', component: UserRegisterComponent },
  {path: 'profile', component: UserProfileComponent},
  {path: "home", component: HomeComponent },
  {path: "despensa", component: PantryComponent },
  {path: "new-despensa", component: NewPantryComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
