import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainPage} from './routed/main/pages/main/main.page';
import {ProfilePage} from './routed/profile/pages/profile/profile.page';
import {MainModule} from './routed/main/main.module';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, MainPage, ProfilePage],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

