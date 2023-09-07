import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://my-json-server.typicode.com/waytologic/arpino';

@Injectable({
  providedIn: 'root'
})
export class CommonService { 
  
  constructor(private _http:HttpClient) { }

  Createuser(user:any) {
    //return this._http.post('http://localhost:3000/users',user);
    return this._http.post(baseUrl+'/users',user);
  }
  Getalluser() {
    //return this._http.get('http://localhost:3000/users')
    return this._http.get(baseUrl+'/users')
  }
  Updateuser(user:any) {
    //return this._http.put("http://localhost:3000/users/" +user.id,user)
    return this._http.put(baseUrl+"/users/" +user.id,user)  
  }
  Deleteuser(user:any) {
    //return this._http.delete("http://localhost:3000/users/" +user.id)
    return this._http.delete(baseUrl+"/users/" +user.id)
  }

}
