import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  const baseURL = "https://my-json-server.typicode.com/waytologic/arpino";
  
  constructor(private _http:HttpClient) { }

  Createuser(user:any) {
    //return this._http.post('http://localhost:3000/users',user);
    return this._http.post(this.baseURL+'/users',user);
  }
  Getalluser() {
    //return this._http.get('http://localhost:3000/users')
    return this._http.get(this.baseURL+'/users')
  }
  Updateuser(user:any) {
    //return this._http.put("http://localhost:3000/users/" +user.id,user)
    return this._http.put(this.baseURL+"/users/" +user.id,user)  
  }
  Deleteuser(user:any) {
    //return this._http.delete("http://localhost:3000/users/" +user.id)
    return this._http.delete(this.baseURL+"/users/" +user.id)
  }

}
