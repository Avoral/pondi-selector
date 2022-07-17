import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IngredientsComponent} from './ingredients/ingredients.component';
import {IngredientsSelectorComponent} from './ingredients-selector/ingredients-selector.component';


const routes: Routes = [
  {
    path: '',
    component: IngredientsComponent
  },
  {
    path: 'selector',
    component: IngredientsSelectorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
