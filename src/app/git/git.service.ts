import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const urlEndpoint = "https://api.github.com/search/users?q=";

@Injectable()
export class GitService {
  constructor(private http: HttpClient) {}

  getUsers(user: any): Observable<any> {
    const userName = user.name;
    const userSort = user.sort;
    let url = `${urlEndpoint}${userName}&sort=${userSort}`;
    return this.http.get(url);
  }

  getDetails = url => this.http.get(url);
}
