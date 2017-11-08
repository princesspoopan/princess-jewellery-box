import { Component, OnInit, OnDestroy } from '@angular/core';
import { BuyItemsService } from './buy-items.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-buy-list',
  templateUrl: './buy-list.component.html',
  styleUrls: ['./buy-list.component.css'],
})
export class BuyListComponent implements OnInit, OnDestroy {

  buyItemsSubscription: Subscription

  constructor(private buyItemsService: BuyItemsService) { }

  ngOnInit() {
    this.buyItemsSubscription = this.buyItemsService.fetchItems()
      .subscribe(items => console.log(items))
  }

  ngOnDestroy() {
    this.buyItemsSubscription.unsubscribe()
  }

}
