import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PageModule } from './page/page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    /** NG2 modules */
    BrowserModule,
    FormsModule,
    HttpModule,
    /** App modules */
    PageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
