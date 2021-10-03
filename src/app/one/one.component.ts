import {Component} from '@angular/core'
import { Title } from '@angular/platform-browser';


@Component({
  selector:'app-one',
  templateUrl:'./one.component.html'
})
export class OneComponent {
 

  constructor(private title:Title){

  }

  ngOnInit() {
   // this.title.setTitle("One Component")  //alternative way is set title in route usind data properrty
 }

}