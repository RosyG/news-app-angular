import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, Response } from '@angular/http';
// import {Observable} from "rxjs";

import { routing, appRoutingProviders} from './app.routing';
/* import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatButtonToggleModule, MatIconModule } from '@angular/material';*/
// Http,
// FormsModule
// HttpModule,
// MatButtonModule,
// MatCardModule,
// MatMenuModule,
// MatToolbarModule,
// MatButtonToggleModule,
// MatIconModule,
import { AppComponent } from './app.component';
import { HackerNewsComponent } from './hacker-news/hacker-news.component';
import { TodosComponent } from './todos/todos.component';
import { BitcoinPricesComponent } from './bitcoin-prices/bitcoin-prices.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HackerNewsComponent,
    TodosComponent,
    BitcoinPricesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    Http, Response

  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
