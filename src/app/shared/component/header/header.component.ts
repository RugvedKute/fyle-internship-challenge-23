import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private toaster: NgToastService, private dataService: DataServiceService) {}

  logout () {
    this.toaster.error({
      detail: 'logout',
      summary: 'The logout is successfully done',
      duration: 3000

    })
    this.dataService.deleteUserData();
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
