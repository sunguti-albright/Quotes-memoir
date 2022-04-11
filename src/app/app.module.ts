import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { UserQuotesComponent } from './user-quotes/user-quotes.component';
import { HighlightDirective } from './highlight.directive';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesFormComponent,
    UserQuotesComponent,
    HighlightDirective,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
