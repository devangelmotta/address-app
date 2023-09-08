import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressesModule } from './addresses/addresses.module';
import { UserModule } from './user/user.module';
import { HomepageComponent } from './homepage/homepage.component';
import { NoFoundPageComponent } from './no-found-page/no-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NoFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddressesModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
