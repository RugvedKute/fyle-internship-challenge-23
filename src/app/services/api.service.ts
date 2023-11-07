import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Octokit } from '@octokit/core';
import { Constants } from '../constants/constants';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private httpClient: HttpClient,
    private ngxloader: NgxUiLoaderService,
    private toaster: NgToastService
  ) {}

  readonly constant = Constants;
  apiUrl = this.constant.API_URL;
  token = this.constant.TOKEN;

  getUser(githubUsername: string): Observable<any> {
    return this.httpClient.get(this.apiUrl + `${githubUsername}`);
  }

  async getRepos(userName: string, perPage: number, page: number) {
    this.ngxloader.start();

    try {
      const octokit = new Octokit({
        auth: this.token,
      });

      const response = await octokit.request(`GET /users/${userName}/repos`, {
        username: userName,
        per_page: perPage,
        page: page,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      });
      this.ngxloader.stop();
      return response;
    } catch (error) {
      console.log(error);

      this.toaster.error({
        detail: 'Error Occurred',
        summary: String(error),
        duration: 2000,
      });

      return error;
    }
  }
}
