import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router"
import { AuthComponent } from './auth/auth.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { NewComponentComponent } from './recipe/new-component/new-component.component';
import { NonSelectedComponent } from './recipe/non-selected/non-selected.component';

const appRoutes: Routes = [
    {path: '', redirectTo: "auth", pathMatch: "full" },
    {
        path: 'auth', 
        component: AuthComponent
    },
    {   path: 'recipe', 
        component: RecipeComponent, 
        children: [
        {   
            path: '', component: NonSelectedComponent
        },
        {   
            path: 'new', component: NewComponentComponent
        },
    ]
 },
    {path: 'shopping-list', component: ShoppingListComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class RoutingModule {

}