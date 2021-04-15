import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private apiUrl = "https://localhost:8080/api/users";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    console.log("UserService:getUsers");
    return this.http.get<User[]>(this.apiUrl);
    console.log("UserService:getUsers:end");

  }
}
