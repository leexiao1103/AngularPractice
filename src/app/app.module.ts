import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MessagesComponent } from './messages/messages.component';

import { InMemoryDataService } from './in-memory-data.service';

import { InjectorTestModule } from './injector-test/injector-test.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { PageNotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LayoutModule } from '@angular/cdk/layout';

import { WeirdstringPipe } from './pipe/weirdstring.pipe';
import { HeroModule } from './hero/hero.module';
import { ShareMaterialModule } from './module/share-material.module';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    LandingComponent,
    PageNotfoundComponent,
    WeirdstringPipe,
    AdminComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),

    ShareMaterialModule,


    HeroModule,
    InjectorTestModule,
    LayoutModule,


    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
