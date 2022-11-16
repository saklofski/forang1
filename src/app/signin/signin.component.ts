import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private db:DatabaseService) {
    
  }

  get() {
    this.db.getData().subscribe(
      next=>{
        console.log(next)
      },
      error=>{
        console.log(error)
      },
      ()=>{
        console.log('done')
      }
    )
  }

  ngOnInit(): void {
  }

}
