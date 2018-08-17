import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  pets = [];
  array = [];

/*   ngOnInit() {
    console.log("In home!");
    let observable = this._httpService.allPets();
    observable.subscribe(data => {
      this.pets = data['data'];
      console.log(this.pets);
    });
  } */

  ngOnInit() {
    console.log("In home!");
    let observable = this._httpService.allPets();
    observable.subscribe(data => {
      console.log(data);
      this.pets = data['data'];
      console.log("Unalphabetized pets:", this.pets)
      
      for (var j = 0; j < this.pets.length; j++){
        var first = this.pets[j];
        for (var i = j; i < this.pets.length; i++){
          if (this.pets[i]['type'] < first['type']){
            var temp = first;
            first = this.pets[i];
            this.pets[i] = temp;
          }
        }
        this.array.push(first);
      }
      console.log("This is array:", this.array);
      this.pets = this.array;
      console.log("Alphabetized pets:", this.pets);
    });
    this._router.navigate(['/pets']);
  }

}
