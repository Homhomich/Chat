import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPage } from './routed/chat/pages/main/main.page';
import { ProfilePage } from './routed/chat/pages/profile/profile.page';

@NgModule({
  declarations: [AppComponent, MainPage, ProfilePage],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
