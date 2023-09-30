import { Component,OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[]=[new Recipe('A test','A brave test recipe','https://images.pexels.com/photos/18515070/pexels-photo-18515070/free-photo-of-coffeeshop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]

constructor(){}

getName(){return this.recipes[0].name}
getDescription(){return this.recipes[0].description}
getUrl(){return this.recipes[0].imagePath}

ngOnInit(){}
}
