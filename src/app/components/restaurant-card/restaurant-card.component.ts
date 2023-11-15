import {Component, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Restaurant} from "../../Model/Restaurant";

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.css'
})
export class RestaurantCardComponent {
  @Input()
  restaurant!: Restaurant;

  @Output()
  // onRestaurantDelete = new EventEmitter<Restaurant>();
  delete: EventEmitter<Restaurant> = new EventEmitter();

  onRemoveRestaurant(){
    this.delete.emit(this.restaurant);
  }

}
