import { Component } from '@angular/core';

@Component({
  selector: 'app-onkeyup',
  templateUrl: './onkeyup.component.html',
  styleUrls: ['./onkeyup.component.css']
})
export class OnkeyupComponent {
  values: string = '';

  onKeyUpEvent(event:any){
    this.values += event.target.value + "|";
  }
}
