import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientsSelectorComponent } from './ingredients-selector/ingredients-selector.component';
import {CommonModule} from '@angular/common';
import { ClickDirective } from './click.directive';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponent,
    IngredientsSelectorComponent,
    ClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
