import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  count$: Observable<number> | undefined;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.count$ = this.shoppingCartService.getCount();
  }

  reloadPage() {
    window.location.reload();
  }

}
