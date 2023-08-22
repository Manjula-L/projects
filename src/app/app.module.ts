import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { UsdinrPipe } from './custompipe/usdinr.pipe';
import { AppNotfoundComponent } from './app-notfound/app-notfound.component';
import{HttpClientModule}from '@angular/common/http';
import { ExampleService } from './service/example.service';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginModule } from './auth/login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    UsdinrPipe,
    AppNotfoundComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule,
    LoginModule,
  ],
  providers: [ExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
