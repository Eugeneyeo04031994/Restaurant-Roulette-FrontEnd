import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Restaurant} from "../Model/Restaurant";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root',

})


export class HttpRestaurantService {

  private baseURL = "http://localhost:8081/restaurant";
  constructor(private http: HttpClient) { }

  createRestaurant(restaurant: Restaurant): Observable<void>{
    // this.http.post(this.baseURL,)
    return this.http.post<void>(this.baseURL + "/addRestaurant", restaurant);
  }

  getAllRestaurants(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(this.baseURL + "/getAllRestaurantRecord")
  }

  deleteAllRestaurantRecord(): Observable<Restaurant[]>{
    return this.http.delete<Restaurant[]>(this.baseURL + "/deleteAllRestaurantRecord");
  }

  deleteSelectedRestaurant(restaurant: Restaurant): Observable<Restaurant[]> {
    const params:HttpParams = new HttpParams().set("name", restaurant.name);
    return this.http.delete<Restaurant[]>(this.baseURL + "/deleteSelectedRestaurant", {params});
  }

  decideRestaurant():Observable<Restaurant>{
    return this.http.get<Restaurant>(this.baseURL + "/decideRestaurant");
  }
}
