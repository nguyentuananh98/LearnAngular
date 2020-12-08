import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {HelloComponent} from './hello.component';
import {ToggleComponent} from './toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    HelloComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent, ProgressBarComponent, HelloComponent, ToggleComponent]
})
export class AppModule { }
