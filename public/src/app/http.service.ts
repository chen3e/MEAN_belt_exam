import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  allPets(){
    return this._http.get('/pets');
  }

  newPet(pet){
    console.log("Service is getting this as pet:", pet);
    return this._http.post('/pets', pet);
  }

  getPet(id){
    console.log("Service is getting this as id:", id);
    return this._http.get('/pets/'+id);
  }

  adoptPet(id){
    console.log("Service is getting this as id:", id);
    return this._http.delete('/pets/'+id);
  }

  editPet(pet){
    console.log("Service is getting this as the new information:", pet);
    return this._http.put('/pets', pet);
  }

  likePet(id){
    return this._http.get('/pets/like/'+id);
  }

}
