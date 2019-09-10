import { Component, OnInit } from '@angular/core';
import { OuthService } from '../../servicios/outh.service'
import { Router } from '@angular/router';

import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public email : string;
  public pass : string;
  constructor(
    public authService: OuthService,
    public router: Router,
    public flashMensaje : FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onSubmitAddUser(){
    this.authService.registerUser(this.email, this.pass)
    .then( (res) =>{
      this.flashMensaje.show('Usuario creado correctamente',{cssClass: 'alert-success', timeout:1500});
      this.router.navigate(['/private']);
    }).catch((err => {
      this.flashMensaje.show(err.message,{cssClass: 'alert-danger', timeout:2500});
      console.log(err)      
    }));
  }
}
