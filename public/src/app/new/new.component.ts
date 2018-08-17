import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  pet = { name: "", type: "", description: "", skills: [] };
  skill1="";
  skill2="";
  skill3="";
  errors: any;

  ngOnInit() {
    console.log("In new!")
  }

  newPet(){
    if (this.skill1){
      this.pet['skills'].push(this.skill1);
    }
    if (this.skill2){
      this.pet['skills'].push(this.skill2);
    }
    if (this.skill3){
      this.pet['skills'].push(this.skill3);
    }
    let observable = this._httpService.newPet(this.pet);
    observable.subscribe(data => {
      if (data['error']){
        if (data['error']['name'] == "MongoError"){
          this.errors = { duplicate: "This name is already taken!" }
        }
        else{
          this.errors = data['error']['errors']
        }
      }
      else{
        this._router.navigate(['/pets']);
      }
    });
  }

}
