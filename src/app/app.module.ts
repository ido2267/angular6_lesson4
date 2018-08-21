import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { CompCComponent } from './comp-c/comp-c.component';
import { CompDComponent } from './comp-d/comp-d.component';

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    CompBComponent,
    CompCComponent,
    CompDComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
