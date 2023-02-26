
export class Ingredient{
   name: string;
   quantity: number;
   dateAdded: string;
  constructor(ingredientName: string, quantityIngredient: number, addedOn: string) {
    this.name = ingredientName;
    this.quantity = quantityIngredient;
    this.dateAdded = addedOn;
  }

}
