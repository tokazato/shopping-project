import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Ingredient } from "./ingredient.model"
import { format } from 'url';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  myForm: FormGroup;
  change = false;
  ingredIndex = null;
  ingredients: any = [
    { 'banani': 10 },
    { 'vashli': 16 },
  ]
  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'amount': new FormControl(null, [Validators.required])
    })
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
  }

  clearInput() {
    this.myForm.reset();
  }

}
