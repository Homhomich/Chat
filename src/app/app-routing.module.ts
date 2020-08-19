import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPage } from './routed/main/pages/main/main.page';
import { ProfilePage } from './routed/profile/pages/profile/profile.page';
import { LoginComponent } from './routed/auth/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./routed/main/main.module').then((m) => m.MainModule)
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
