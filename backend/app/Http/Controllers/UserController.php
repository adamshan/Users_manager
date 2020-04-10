<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    //connection permet de gerer les users
    public function connection($login,$password){
        
        //recherche de utilisateur correspondant
        $user=user::where('login','=',$login)->where('password','=',$password)->get();
	
        return $user;        

    }

      public function getUtilisateur(){
        $user=user::orderby('id','desc')->get();
        return $user;
    }

   //on recupere tout les utilisateurs simples

    public function getListUtilisateur($status){
        $user=user::listuserbystatus($status);

        return $user;
    }

    	//ajoutUtilisateur permet d'ajouter un utilisateur
      public function ajoutUtilisateur(Request $request){
       $data=request();
        

        $user=new user();
        $firstname=request('firstname');
        $lastname=request('lastname');
        $email=request('email');
        $login=request('login');
        $password=request('password');
        $status=false;

    
        
        $user->firstname=$firstname;
        $user->lastname=$lastname;
        $user->email=$email;
        $user->login=$login;
        $user->password=$password;
        $user->isadmin=$status;
        //on ajoute dans la base de donnee
        $user->save();
        $user=user::all();
 
        return $user;
    }


    //modifUtilisateur modifie un utilisateur
    public function modifUtilisateur(){
        $data=request();
        $user=user::find($data->id);

        $user->firstname=$data->firstname;
        $user->lastname=$data->lastname;
        $user->email=$data->email;
        $user->login=$data->login;
        $user->password=$data->password;
        
        $user->update();
        return $user;
    }

       
 	
 	//estAdmin permet de nommer un utilisateur admin
    
    public function estAdmin($id){

        
        $user=user::find($id);
        $user->isadmin=true;
        $user->update();
        return $user;

    }
	

    //estUtilisateur permet de demettre un utilisateur de son status d'admin
    
    public function estUtilisateur($id){

        $user=user::find($id);
        $user->isadmin=false;
        $user->update();
        return $user;
    }


    //supprimeUtilisateur supprime un utilisateur

    public function supprimeUtilisateur(){
       
        $id=request('id');
        user::deluser($id);
        $user=user::all();
        
        return $user;
    }
}
    

}



