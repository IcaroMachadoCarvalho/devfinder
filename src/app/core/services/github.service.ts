import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  // private apiGithubUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  // queryUser(githubUsername:string): Observable<any>{
  //   return this.httpClient.get<any>(`${this.apiGithubUrl}/${githubUsername}`);
  // }
}
