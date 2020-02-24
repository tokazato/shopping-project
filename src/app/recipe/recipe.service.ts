import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class RecipeService {
    recipes = [
        {
            name: "pirveli kerdzi",
            description: 'description pirveli sauketeso kerdzi',
            img: 'https://pluspng.com/img-png/salad-hd-png-greek-salad-png-image-42826-salad-png-427.png',
            ingredients: [
                { 'vashli': 10 },
                { 'msxali': 20 }
            ]
        },
        {
            name: "meore kerdzi",
            description: 'description meore',
            img: 'https://img.freepik.com/free-photo/salad-tomatoes-cucumber-red-onions-lettuce-leaves_2829-1732.jpg?size=626&ext=jpg',
            ingredients: [
                { 'atami': 10 },
                { 'jolo': 20 }
            ]
        },
        {
            name: "meore kerdzi",
            description: 'description meore',
            img: 'https://pluspng.com/img-png/salad-hd-png-greek-salad-png-image-42826-salad-png-427.png',
            ingredients: [
                { 'atami': 10 },
                { 'jolo': 20 }
            ]
        }
    ];

    recipesi(index) {
        console.log(this.recipes[index]);
        return this.recipes[index];
    }

    addrecipe(recipe) {
        this.recipes.push(recipe)
    }

    getNewRecipe(name: string, description: string, img: string, ingredients: []) {
        this.recipes.push({
            name: name,
            description: description,
            img: img,
            ingredients: ingredients
        })
    }
}