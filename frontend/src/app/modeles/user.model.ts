export class User {
	public id:number=0;
	public username:string;
    public password:string;
   
    public firstname:string;
    public lastname:string;
    public email:string;
    public estAdmin:boolean;
    public isAuth:boolean;
    
  	constructor(username,password,firstname, lastname,email,isadmin){
       
        this.id++;
        this.username=username;
        this.password=password;
       
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.estAdmin=isadmin;
  }
 }