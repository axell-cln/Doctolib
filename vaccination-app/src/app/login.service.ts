import { Injectable } from '@angular/core';
import { map, Observable, ReplaySubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { Doctor } from '../utilisateur';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoggedSubject: Subject<boolean> = new ReplaySubject();


  private password?: string;
  private username?: string;

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  connect(username: string, password: string): Observable<any> {
    // console.log(username, password )
    let token = this.createToken(username, password);
    let options = {
      headers: {
        'Authorization': token
      }
    };
    return this.httpClient.get('/api/login', options).pipe(map(value => {
      this.password = password;
      this.username = username;
      this.isLoggedSubject.next(true);
      console.log("Connected")
    }))
  }

  private createToken(username?: string, password?: string) {
    let token = `Basic ` + btoa(`${username}:${password}`);
    return token;
  }


  isLogged(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }

  getBasicAuthHeaderValue(): string {
    return this.createToken(this.username, this.password)
  }


  authHasBasic(): boolean {
    return !!this.password && !!this.username;
  }

  logout() {
    console.log("Logout")
    if (this.authHasBasic()) {
      this.password = undefined;
      this.username = undefined;
    }
    this.isLoggedSubject.next(false);
    this.router.navigateByUrl("/login").then(console.log).catch(console.error)
  }

//   getUtilisateur(): Observable<Doctor> {
//     return this.httpClient.get<Doctor>('/api/user', {});
//   }
}