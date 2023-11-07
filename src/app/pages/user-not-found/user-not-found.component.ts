import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-not-found',
  templateUrl: './user-not-found.component.html',
  styleUrls: ['./user-not-found.component.scss'],
})
export class UserNotFoundComponent implements OnInit {
  userName: any;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName')
      
  }

  backToHome() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
