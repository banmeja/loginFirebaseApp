import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { PrivatePageComponent } from './componentes/private-page/private-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
//*
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';

import { environment } from '../environments/environment';
//*
import { OuthService } from './servicios/outh.service';

import { AuthGuard } from './guards/auth.guard'

import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,    
    LoginPageComponent,
    PrivatePageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.fireBaseConfig),
    FlashMessagesModule
  ],
  providers: [OuthService,AuthGuard,FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
