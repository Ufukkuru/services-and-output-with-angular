import { Component } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
 constructor(
  private _basket:BasketService
 ){}

 addBasket(){
  this._basket.basketCount += 1
}
}
