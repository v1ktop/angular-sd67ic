import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent implements OnInit {
  @Input() product!: Product;
  constructor() {}
  ngOnInit(): void {}

  share(mesaje: string) {
    window.alert(mesaje);
  }
}
