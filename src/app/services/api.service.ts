import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Octokit } from '@octokit/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  readonly environment = environment;
  apiUrl = environment.API_URL;
  token = environment.TOKEN;

  getUser(githubUsername: string): Observable<any> {
    return this.httpClient.get(this.apiUrl + `${githubUsername}`);
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params

  async getRepos(userName: string) {
    const octokit = new Octokit({
      auth: this.token,
    });



    const response = await octokit.request(`GET /users/${userName}/repos`, {
      username: userName,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });

    return response;
  }
}
