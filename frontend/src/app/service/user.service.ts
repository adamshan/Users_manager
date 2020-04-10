import { Injectable } from '@angular/core';
import { User } from '../modeles/user.model';
import { Subject, Observable } from 'rxjs';
import { resolve } from 'url';
import { reject } from 'q';
import {HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers:HttpHeaders=new HttpHeaders();
  options:any;
  server='http://localhost:8000/user';
  constructor( private http:HttpClient) 
  
  {
    this.headers.append('enctype','multipart/form-data');;
    this.headers.append('Content-type','application/json');
    this.headers.append('X-Requested-With','XMLhttpRequest');
    }


//propriete
//besoin d'un tableau pour stocker tous nos utilisateurs

listuser:User[]=[
];
usersubject=new Subject<any[]>();

//on va emmetre le subjet de la liste des utilisateurs a chaque 
emitusers(){
  
  this.usersubject.next(this.listuser.slice());
}
//nommer un utilisateur en tant administrateur
nommerAdmin(user:User){
  
  //on envoi utilisateur dans notre backend pour le traitement
  this.http.get<User>(this.server+'/estAdmin/'+user.id).subscribe(
    (data)=>{
        console.log(data);
       
    },
    (error)=>{
      console.log('il ya une erruer'+error);
    
  }
)
  
}

//retirer un utilisateur en tant administrateur
demettreAdmin(user:User){ 
  
  //on envoi utilisateur dans notre backend pour le traitement
  this.http.get<User>(this.server+'/estUser/'+user.id).subscribe(
    (data)=>{
        console.log(data);
       
    },
    (error)=>{
      console.log('il ya une erruer'+error);
    
  }
  )
}


adduser(formdata:FormData){
  //this.listuser.push(usr);
      this.http.post<User>(this.server+'/add',formdata).subscribe(

      )
     
}
//metohe de modification de la base de donnee
updateuser(user:User){
  this.http.post<User>(this.server+'/update',user).subscribe(
    (data)=>{
        console.log(data);
        
    },
    (error)=>{
      console.log('il ya une erreur de modification'+error);
    }
      );
    
 
}

//delete user
deleteuser(id:number):Observable<User>{
  //cette ligne est valable que pour le debut car plus tard on travaillera avec une base de donnne avec laravel
  
  //this.listuser.splice(id-1,id);
  //on construit un utilisateur inutile en afin de garder id
  const user={ 
    id:id,

    firstname:"",
    lastname:"",
    email:"",
    username:"",
    password:"",
    estAdmin:false,
    isAuth:false
  }
    return this.http.post<User>(this.server+'/delete',user);
      
  
}


//recuperer un utilisateur par son id
getOneUser(id:number){
  const user:User=this.listuser.find(
    (userobjet)=>{
      return userobjet.id===id;
    }
  )
  return user;
}

//recuperation de la liste des utilsateur
   allUser(){
  
    this.http.get<any[]>(this.server+'/tableauDeUsers').subscribe(
      (data)=>{
        this.listuser=data;
        console.log(data);
        this.emitusers();
      },
      (error)=>{
          console.log('erreur de chargement de la liste des  appareils');
          //lorsqu'il ya erreur de chargement de la liste on renvoi au moi la liste local
      }
    )
    
}

}
