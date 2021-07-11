import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

const AUTH_API = 'http://localhost:8000/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api_url: string = 'http://localhost:8000/';
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {

    return this.http.post<any>(this.api_url+'accounts/api/auth/',
     {username, password }, httpOptions).pipe(
      map(user => {
        if(user && user.token){
          localStorage.setItem("currentUser",JSON.stringify(user));
        }       
        return user;
      })
    );
  }

  logout(){
    localStorage.removeItem('currentUser'); 
  }

  /*register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }*/
}