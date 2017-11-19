import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { FinancialsComponent } from './financials/financials.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { DcHostDirective } from './dynamic-component/dc-host.directive';
import {DynamicComponentService} from "./dynamic-component/dynamic-component.service";


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    FinancialsComponent,
    DynamicComponentComponent,
    DcHostDirective,
  ],
  providers: [
    DynamicComponentService
  ],
  entryComponents: [
    PersonComponent,
    FinancialsComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
