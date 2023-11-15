import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {RestaurantCardComponent} from "./components/restaurant-card/restaurant-card.component";
import {FormsModule, NgForm} from "@angular/forms";
import {Restaurant} from "./Model/Restaurant";
import {HttpClientModule} from "@angular/common/http";
import {HttpRestaurantService} from "./Service/http-service.service";
import {AlertMessageComponent} from "./components/alert-message/alert-message.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, HttpClientModule, AlertMessageComponent, RestaurantCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpRestaurantService]
})
export class AppComponent implements OnInit {

  constructor(private restaurantService: HttpRestaurantService) {
  }

  ngOnInit(): void {
    this.restaurantService.getAllRestaurants().subscribe(
      restaurants => this.restaurantArr = restaurants
    );
  }

  title: string = 'Restaurant Roulette';
  restaurantArr: Restaurant[] = [];
  randomRestaurant!: Restaurant;

  errorMessage!: string | null;

  onAddRestaurant(addRestaurantForm: NgForm) {
    let restaurantName = addRestaurantForm.value['restaurantName'];
    this.restaurantService.createRestaurant(new Restaurant(restaurantName)).subscribe({
      next: () => this.getAllRestaurants(),
      error: (e) => this.errorMessage = e.error
    });

    this.errorMessage = null;
    addRestaurantForm.resetForm();
  }

  deleteRestaurant(restaurant: Restaurant) {
    this.restaurantService.deleteSelectedRestaurant(restaurant).subscribe(
      restaurants => this.restaurantArr = restaurants
    );
  }

  onDecideRestaurant() {
    this.restaurantService.decideRestaurant().subscribe(restaurant => {
      this.randomRestaurant = restaurant;
      console.log(restaurant);
    });
  }

  deleteAllRestaurantRecord() {
    this.restaurantService.deleteAllRestaurantRecord().subscribe((restaurants) => {
      console.log("Successfully deleted all records.");
      this.restaurantArr = restaurants;
      this.randomRestaurant = <Restaurant>{};
    })
  }

  getAllRestaurants() {
    this.restaurantService.getAllRestaurants().subscribe(
      restaurants => this.restaurantArr = restaurants
    );
  }


}
