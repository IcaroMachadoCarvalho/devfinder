import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiGithubUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

   queryUser(githubUsername:string): Observable<any>{
     const cleanUsername = githubUsername.replace(/^\/+/, ''); // remove barras iniciais
      return this.http.get(`https://api.github.com/users/${cleanUsername}`);
  }
}
