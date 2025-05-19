import { FormsModule } from '@angular/forms';
// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { ContainerComponent } from './shared/container/container.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './shared/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultDisplayComponent } from './shared/result-display/result-display.component';

@NgModule({
  declarations: [AppComponent,HomeComponent, HeaderComponent, ContainerComponent, SearchComponent, ResultDisplayComponent],
  imports: [BrowserModule, AppRoutingModule, RouterOutlet, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
