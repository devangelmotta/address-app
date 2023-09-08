import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './addresses/home/home.component';
import { SignupComponent } from './user/signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '',  pathMatch: 'full' ,component: HomepageComponent},
  { path: 'users', component: HomeComponent},
  { path: 'signup',  pathMatch: 'full' ,component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
