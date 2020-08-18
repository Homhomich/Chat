import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainPage} from './routed/chat/pages/main/main.page';
import {FriendsPage} from './routed/chat/pages/friends/friends.page';
import {ProfilePage} from './routed/chat/pages/profile/profile.page';

@NgModule({
  declarations: [AppComponent, MainPage, FriendsPage, ProfilePage],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
