import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  headers=new HttpHeaders();
  
  constructor(private http:HttpClient) { 
    this.headers.append('enctype','multipart/form-data');;
    this.headers.append('Content-type','application/json');
  }

  ngOnInit(): void {
  }
 
  myfile:File=null;

  detectfile(event){
    this.myfile=event.target.files[0];
    console.log(this.myfile)
  }

  upload(){

     var fd=new FormData();
     fd.append('image',this.myfile,this.myfile.name);
     this.http.post('http://localhost:8000/user/upload',fd,{headers:this.headers}).subscribe(
       
     )
  }
}
}