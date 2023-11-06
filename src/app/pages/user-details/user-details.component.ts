import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: ['', Validators.required],
    })
      
  }



  onSubmit() {
    const userName = this.form.get('userName')?.value;
    this.apiService.getUser(userName).subscribe(response => {
        this.router.navigate(['profile/', userName])
      }, error => 
      this.router.navigate(['user-not-found/'])
    );
       }

}
