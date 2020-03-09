import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { NewComponentComponent } from './recipe/new-component/new-component.component';
import { NonSelectedComponent } from './recipe/non-selected/non-selected.component';
import { SelectRecipesComponent } from './recipe/select-recipes/select-recipes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeComponent,
    AuthComponent,
    RecipeListComponent,
    NewComponentComponent,
    NonSelectedComponent,
    SelectRecipesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    RoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
