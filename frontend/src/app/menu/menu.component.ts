import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    constructor(private authservice:AuthService,
    	           private route:Router) { }


   //methode pour passer a la mise a jour d'un user
   getliststatus(status:boolean){
    //on se dirige vers le formulaire de modification avec cette user
    this.route.navigate(['user','tableauDeUsers',status]);
  }



  ngOnInit(): void {
  }

}

