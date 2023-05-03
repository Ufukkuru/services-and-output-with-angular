import { Component } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket-count',
  templateUrl: './basket-count.component.html',
  styleUrls: ['./basket-count.component.css']
})
export class BasketCountComponent {

  constructor(
    public _basket:BasketService
  ){}
}
