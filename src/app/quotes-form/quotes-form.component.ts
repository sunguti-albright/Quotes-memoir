import { Component, OnInit, Output, EventEmitter ,} from '@angular/core';
import {Quote} from '../quote';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  quoted = new Quote(0,"","","","",new Date(),0,0);
  @Output() add = new EventEmitter<Quote>();

  addQuote(){
this.add.emit(this.quoted);
this.quoted = new Quote(0,"","","","",new Date(),0,0);
  }
  constructor() { }

  ngOnInit() {
  }

}
