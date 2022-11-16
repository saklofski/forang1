import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  name="sakly ali" 

  data:Observable<string>
  constructor() { }

  getData(){
    this.data=new Observable(observ=>{
        setTimeout(() => {
          observ.next('first')
        }, 1000);
        setTimeout(() => {
          observ.next('second')
        }, 3000);
        setTimeout(() => {
          observ.next('third')
        }, 7000);
        setTimeout(() => {
          observ.complete()
        }, 10000);
    })
    return this.data
  }

 getName() {
    return this.name
  } 
}
