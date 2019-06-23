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
import { ToolbarModule } from './toolbar/toolbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { PageNotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LayoutModule } from '@angular/cdk/layout';

import { WeirdstringPipe } from './pipe/weirdstring.pipe';
import { HeroModule } from './hero/hero.module';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    LandingComponent,
    PageNotfoundComponent,
    WeirdstringPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),

    HeroModule,
    InjectorTestModule,
    ToolbarModule,
    LayoutModule,


    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
