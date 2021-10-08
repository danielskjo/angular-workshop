import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    window.alert(
      this.checkoutForm.controls['name'].value +
        "'s order will be shipped to " +
        this.checkoutForm.controls['address'].value
    );
    this.checkoutForm.reset();
  }
}
