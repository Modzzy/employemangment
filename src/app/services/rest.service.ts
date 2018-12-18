import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  private baseUrl = 'http://localhost:59809/';
  constructor(private http: HttpClient) { }

  protected post(url, data , headers?): Observable<any>
  {
    console.log(headers);
    return this.http.post(this.setUrl(url), data, {headers: headers});
  }

  protected get(url): Observable<any>
  {
    return this.http.get(this.setUrl(url));
  }


  private setUrl(url)
  {
     return this.baseUrl + url;
  }
}
