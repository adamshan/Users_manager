import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { User } from '../modeles/user.model';
import { UserService } from 'src/app/service/user.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { SideComponent } from '../side/side.component';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit,OnDestroy {


@Input() present:boolean=true;
  //liste utilisateur en local

  items = [];
  pageOfItems: Array<any>;

  listuser:User[];
  statusliste:number=2;
  userSubcription:Subscription
  constructor(private routeactivate:ActivatedRoute,
              private userservice:UserService,
              private route:Router,
              private authservice:AuthService){ 

                
                
    
  }

  ngOnInit() {
    this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
    
    this.statusliste=+this.routeactivate.snapshot.params['status'];
                console.log(this.statusliste)
                //on recupere la liste de tout les utilisateur
                this.alluser();
  }
  ngOnDestroy(){
    this.userSubcription.unsubscribe();
  }

  //les methodes local
  adduser(user:User){
   // this.userservice.adduser(user);
  }
  
  //recuperation de tout les users
  alluser(){
    
   
    if(this.statusliste==0)
       this.userservice.getlistuserbystatus(0);
    else if(this.statusliste==1)
      this.userservice.getlistuserbystatus(1);
    else
      this.userservice.allUser();
    
    //this.listuser=this.userservice.getlistusers();
    
    this.userSubcription=this.userservice.usersubject.subscribe(
      (listsusers:User[])=>{
        this.listuser=listsusers
        
        
      }
    )
    this.userservice.emitusers();
    console.log(this.listuser)
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
}

