import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgStyle } from '@angular/common';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BuyListComponent } from './buy-list/buy-list.component';
import { SellListComponent } from './sell-list/sell-list.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'buy', component: BuyListComponent },
  { path: 'sell', component: SellListComponent },
  { path: '', redirectTo: '/buy', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BuyListComponent,
    SellListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
