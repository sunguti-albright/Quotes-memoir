import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'author-detail',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class AuthorDetailComponent implements OnInit {
  @Input() quoted!: Quote;

  @Output() isRead = new EventEmitter<boolean>();

  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  upvote(){
    this.quoted.likes+=1;
  }
  downvote(){
    this.quoted.dislikes+=1;
  }
  constructor() { }

  ngOnInit() {
  }

}
