import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  ViewChild, ElementRef } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-customer',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  @ViewChild('customerModal') modalElement!: ElementRef;
  modalInstance: any;

  customer: any = {
    name: '',
    phone: '',
    email: '',
    address: ''
  };

    openModel() {
    this.modalInstance = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modalInstance.show();
  }

  closeModal() {
    if (this.modalInstance) {
      this.modalInstance.hide();
    }
  }

    saveCustomer(form: any) {

    if (form.invalid) {
      alert("⚠ All fields are required!");
      return;
    }

    console.log("Customer Saved:", this.customer);

    alert("✅ Customer Saved Successfully!");

    this.closeModal();

    form.resetForm();
  }
}
