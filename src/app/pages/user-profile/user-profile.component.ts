import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userName: any;
  userData: any[] = []

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.userName = this.route.snapshot.paramMap.get('username');

    this.apiService
      .getUser(this.userName)
      .subscribe((data) => console.log(data));

    this.apiService.getRepos(this.userName).then((res: any) => {
      this.userData = res['data'];
    });


  }
}
