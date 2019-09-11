import { Component, OnInit } from '@angular/core';
import { OuthService } from '../../servicios/outh.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isLogin: boolean;
  public nombreUser: string;
  public emailUser: string;
  public fotoUsuario: string;

  constructor(
    public authService: OuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth =>{
      if (auth) {
        this.isLogin = true;
        this.nombreUser = auth.displayName;
        this.emailUser = auth.email;
        this.fotoUsuario = auth.photoURL;
      } else {
        this.isLogin = false;
      }
    })
  }

  onClickLogout(){
    this.authService.logout();
  }
}
