import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OuthService {
  //normalmente para get api y compartir el result en los componentes
  constructor(
    public afAuth: AngularFireAuth
  ) { }
  
  //el modo viene de la documentacoin de fireBase
  registerUser(email: string, pass: string){
    return new Promise((resolve,reject)=>{
      this.afAuth.auth.createUserWithEmailAndPassword(email,pass)
      .then(userData=> resolve(userData),
      err => reject (err));
    })
  }

  loginUser(email: string, pass: string){
    return new Promise((resolve,reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email,pass)
      .then(userData => resolve( userData),
      err => reject(err));
    })
  }

  loginGoogle(){
    return this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
  }

  //app load, si el usurio esta log devolver data
  getAuth(){
    return this.afAuth.authState.pipe(map( auth => auth));
  }

  logout(){
    return this.afAuth.auth.signOut();
  }

}
