import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { CardComponent } from './shared/component/card/card.component';
import { AppRoutingModule } from './app-routing.module';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserNotFoundComponent } from './pages/user-not-found/user-not-found.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { HeaderComponent } from './shared/component/header/header.component';
import { SearchBarComponent } from './shared/component/search-bar/search-bar.component';
import { ChipComponent } from './shared/component/chip/chip.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgToastModule } from 'ng-angular-popup';
import { AuthGuard } from './auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    UserDetailsComponent,
    UserProfileComponent,
    UserNotFoundComponent,
    HeaderComponent,
    SearchBarComponent,
    ChipComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    NgxPaginationModule,
    NgToastModule,
    NgxUiLoaderModule
  

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
