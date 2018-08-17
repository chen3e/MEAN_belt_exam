import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  pet = {};
  errors: any;

  ngOnInit() {

    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      let observable = this._httpService.getPet(params['id']);
      observable.subscribe(data => {
        this.pet = data['data'][0];
      });
    });
  }

  editPet(){
    let observable = this._httpService.editPet(this.pet);
    observable.subscribe(data => {
      console.log(data);
      if (data['error']){
        if (data['error']['name'] == "MongoError"){
          this.errors = { duplicate: "This name is already taken!" }
        }
        else{
          this.errors = data['error']['errors']
        }
      }
      else{
        this._router.navigate(['/pets/'+this.pet['_id']]);
      }
    });
  }
}
