import { Component } from '@angular/core';
// @ts-ignore
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  openModal() {
    const modalEl = document.getElementById('myModal');
    if (modalEl) {
      // @ts-ignore
      const modal = new window.bootstrap.Modal(modalEl);
      modal.show();
    }
  }



}
