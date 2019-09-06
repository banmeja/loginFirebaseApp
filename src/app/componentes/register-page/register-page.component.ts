import { Component, OnInit } from '@angular/core';
import { OuthService } from '../../servicios/outh.service'
import { Router } from '@angular/router';

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
    public router: Router
  ) { }

  ngOnInit() {
  }
  onSubmitAddUser(){
    this.authService.registerUser(this.email, this.pass)
    .then( (res) =>{
      this.router.navigate(['/private']);
    }).catch((err => {
      console.log(err)      
    }));
  }
}
