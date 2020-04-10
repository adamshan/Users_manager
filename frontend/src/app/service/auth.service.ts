import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../modeles/user.model';
import { resolve } from 'url';
import { reject } from 'q';
import { HttpClient } from '@angular/common/http';
//import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  
  //headers:Headers=new Headers();
  options:any;
  server='http://localhost:8000/user';
  constructor( private http:HttpClient) 
  
  {
    /*this.headers.append('enctype','multipart/form-data');;
    this.headers.append('Content-type','application/json');
    this.headers.append('X-Requested-With','XMLhttpRequest');
    this.options=new RequestOptions({});
   */}

  //sauvegarde de utilisateur connecté
  
  userAuth:User=new User('','' ,'','','',false);
  //au debut, utilisateur n'est pas connecte
    //boutton pour arreter la progession du spinner
  showspinner=false;

  //methode de connection

   SignIn(username:string,password:string){
    
  
  this.http.get<User>(this.server+'/connection/'+username+'/'+password).subscribe(
    (data)=>{
      //recuperation de utilisateur
      const user:User=data[0];
      //verification s'il existe
      if(user!=null){
        user.isAuth=true;
        this.userAuth=user;
      }
      else{
        console.log("ces parametres sont deja utilise");
      }
    }
  )
}
//methode de deconnection
isDisconnect(){
  this.userAuth.isAuth=false;
}
}

