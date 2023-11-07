import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { UserProfileComponent } from './user-profile.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeaderComponent } from 'src/app/shared/component/header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfileComponent,
        HeaderComponent
      ],
      imports : [
        RouterTestingModule,
        HttpClientTestingModule,
        NgxPaginationModule
      ]
    });
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
