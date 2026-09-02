import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import baseUrl from "./helper";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ResetService {
constructor(private http: HttpClient) { }

public resetPassword(typedData:any): Observable<boolean>{
    return this.http.put<boolean>(`${baseUrl}/user/resetPassword`,typedData)
}
}
