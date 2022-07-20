import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  public ingredients: string;
  public fontSize: string;
  public ingredientsArray: string[] = [];


  constructor() { }

  public saveIngredients(ingredients: string): void {
    this.ingredientsArray = ingredients.split(',');
  }
  public saveFontSize(fontSize: string): void {
    this.fontSize = fontSize;
  }
}
