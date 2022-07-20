import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IngredientService} from '../ingredient.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  @ViewChild('ingredientTextArea')
  public ingredientTextArea: ElementRef;
  @ViewChild('fontsize')
  public fontsize: ElementRef;

  constructor(public ingredientService: IngredientService, public route: Router) { }

  ngOnInit(): void {
  }

  public save(): void {
    this.ingredientService.saveIngredients(this.ingredientTextArea.nativeElement.value);
    this.ingredientService.saveFontSize(this.fontsize.nativeElement.value);
    this.route.navigate(['/selector']);
  }

}
