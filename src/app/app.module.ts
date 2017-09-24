import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DefaultColorOnEventDirective} from './app.directives'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultColorOnEventDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
