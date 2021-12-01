import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from './spring-boot-body/User';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {


  private _url="http://localhost:8080";

  constructor(private http:HttpClient) { }

  //get All User
  getAllUser():Observable<User[]>{
    return this.http.get<User[]>(this._url+"/user");
  }

  // get Single User
  getSingleUser(id:number){
    return this.http.get(this._url+"/user/"+id);
  }

  // insert User
  insertUser(user:User){
    return this.http.post(this._url+"/user",user);
  }

  // update User
  updateUser(user:User,id:number){
    return this.http.put(this._url+"/user/"+id,user);
  }

  // delete Specific User -- Soft
  deleteUserbyIDSoft(id:number){
    return this.http.delete(this._url+"/user/"+id+"/soft");
  } 

  //  // delete Specific User -- Hard
  deleteUserbyIDHard(id:number){
    return this.http.delete(this._url+"/user/"+id+"/hard");
  } 
}
