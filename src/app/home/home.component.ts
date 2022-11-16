import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewChecked, AfterViewInit, OnDestroy {

  display="block"
  color="red"
  n=3 /* ngswitch */
  verif=false /* *ngif */
  tab=['Tunisia', 'Algérie', 'Moroco', 'Egypte'] /* ngfor */
  firstName='hatem' /* two way binding */
  name='salah' /* Interpolation */
  solde="10"
  today: number = Date.now();
  link='assets/images/image-attractive-960x540.jpg' /* Proporty Binding */

  newName
  constructor(private db:DatabaseService) {
    /* console.log(this.db.getName()) */
    this.newName=this.db.getName()
    /* console.log('constructeur') */
   }

  ngOnChanges() {
      console.log('onchanges')
  }

  ngOnInit(): void {
    console.log('onInit')
  }

  ngDoCheck(): void {
      console.log('docheck')
  }

  ngAfterContentInit(): void {
      console.log('aftercontetinit')
  }

  ngAfterContentChecked(): void {
      console.log('contentchekc')
  }

  ngAfterViewChecked(): void {
      console.log('chacked')
  }

  ngAfterViewInit(): void {
      console.log('viewinit')
  }

  ngOnDestroy(): void {
      console.log('destroy')
  }

  get(e){ /* Event Binding */
    console.log(e.target.value)
  }

  gete() { /* two way binding */
    console.log(this.firstName)
  }

  getes(first) { /* two way binding */
    console.log(first.value)
  }

  go() {

  }

  getdata() {

  }

  



}
