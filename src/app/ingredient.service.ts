import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  public ingredients: string;
  public ingredientsArray: string[] = [];


  constructor() { }

  public saveIngredients(ingredients: string): void {
    this.ingredientsArray = ingredients.split(',');
  }
}
