import{b as u}from"./chunk-2B6N5SLQ.js";import{a as m}from"./chunk-475QT6HF.js";import{b as f}from"./chunk-D65I6S5B.js";import{V as a,a as p,b as o,i as d,ka as n,r as h,ua as r}from"./chunk-6KTIJOB7.js";var g=(()=>{let t=class t{constructor(e){this.shoppingListService=e,this.recipes=[],this.recipesChanged=new d}setRecipes(e){e?(this.recipes=e,this.recipesChanged.next(this.recipes.slice())):(this.recipes=[],this.recipesChanged.next([]))}getRecipes(){return this.recipes.slice()}getRecipesById(e){return this.recipes[e]}addIngredientsToShoppingList(e){this.shoppingListService.addIngredients(e)}addRecipe(e){this.recipes.push(e),this.recipesChanged.next(this.recipes.slice())}updateRecipe(e,i){this.recipes[e]=i,this.recipesChanged.next(this.recipes.slice())}deleteRecipe(e){this.recipes.splice(e,1),this.recipesChanged.next(this.recipes.slice())}};t.\u0275fac=function(i){return new(i||t)(r(u))},t.\u0275prov=n({token:t,factory:t.\u0275fac});let s=t;return s})();var x=(()=>{let t=class t{constructor(e,i,c){this.http=e,this.recipeService=i,this.authService=c}storeRecipes(){let e=this.recipeService.getRecipes();return this.http.put("https://ng-recipe-book-5ed02-default-rtdb.firebaseio.com/recipes.json",e).pipe(h(i=>{if(i)return i.map(c=>o(p({},c),{ingredients:c.ingredients?c.ingredients:[]}))}),a(i=>{this.recipeService.setRecipes(i)}))}fetchRecipes(){return this.http.get("https://ng-recipe-book-5ed02-default-rtdb.firebaseio.com/recipes.json").pipe(h(e=>{if(e)return e.map(i=>o(p({},i),{ingredients:i.ingredients?i.ingredients:[]}))}),a(e=>{e&&this.recipeService.setRecipes(e)}))}};t.\u0275fac=function(i){return new(i||t)(r(f),r(g),r(m))},t.\u0275prov=n({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})();export{g as a,x as b};
