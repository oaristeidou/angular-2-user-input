import { Component, OnInit } from '@angular/core';
import {Member} from '../member'

@Component({
  selector: 'app-list-of-members',
  templateUrl: './list-of-members.component.html',
  styleUrls: ['./list-of-members.component.css']
})
export class ListOfMembersComponent {
  title: string;
  members: Member[];

  constructor(){
    this.title = "List of Angular 2 Workshop";
    this.members = [];
  }

  addMember(value: string){
    if (value)
      this.members.push(new Member(value));
  }

}
