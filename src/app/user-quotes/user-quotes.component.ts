import { Component, OnInit,} from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-user-quotes',
  templateUrl: './user-quotes.component.html',
  styleUrls: ['./user-quotes.component.css']
})
export class UserQuotesComponent implements OnInit {
  title = 'Best Inspirational Quotes';
  quotes:Quote[] = [
    new Quote (1,'Yakob','Yoga', 'Yoga is about rising to a new balance in every aspect of life', 'Buddha', new Date(2000,1,1),0,0),
    new Quote (2,'Jane','Life choices','Life imposes things on you that you cannot control, but you still have the choice of how you’re going to live through this..','Celine Dion',new Date(2018,10,13),0,0),
    new Quote (3,'Ali','Happiness', 'Happiness is a direction, not a place', 'Sydney Harris', new Date(2000,1,1),0,0),
    new Quote (4,'Mason','Kindness','Be kind whenever possible. It is always possible','Dalai Lama',new Date(2018,10,13),0,0),
  
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
    
  }
  constructor() { }

  ngOnInit() {
  }

}