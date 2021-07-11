import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000";
  readonly PhotoUrl = "http://127.0.0.1:8000/media/";

  constructor(private http:HttpClient) { }

  getOneList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/one/');
  }

  addOne(val:any){
    return this.http.post(this.APIUrl + '/one/',val);
  }

  updateOne(val:any){
    return this.http.put(this.APIUrl + '/one/',val);
  }

  deleteOne(val:any){
    return this.http.delete(this.APIUrl + '/one/'+val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/SaveFile',val);
  }

  getAllOneNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/one/');
  }

  getPresList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/presentation/');
  }

  getServicesList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/services/');
  }

  getOperatorList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/operateurs/');
  }


}
