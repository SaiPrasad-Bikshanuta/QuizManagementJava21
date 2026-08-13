import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import baseUrl from "./helper";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ForgotService {
  constructor(private http: HttpClient) { }
  public getUserIfExists(enteredData:any):Observable<object> {
    return this.http.post(`${baseUrl}/user/getUserWith`,enteredData)
  }
}
