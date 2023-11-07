import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgToastComponent, NgToastModule } from 'ng-angular-popup';
import {HttpClientModule} from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
    imports: [
      NgxUiLoaderModule,
      NgToastModule,
      HttpClientTestingModule
    ]
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
