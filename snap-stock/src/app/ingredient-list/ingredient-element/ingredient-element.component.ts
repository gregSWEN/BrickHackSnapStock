import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from './ingredient';
@Component({
  selector: 'app-ingredient-element',
  templateUrl: './ingredient-element.component.html',
  styleUrls: ['./ingredient-element.component.css']
})
export class IngredientElementComponent implements OnInit {
  @Input('individualIngredient') ingredient: Ingredient = new Ingredient('empty', 0, 'never');

  constructor() { }

  ngOnInit(): void {
  }

}
