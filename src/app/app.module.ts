import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyyappComponent } from './myyapp/myyapp.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from "./service.service";
import { PractiseserviceComponent } from './practiseservice/practiseservice.component';

@NgModule({
  declarations: [
    AppComponent,
    MyyappComponent,
    PractiseserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
