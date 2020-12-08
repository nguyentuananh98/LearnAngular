import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MyAppComponent} from './app.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MyAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [MyAppComponent]
})
export class AppModule { }
