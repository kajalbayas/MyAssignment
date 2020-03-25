import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  {
      path: '', component:LandingComponent
  },
  {
    path: 'register', component:LandingComponent
},
{
    path: 'user-list', component:UserListComponent
},
{
    path: '', redirectTo: 'register', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'user-list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }