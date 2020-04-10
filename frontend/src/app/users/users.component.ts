import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { User } from '../modeles/user.model';
import { Subscription } from 'rxjs';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { SideComponent } from '../side/side.component';
import { FileComponent } from '../file/file.component';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  ngOnInit(){

  }

  constructor(private userservice:UserService,
    private route:Router,
    private authservice:AuthService) { 
     
    }
    

  @Input() user:User

  @Input() present:boolean=true;

  modif()
  {
    this.route.navigate(['user/update/:id']);
  }

  //les methodes local
  adduser(user:User){
    //this.userservice.adduser(user);
  }
  deleteuser(id:number){
    
    this.userservice.deleteuser(id).subscribe(

      (data)=>{
          //on recupere la liste de tous les users
          console.log("on a supprimer utilisateur de nom "+data.firstname);
          this.userservice.allUser();
          this.userservice.emitusers();
      }
    );
     
  
  }

  

  detailuser(id:number){
    this.route.navigate(['user','detail',id]);  
  }
  //mettre  en tant admin

  nommeruser(user:User){
    this.userservice.nommerAdmin(user);
    this.userservice.allUser();
    this.userservice.emitusers();
  }
  
  //returer utilisateur comme administrateur
  retireruser(user:User){
    this.userservice.demettreAdmin(user);
    this.userservice.allUser();
    this.userservice.emitusers();
  }


  //gestion de la confirmation de suppressioin 
  open(){
    
    this.present=false;
  }
  close(){
    
    this.present=true;
  }



  getlistuserbystatus(status){
    //on recupere la liste de nos utilisateur via notre backend laravel
    this.HttpClient.get<any[]>(this.server+'/TableauDeUsers/'+status).subscribe(
      (data)=>{
        this.listuser=data;
        this.emitusers();
      },
      (error)=>{
          console.log('erreur de chargement de la liste des  appareils');
          //lorsqu'il ya erreur de chargement de la liste on renvoi au moi la liste local
      }
    )
}

//getters qui renvoie la liste des utilisateurs
getlistusers(){
  return this.listuser;
}

}
