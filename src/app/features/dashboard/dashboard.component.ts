import { Component, OnInit } from '@angular/core';


interface InventoryItem {
  id: number;
  productName: string;
  stockAvailable: number;
  reorderStock: number;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  totalProducts: number = 0;
  lowStockProducts: number = 0;
  totalOrders: number = 0;

  inventory: InventoryItem[] = [];
  constructor() { }

  ngOnInit(): void {
    // Dummy inventory data
    this.inventory = [
      { id: 1, productName: 'Galaxy S25 Ultra', stockAvailable: 20, reorderStock: 50 },
      { id: 2, productName: 'iPhone 16', stockAvailable: 10, reorderStock: 40 },
      { id: 3, productName: 'OnePlus 12', stockAvailable: 5, reorderStock: 30 },
      { id: 4, productName: 'Pixel 12 Pro', stockAvailable: 25, reorderStock: 50 },
    ];

    this.calculateMetrics();
  }


  calculateMetrics(): void {
    this.totalProducts = this.inventory.length;
    this.lowStockProducts = this.inventory.filter(item => item.stockAvailable < item.reorderStock).length;
    this.totalOrders = 120; // This can be fetched from a backend API later
  }

}
