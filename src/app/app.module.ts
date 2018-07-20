import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders} from './app.routing';
/*Styles*/
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ChartsModule } from 'ng2-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
/* import { MatButtonModule,
   MatCardModule, MatMenuModule, MatToolbarModule, MatButtonToggleModule, MatIconModule } from '@angular/material';*/
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
import { DatePipe } from './pipes/date.pipes';


@NgModule({
  declarations: [
    AppComponent,
    HackerNewsComponent,
    TodosComponent,
    BitcoinPricesComponent,
    HomeComponent,
    DatePipe
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
