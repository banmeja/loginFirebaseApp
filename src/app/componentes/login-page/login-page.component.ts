import { Component, OnInit } from '@angular/core';
import { OuthService } from '../../servicios/outh.service';
import { Router } from '@angular/router';

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
    public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.loginUser(this.email,this.pass)
    .then((res) =>{
      this.router.navigate(['private']);
    }).catch((err)=>{
      console.log(err.message);
      this.router.navigate(['login']);
    })
  }
}
