import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}
interface CartItem {
  product: Product;
  qty: number;
}

@Component({
  selector: 'app-purchases',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent {

  searchText: string = '';

  isModalOpen = false;   

  openModel() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  products: Product[] = [
    { id: 1, name: ' Rumbers', price: 20, image: 'https://tse3.mm.bing.net/th/id/OIP.Q8PAQC2304ezsowYbIlZUgHaKG?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 2, name: ' Masala', price: 60, image: 'https://tse2.mm.bing.net/th/id/OIP.HIHY6JHWZmwCM6zn_fa1bAHaHa?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 3, name: 'Lays Salted', price: 100, image: 'assets/img/salted.jpg' },
    { id: 4, name: 'Pepsi Tin', price: 50, image: 'assets/img/pepsi-tin.jpg' },
    { id: 5, name: 'Coffee Mate', price: 850, image: 'https://tse4.mm.bing.net/th/id/OIP.tS4z--vecztdq3HacG8J4wHaHa?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 6, name: 'Coca Cola', price: 50, image: 'https://tse3.mm.bing.net/th/id/OIP.cI500T2A_5F9bu5r8SOHvgHaE6?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3' }
  ];

  get filteredProducts(): Product[] {
    if (!this.searchText) {
      return this.products;
    }

    return this.products.filter(p =>
      p.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }


  cart: CartItem[] = [];

  addToCart(product: Product) {
    const existing = this.cart.find(c => c.product.id === product.id);
    if (existing) {
      existing.qty++;
    } else {
      this.cart.push({ product, qty: 1 });
    }
  }

  removeItem(item: CartItem) {
    this.cart = this.cart.filter(c => c !== item);
  }

  get grandTotal(): number {
    return this.cart.reduce((sum, item) =>
      sum + (item.product.price * item.qty), 0);
  }

  clearCart() {
    this.cart = [];
  }
}
