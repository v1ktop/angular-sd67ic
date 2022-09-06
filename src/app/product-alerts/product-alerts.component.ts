import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  constructor() {}

  //Indicates that the property value passes in from the component's parent
  @Input() product!: Product;

  //allows the ProductAlertsComponent to emit an event when the value of the notify property changes
  @Output() notifyDialog = new EventEmitter();

  ngOnInit(): void {}
}
