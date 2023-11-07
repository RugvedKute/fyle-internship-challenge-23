import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { AppModule } from './app.module';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserNotFoundComponent } from './pages/user-not-found/user-not-found.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  {path: '', component: UserDetailsComponent},
  {path: 'profile/:username', component: UserProfileComponent, canActivate:[AuthGuard] },
  {path: 'user-not-found', component: UserNotFoundComponent, canActivate: [AuthGuard]}
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
