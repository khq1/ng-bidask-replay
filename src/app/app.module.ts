import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BidAskComponent } from './components/bid-ask/bid-ask.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    BidAskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
