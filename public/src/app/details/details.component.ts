import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  pet = {};
  liked = false;

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      let observable = this._httpService.getPet(params['id']);
      observable.subscribe(data => {
        this.pet = data['data'][0];
        console.log(this.pet);
      });
    });
  }

  adopt(){
    let observable = this._httpService.adoptPet(this.pet['_id']);
    observable.subscribe();
    this._router.navigate(['/pets']);
  }

  like(){
    let observable = this._httpService.likePet(this.pet['_id']);
    observable.subscribe(data => {
      console.log(data);
      this.pet = data['data'];
      this.liked = true;
    });
  }

}
