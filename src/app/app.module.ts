import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignupComponent } from './signup/signup.component';
import { MenuComponent } from './menu/menu.component';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';
import { OnomatopoeiaComponent } from './onomatopoeia/onomatopoeia.component';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    SignupComponent,
    MenuComponent,
    DeveloperComponent,
    SkillComponent,
    OnomatopoeiaComponent,
    CreateOnomatopiaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
