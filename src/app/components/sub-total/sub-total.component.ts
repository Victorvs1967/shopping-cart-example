import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-sub-total',
  templateUrl: './sub-total.component.html',
  styleUrls: ['./sub-total.component.scss']
})
export class SubTotalComponent implements OnInit {

  count$: Observable<number> | undefined;
  subTotal$: Observable<number> | undefined;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.count$ = this.shoppingCartService.getCount();
    this.subTotal$ = this.shoppingCartService.getSubtotal();
  }

  bayItems() {
    this.shoppingCartService.bayItems();
  }

}
