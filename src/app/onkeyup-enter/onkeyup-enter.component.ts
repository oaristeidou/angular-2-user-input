import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onkeyup-enter',
  templateUrl: './onkeyup-enter.component.html',
  styleUrls: ['./onkeyup-enter.component.css']
})
export class OnkeyupEnterComponent {

  values: string ='';

  onKeyUpEnter(value: string){
    this.values = value;
  }


}
