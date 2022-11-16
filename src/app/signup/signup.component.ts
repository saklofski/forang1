import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  dataArray
  constructor(private http:HttpClient) { 
    this.http.get('https://jsonplaceholder.typicode.com/posts',{observe:"body"}).subscribe(data=>{
      this.dataArray=data
    })
  }

  

}
