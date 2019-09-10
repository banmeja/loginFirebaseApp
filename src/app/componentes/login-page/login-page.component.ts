import { Component, OnInit } from '@angular/core';
import { OuthService } from '../../servicios/outh.service';
import { Router } from '@angular/router';

import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public email: string;
  public pass : string;
  constructor(
    public authService: OuthService,
    public router: Router,
    public flashMensaje : FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.loginUser(this.email,this.pass)
    .then((res) =>{
      this.flashMensaje.show('Usuario logueado correctamente',{cssClass: 'alert-success', timeout:1500});
      this.router.navigate(['private']);
    }).catch((err)=>{
      this.flashMensaje.show(err.message,{cssClass: 'alert-danger', timeout:2500});
      this.router.navigate(['login']);
    })
  }
}
