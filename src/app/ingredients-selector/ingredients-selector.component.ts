import {Component, HostListener, OnInit} from '@angular/core';
import {IngredientService} from '../ingredient.service';

@Component({
  selector: 'app-ingredients-selector',
  templateUrl: './ingredients-selector.component.html',
  styleUrls: ['./ingredients-selector.component.scss']
})
export class IngredientsSelectorComponent implements OnInit {

  constructor(public ingredientService: IngredientService) { }

  ngOnInit(): void {
  }

  @HostListener('keypress')
  public escapeClicked(): void {
    console.log('dawaj eskejpa');
  }
}
