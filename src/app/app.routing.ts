import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import { HackerNewsComponent } from './hacker-news/hacker-news.component';
import { TodosComponent } from './todos/todos.component';
import { BitcoinPricesComponent } from './bitcoin-prices/bitcoin-prices.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'news', component: HackerNewsComponent },
  { path: 'todo', component: TodosComponent},
  { path: 'bitcoin', component: BitcoinPricesComponent},
  { path: '**', component: HomeComponent},

];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


// @NgModule({
//   imports: [RouterModule.forRoot(appRoutes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}

