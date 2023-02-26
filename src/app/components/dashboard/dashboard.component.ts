import { Component, OnInit } from '@angular/core';
import { StocksService, StockInterface } from '../../services/stocks.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stocks: Array<StockInterface> = [];
  symbols: Array<string> = [];

  constructor(private service: StocksService) { // Gets the stock symbols from the service on component construction
    this.symbols = service.get();
  }

  ngOnInit() { // Implements the ngOnInit method and calls the service to load stock data over Http
    this.service
      .load(this.symbols)
      .subscribe(stocks => this.stocks = stocks);
  }
}
