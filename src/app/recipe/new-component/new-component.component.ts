import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent implements OnInit {
  formRecipe: FormGroup;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.initForm()
  }

  addIngredent() {
    (<FormArray>this.formRecipe.get('ingredi')).push(
      new FormGroup({
        'ingred_name': new FormControl(null, Validators.required),
        'ingred__number': new FormControl(null, Validators.required)
      })
    )
    
  }

  deleteIngredient(index) {
  }

  // onSubmit(form: FormGroup) {
  //   let name = form.value.name;
  //   let imgUrl = form.value.imgUrl;
  //   let description = form.value.description;
  // }

  initForm() {
    let newRecipeName = '';
    let newRecipeImg = '';
    let newRecipeDesc = '';
    let newRecipeIngredient = new FormArray([]);

    this.formRecipe = new FormGroup({
      'name': new FormControl(newRecipeName, Validators.required),
      'img': new FormControl(newRecipeImg, Validators.required),
      'desc': new FormControl(newRecipeDesc, Validators.required),
      'ingredi': newRecipeIngredient
    })

    
  }

}
