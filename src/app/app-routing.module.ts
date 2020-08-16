import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPage} from './routed/chat/pages/main/main.page';
import {FriendsPage} from './routed/chat/pages/friends/friends.page';
import {ProfilePage} from './routed/chat/pages/profile/profile.page';
import {LoginPage} from './routed/auth/pages/login/login.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  },
  {
    path: 'friends',
    component: FriendsPage
  },
  {
    path: 'profile',
    component: ProfilePage
  },
  {
    path: 'auth/login',
    component: LoginPage
  },
  {
    path: 'auth',
    loadChildren: () => import('./routed/auth/auth.module').then((m) => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
