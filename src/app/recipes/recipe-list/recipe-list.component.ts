import { Component,OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[]=[new Recipe('A test','A brave test recipe','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.lfxXrK4M6k8IAblvoCWGEwHaE8%26pid%3DApi&f=1&ipt=3c187084746d649ac9e35b678e5f43b0cbd91fa2fbccf9ff59fe5a735d3a5856&ipo=images')]

constructor(){}


ngOnInit(){}
}
