import { Component } from '@angular/core';
import { ProductData } from '../../productData';
import { PRODUCTS_LIST } from '../../products.data100';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
// type literal
role: 'admin' | 'user' | 'editor' = 'user';

  selectedProductId: number | null = null;
  activeImages: { [productId: number]: string } = {};
  productsList: ProductData[] = PRODUCTS_LIST;

  getMainImage(product: ProductData): string {
    return this.activeImages[product.id] || product.imageCover;
  }

  toggleGallery(productId: number): void {
    this.selectedProductId =
      this.selectedProductId === productId ? null : productId;
  }

  changeImage(productId: number, image: string): void {
    this.activeImages[productId] = image;
  }
}
