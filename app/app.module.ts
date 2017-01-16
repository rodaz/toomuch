import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import {DataTableModule} from "primeng/components/datatable/datatable";
import {SharedModule} from "primeng/components/common/shared";
import {CalendarModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import { FormsModule }   from '@angular/forms';
import {ButtonModule} from 'primeng/primeng';
import {ToolbarModule} from 'primeng/primeng';
import {CostService} from "./services/costService";
import {HttpModule} from "@angular/http";
import {CostComponent} from "./cost/cost.component";
import {MainComponent} from "./main.component";
import {AppRoutingModule} from "./app-routing.module";
import {LoginComponent} from "./login.component";

@NgModule({
  imports:      [ ButtonModule, BrowserModule, DataTableModule, SharedModule,
    CalendarModule, DropdownModule, FormsModule, ToolbarModule, HttpModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent, CostComponent, MainComponent, LoginComponent ],
  providers:    [ CostService ],
  bootstrap:    [ MainComponent ]
})
export class AppModule { }
