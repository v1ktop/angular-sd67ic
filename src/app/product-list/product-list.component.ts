import { Component, ContentChild, ViewChild } from '@angular/core';
import { ProductInfoComponent } from '../product-info/product-info.component';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;
  shadowValues = '1px 1px 1px aqua';
  @ViewChild(ProductInfoComponent) productInfo!: ProductInfoComponent;

  share() {
    this.productInfo.share("The product has been shared");
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
