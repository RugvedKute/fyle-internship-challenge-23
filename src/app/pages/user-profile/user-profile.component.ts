import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Constants } from 'src/app/constants/constants';
import { ApiService } from 'src/app/services/api.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {

  readonly constant = Constants
  userName: any;
  userData: any;
  pageNo = 1;
  repoPerPage = 10;
  totalRepos!: number;
  reposList = [];
  loading!: boolean;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private dataService: DataServiceService, private toaster: NgToastService) {}

  ngOnInit(): void {
    this.userName = this.route.snapshot.paramMap.get('username');
    this.getReposData(this.userName, this.repoPerPage, this.pageNo);
    this.userData = this.dataService.getUserData();
    console.log('userData', this.userData);
    this.totalRepos = this.userData.public_repos;
  }

  getReposData(userName: string, perPage:number, page:number) {
    this.apiService.getRepos(userName, perPage, page).then((res: any) => {
      this.toaster.success({
        detail: 'Successful',
        summary: 'Fetched Data',
        duration: 3000
      })
      this.reposList = res['data'];

    }
    ).catch(error =>  this.toaster.error({
      detail: 'Error Occurred',
      summary: 'Please Try Again',
      duration: 3000
    }));

  }


getPage(pageNumber: any) {
  this.pageNo = pageNumber
  this.getReposData(this.userName, this.repoPerPage, this.pageNo)

}

setItemsPerPage(repos: any) {
  this.repoPerPage = repos;
  this.getReposData(this.userName, this.repoPerPage, this.pageNo);

}
  
}
