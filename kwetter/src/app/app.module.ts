import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule, MatDialogModule} from '@angular/material';


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
import { SearchuserComponent } from './searchuser/searchuser.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    RegisterComponent,
    OtheruserprofileComponent,
    SearchKweetPipe,
    SearchuserComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [SearchuserComponent, HeaderComponent],
  providers: [UserService, AuthenticationService, KweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
