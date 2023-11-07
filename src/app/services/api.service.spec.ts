import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; // Import HttpTestingController
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgToastModule } from 'ng-angular-popup';
import { HttpClientModule } from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxUiLoaderModule,
        NgToastModule,
        HttpClientModule,
        HttpClientTestingModule,
      ],
    });
    
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

