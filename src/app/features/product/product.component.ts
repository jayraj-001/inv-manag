import { Component, ViewChild, ElementRef } from '@angular/core';
declare var bootstrap: any;
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent  {
 

  @ViewChild('productModal') modalElement!: ElementRef;
  modalInstance: any;

  product: any = {
    name: '',
    price: '',
    category: '',
    image: null
  };

openModel() {
  const modalElement = document.getElementById('myModal');
  const modal = new bootstrap.Modal(modalElement);
  modal.show();
}

closeModal() {
  if (this.modalInstance) {
    this.modalInstance.hide();
  }
}


  onFileSelect(event: any) {
    this.product.image = event.target.files[0];
  }

  saveProduct(form: any) {

    if (form.invalid) {
      alert("All fields are required!");
      return;
    }

    // 👉 Here you can push into array or call API
    console.log("Saved Product:", this.product);

    alert("Saved Successfully ✅");

    this.closeModal();

    // Reset form
    form.resetForm();
  }
}


