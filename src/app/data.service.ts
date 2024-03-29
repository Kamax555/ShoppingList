import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

   result:any;

  constructor(private _http: Http) { }

  getRecipe() {
    return this._http.get('/api/recipes')
     .map(result => this.result = result.json());
  }
}
