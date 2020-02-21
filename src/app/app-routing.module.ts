import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router"
import { AuthComponent } from './auth/auth.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';

const appRoutes: Routes = [
    {path: '', redirectTo: "auth", pathMatch: "full" },
    {
        path: 'auth', 
        component: AuthComponent, 
        children: [
            {path: '', component: RecipeListComponent}
        ]
    },
    {path: 'recipe', component: RecipeComponent },
    {path: 'shopping-list', component: ShoppingListComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class RoutingModule {

}