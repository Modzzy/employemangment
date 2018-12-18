import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends RestService {

  constructor(http: HttpClient) {
    super(http)
   }

   authenticate(userName,password)
   {
     const headers  = {
       'content-type' : 'application/x-www-form-urlencoded'
     };
     const data = `userName=${userName}&password=${password}&grant_type=password`
     return this.post('token', data, headers);
   }
}
