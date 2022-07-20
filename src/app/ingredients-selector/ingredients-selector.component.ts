import {Component, HostBinding, HostListener, OnInit} from '@angular/core';
import {IngredientService} from '../ingredient.service';

@Component({
    selector: 'app-ingredients-selector',
    templateUrl: './ingredients-selector.component.html',
    styleUrls: ['./ingredients-selector.component.scss']
  })
  export class IngredientsSelectorComponent implements OnInit {

  @HostBinding('style.font-size')
  public fontSize = 24;

  constructor(public ingredientService: IngredientService) { }

  ngOnInit(): void {
  }

  @HostListener('document:keypress')
  public escapeClicked(): void {
    console.log('dawaj eskejpa');
  }
}
