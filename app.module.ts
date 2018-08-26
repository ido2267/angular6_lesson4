import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { CompCComponent } from './comp-c/comp-c.component';
import { CompDComponent } from './comp-d/comp-d.component';
import { HttpRestComponent } from './http-rest/http-rest.component';
import { TestPipePipe } from './test-pipe.pipe';
import { UseServiceComponent } from './use-service/use-service.component';
import { UseServiceBComponent } from './use-service-b/use-service-b.component';
import { TodoPipePipe } from './todo-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    CompBComponent,
    CompCComponent,
    CompDComponent,
    HttpRestComponent,
    TestPipePipe,
    UseServiceComponent,
    UseServiceBComponent,
    TodoPipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
