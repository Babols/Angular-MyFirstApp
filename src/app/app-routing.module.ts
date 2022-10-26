import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperComponent } from './developer/developer.component';
import { OnomatopoeiaComponent } from './onomatopoeia/onomatopoeia.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user', component: UserProfileComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'developer', component: DeveloperComponent },
  { path: 'onomatopoeia', component: OnomatopoeiaComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
