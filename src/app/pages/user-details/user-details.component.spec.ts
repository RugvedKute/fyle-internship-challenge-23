import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from 'src/app/services/api.service';
import { RouterTestingModule } from "@angular/router/testing";
import { UserDetailsComponent } from './user-details.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    });
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
