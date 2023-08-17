import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AlertComponent } from './alert';
import { fakeBackendProvider } from './helpers'
import { ErrorInterceptor } from './helpers'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AlertComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        
    // provider used to create fake backend
    fakeBackendProvider
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
