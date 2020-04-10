import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/modeles/user.model';
import { Observable } from 'rxjs';

import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


   loading = false;
   submitted = false;
   returnUrl: string;
   signIngroup:FormGroup;
 
  constructor(private formbuilder:FormBuilder,
  	          private authservice:AuthService,
              private router:Router,
              private route: ActivatedRoute,
              ) { 
                
              }
         ngOnInit() {
        this.signIngroup= this.formbuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
 	

    onSubmit(observable: Observable<Object>) {
        this.submitted = true;

     
        // stop here if form is invalid
        if (this.signIngroup.invalid) {
            return;
        }

        this.loading = true;
        this.authservice.SignIn(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['user','tableauDe',2]);
                },
                error => {
                    this.loading = false;
                });
    }


  //methode de connection 
  signIn(){
    this.authservice.showspinner=true;
    const username=this.signIngroup.value['user'];
    const password=this.signIngroup.value['password'];
    const user=this.authservice.SignIn(username,password);
    
      //on prend un peut de temps pour le chargement
      
         let observable = new Observable(this.myObservable);
         this.onSubmit(observable);
        
    

  }


  myObservable(observer) {
    setTimeout(() => {
      observer.next("done waiting for 5 sec");
      observer.complete();
    }, 1000);
  }

  showProgressSpinnerUntilExecuted() {
    });
    let subscription = observable.subscribe(
      (response: any) => {
        subscription.unsubscribe();
        
        //apres le chargement , si utilisateur est pret, il pourra avoir acces aux autres pages
        if(this.authservice.userAuth.isAuth){
          this.route.navigate;
        }
        else{
          console.log('echec de connection');
    
        }
        //handle response
        console.log(response);
        dialogRef.close();
      },
      (error) => {
        subscription.unsubscribe();
        //handle error
        dialogRef.close();
      }
    );
  }


    
   
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    

    // convenience getter for easy access to form fields
    get f() { return this.signIngroup.controls; }

}