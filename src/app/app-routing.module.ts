import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { AppModule } from './app.module';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserNotFoundComponent } from './pages/user-not-found/user-not-found.component';


const routes: Routes = [
  {path: '', component: UserDetailsComponent},
  {path: 'profile/:username', component: UserProfileComponent},
  {path: 'user-not-found', component: UserNotFoundComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { 

}
