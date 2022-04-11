import { Component, OnInit, Output, EventEmitter ,} from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {Quote} from '../quote';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  quoted = new Quote(0,"","","","",new Date(),0,0);
  @Output() add = new EventEmitter<Quote>();
  quoteForm!: FormGroup;

  addQuote(){
   
  this.add.emit(quote);

  this.quoted = new Quote(0,"","","","",new Date(),0,0);
  }
  constructor(
    private formBuilder: FormBuilder
  ) { }

  // ngOnInit() {
  //   this.quoteForm = this.formBuilder.group({
  //     name: [null, Validators.required],
  //     title: [null, Validators.required],
  //     quote: [null, Validators.required],
  //     author: [null, Validators.required],
  //   })
  }

}
