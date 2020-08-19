import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPage } from './routed/main/pages/main/main.page';
import { ProfilePage } from './routed/profile/pages/profile/profile.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  },
  {
    path: 'profile',
    component: ProfilePage
  },
  {
    path: 'auth',
    loadChildren: () => import('./routed/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./routed/profile/profile.module').then((m) => m.ProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
