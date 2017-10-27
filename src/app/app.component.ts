import { Component } from '@angular/core';
//import the DataService 
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  tests: Array<any>; //define a test

  //create an instance of the DataService through dependency injection
  constructor(private _dataService: DataService) {
    // access the data service's getRecipes() method

    this._dataService.getRecipes()
        .subscribe(
          res => this.tests = res,
          error => console.log(error)
        );

  
  }

  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;

  }
}
