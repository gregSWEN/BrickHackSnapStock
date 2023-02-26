import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from './ingredient-element/ingredient';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  ingredientList: Ingredient[]  = [
    new Ingredient('apple', 1, '01/29/2023'),
    new Ingredient('Tomato', 1, '01/29/2023'),
    new Ingredient('pear', 1, '01/29/2023'),
    new Ingredient('celery', 1, '01/29/2023'),
    new Ingredient('popsicle', 1, '01/29/2023'),
    new Ingredient('popsicle', 1, '01/29/2023'),
    new Ingredient('popsicle', 1, '01/29/2023'),
    new Ingredient('popsicle', 1, '01/29/2023'),
    new Ingredient('popsicle', 1, '01/29/2023'),
    new Ingredient('popsicle', 1, '01/29/2023'),
    new Ingredient('popsicle', 1, '01/29/2023'),
    new Ingredient('popsicle', 1, '01/29/2023'),


  ];
  constructor() { }

  ngOnInit(): void {
  }

}
