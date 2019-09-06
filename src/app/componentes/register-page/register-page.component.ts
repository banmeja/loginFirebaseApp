import { Component, OnInit } from '@angular/core';
import { OuthService } from '../../servicios/outh.service'

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public email : string;
  public pass : string;
  constructor(
    public authService: OuthService
  ) { }

  ngOnInit() {
  }
  onSubmitAddUser(){
    this.authService.registerUser(this.email, this.pass)
    .then( (res) =>{
      console.log('Registro correcto!');
      console.log(res);
    }).catch((err => {
      console.log(err)
    }));
  }
}
