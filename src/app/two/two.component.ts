import {Component} from '@angular/core'
import { Title } from '@angular/platform-browser';


@Component({
  selector:'app-two',
  templateUrl:'./two.component.html'
})
export class TwoComponent {
 

  constructor(private title:Title){

  }

  ngOnInit() {
    //alternative way is set title in route usind data properrty
    //this.title.setTitle("Two Component")
 }

}