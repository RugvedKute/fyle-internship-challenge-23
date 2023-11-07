import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/services/api.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private dataService: DataServiceService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: ['', Validators.required],
    });
  }

  onSubmit() {
    const userName = this.form.get('userName')?.value;
    this.apiService.getUser(userName).subscribe(
      (response: any) =>
      {

        console.log(response.code, 'res code');
        this.dataService.storeUserData(response);
        this.toast.success({
          detail: 'The User Found Successfully',
          summary: 'Logged in Sucessfully',
          duration: 3000,
        });
        localStorage.setItem('userName', userName)
        this.router.navigate(['profile/', userName]);
      },
      (error: any) => {

        if (error.status === 404) {
          this.toast.error({
            detail: 'User Not Found',
            summary: 'Enter a valid Name',
            duration: 2000
          })
        } else {
          this.toast.error({
            detail: 'Error Occurred',
            summary: 'Please Try Again Later',
            duration: 3000,
          });
        }
        localStorage.setItem('userName', userName)
        this.router.navigate(['user-not-found']);
      }
    );
  }
}
