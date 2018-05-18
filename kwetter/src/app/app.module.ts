import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './api/user.service'; 
import { AuthenticationService } from './api/authentication.service';
import { RegisterComponent } from './register/register.component';
import { KweetService } from './api/kweet.service';
import { OtheruserprofileComponent } from './otheruserprofile/otheruserprofile.component';
import { SearchKweetPipe } from './pipe/search-kweet.pipe';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    RegisterComponent,
    OtheruserprofileComponent,
    SearchKweetPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, AuthenticationService, KweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
