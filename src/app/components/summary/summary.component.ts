import { Component, Input } from '@angular/core';
import {StockInterface} from "../../services/stocks.service";

@Component({
  selector: 'summary',
  styleUrls: ['./summary.component.css'],
  templateUrl: './summary.component.html'
})
export class SummaryComponent {
  @Input() stock: StockInterface | undefined;

  isNegative() {
    return !(!this.stock || this.stock.change >= 0);
  }

  isPositive() {
    return !(!this.stock || this.stock.change <= 0);
  }

}
