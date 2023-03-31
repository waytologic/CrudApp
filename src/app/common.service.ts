import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }

  Createuser(user:any) {
    return this._http.post('http://localhost:3000/users',user);
  }
  Getalluser() {
    return this._http.get('http://localhost:3000/users')
  }
  Updateuser(user:any) {
    return this._http.put("http://localhost:3000/users/" +user.id,user)
  }
  Deleteuser(user:any) {
    return this._http.delete("http://localhost:3000/users/" +user.id)
  }

}
