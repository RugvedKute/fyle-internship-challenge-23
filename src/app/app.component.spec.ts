import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgToastModule } from 'ng-angular-popup';
import { RouterTestingModule } from "@angular/router/testing";
import { Constants } from './constants/constants';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [HttpClientTestingModule,
            NgxUiLoaderModule,
            NgToastModule,
            RouterTestingModule
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fyle-frontend-challenge'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fyle-frontend-challenge');
  });

  it('should have constants property set', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.fgSize).toEqual(Constants.GLOBAL_LOADER_FGSSIZE);
    expect(app.overLayColor).toEqual(Constants.GLOBAL_LOADER_OVERLAYCOLOR);
    expect(app.pbOpacity).toEqual(Constants.GLOBAL_LOADER_BGSOPACITY);
    expect(app.pbColor).toEqual(Constants.GLOBAL_LOADER_PBCOLOR);
  })


});
