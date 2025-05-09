// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, RouterOutlet ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
