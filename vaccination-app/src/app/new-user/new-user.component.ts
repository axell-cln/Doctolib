import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { config } from 'rxjs';
import { LoginService } from '../login.service';
import { NewUserService } from '../new-user.service';
import { VaccinationCenter } from '../vaccination-center/vaccination-center';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
 

  constructor(private service: NewUserService, private http: HttpClient) { }


  newUser = {email: '', password: '', login:''};
 /*  username: string = "";
  email: string = "";
  password: string = "";
  passwordConfirm: string = "";
 */

  @Input() userType?: string;
  
  ngOnInit(): void {
    
  }

  createAccount() {
    // récupérez les valeurs du formulaire
    
    /* const username = this.username;
    const email = this.email;
    const password = this.password;
    const passwordConfirm = this.passwordConfirm;
 */
    // validez les valeurs du formulaire
    if (this.newUser.login === '') {
      // le nom d'utilisateur est vide, affichez une erreur
      console.log('Le nom d\'utilisateur ne peut pas être vide');
      return;
    }
    if (this.newUser.email === '') {
      // l'adresse email est vide, affichez une erreur
      console.log('L\'adresse email ne peut pas être vide');
      return;
    }
    if (this.newUser.password === '') {
      // le mot de passe est vide, affichez une erreur
      console.log('Le mot de passe ne peut pas être vide');
      return;
    }

   const body=JSON.stringify(this.newUser);
   const parametres = new HttpParams()
      .append('login', this.newUser.login)
      .append('email', this.newUser.email)
      .append('password', this.newUser.password);

    this.http.post('http://localhost:8080/api/public/users', body,{
      params: parametres,
    })
      .subscribe(response => {
        console.log(response);
      });
   /*  if (this.newUser.password !== passwordConfirm) {
      // les mots de passe ne correspondent pas, affichez une erreur
      console.log('Les mots de passe ne correspondent pas');
      return;
    } */

    

    // les valeurs du formulaire sont valides, créez le compte utilisateur
    //console.log(`Création du compte utilisateur avec le nom d'utilisateur "${username}" et l'adresse email "${email}"`);
  
    
/* 
    const basicAuth = 'Basic ' + btoa("Merlin" + ':' + "1234");
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', basicAuth);

    const body = JSON.stringify(newUser) */
  
    // // send the POST request using the HttpClient service
    // this.http.post('http://localhost:8080/api/public/users', body, { headers }).subscribe((response) => {
    //   // handle the response here
    //   console.log(response);
    // });
    /* this.service.getQuiSertDePost().subscribe(
      value=>{
         return value;
   },
     error=>{console.log("Error")}); */
     
     
   }
 }
 