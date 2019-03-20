import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authState: AngularFireAuth = null;

  constructor(private af: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router) {
      // af.auth..subscribe((auth) => {
      //   this.authState = auth;
      // });
    }

    emailSignUp(credentials: EmailPasswordCredentials) {
      return this.af.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then(() => {})
        .catch(error => {});
    }

    emailLogin(credentials: EmailPasswordCredentials) {
       return this.af.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
         .then(() => {
           return 'success';
         }).catch(error => {});
    }
}


export class EmailPasswordCredentials {
  email: string;
  password: string;
}
