import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Ingredient } from "./ingredient.model"
import { format } from 'url';
import { RecipeService } from '../recipe/recipe.service';
import { pipe } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  raggaa
  myForm: FormGroup;
  change = false;
  ingredIndex = null;
  ingredients: any = [
    { 'banani': 10 },
    { 'vashli': 16 },
  ]
  constructor( private recipeService: RecipeService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'amount': new FormControl(null, [Validators.required])
    })
    this.newIngredientFromRecipe()

    console.log('on init', this.ingredients)

  }

  

  getIndex(inde) {
    this.ingredIndex = inde;
  }

  onSubmit(form: FormGroup) {
    let name = form.value.name;
    let value = form.value.amount;
    let newgred = {};
    newgred[name] = value;
    
    if(!this.change){
      this.ingredients.push(newgred)
    } else {
      this.ingredients[this.ingredIndex] = newgred;
    }
    form.reset();
    this.change = false;
  }

  changeIngredients(name, amount) {
    this.change = true;
    this.myForm = new FormGroup({
      'name': new FormControl(name),
      'amount': new FormControl(amount)
  })
  }

  deleteItem() {
    if(this.change){
      this.ingredients.splice(this.ingredIndex, 1)
      this.myForm.reset()
    }
    this.change = false;
  }

  clearInput() {
    this.myForm.reset();
    this.change = false;
  }

  newIngredientFromRecipe() {
    // this.recipeService.newingredebi.subscribe(param => {
    //   console.log(param[1])
    //   let name = param[1].ingred_name
    //   let mount = param[1].ingred__number
    //   let saveNewIngred = {}
    //   saveNewIngred[name] = mount
    //   this.ingredients.push(saveNewIngred)
    //   console.log(this.ingredients)
    //   console.log(saveNewIngred)
    // })
    
    // this.raggaa = {'test': 4}
    // if(this.recipeService.selectIngredi) {
    //   this.ingredients.push(this.recipeService.selectIngredi)
    // }

    for(let item of this.recipeService.selectIngredi) {
      this.ingredients.push(item)
    }  
  }
  

}
