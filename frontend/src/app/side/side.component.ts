import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { User } from '../modeles/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
	
	userForm:FormGroup;
  user:User;
  
  constructor( private formBuilder: FormBuilder,
  			   private routeactivate:ActivatedRoute,
            private userservice: UserService,
  			   private router: Router) { }


  ngOnInit() {
    const id=this.routeactivate.snapshot.params['id'];
    this.user=this.userservice.getOneUser(+id);
   this.initForm();
    }


   initForm(){
    this.userForm=this.formBuilder.group(
      {
        //ici on va initialiser notre  formulaire en validant les champs
        firstname:[this.user.firstname,[Validators.required]],
        lastname:[this.user.lastname,[Validators.required]],
        email:[this.user.email,[Validators.required,Validators.email]],
        login:[this.user.username,[Validators.required]],
        password:[this.user.password,[Validators.required]]
      }
    )
  }
 
  onSubmitForm() {
    const formValue = this.userForm.value;
    const valeur=this.userForm.value;
    const firstname=valeur['firstname'];
    const lastname=valeur['lastname'];
    const email=valeur['email'];
    const username=valeur['username'];
    const password=valeur['password'];

     var formdata=new FormData();
    formdata.append("firstname",firstname);
    formdata.append("lastname",lastname);
    formdata.append("email",email);
    formdata.append("username",username);
    formdata.append("password",password);
    
    this.userservice.adduser(formdata);
  }
  


  
  
  //initialisalisttion du formulaire
  //methode local pour update utilisateur

  updateuser(){

    const valeur=this.userForm.value;
    //recuperation des informations saisies dans le formulaire
    const firstname=valeur['firstname'];
    const lastname=valeur['lastname'];
    const email=valeur['email'];
    const username=valeur['username'];
    const password=valeur['password'];
    //on construit utilisateur
    const usr:User=new User(username,password,firstname,lastname,email,this.user.estAdmin);
    //affectation de id
    usr.id=this.user.id;
    //on utilise le service
    console.log(usr);

    this.userservice.updateuser(usr);
 }
}

