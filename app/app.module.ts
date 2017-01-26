import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from "@angular/http";

import { AppComponent }  from './app.component';
import {DataTableModule} from "primeng/components/datatable/datatable";
import {SharedModule} from "primeng/components/common/shared";
import {CalendarModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {ToolbarModule} from 'primeng/primeng';
import {CostService} from "./services/costService";
import {CostComponent} from "./cost/cost.component";
import {MainComponent} from "./main.component";
import {AppRoutingModule} from "./app-routing.module";
import {LoginComponent} from "./login.component";
import {InputTextModule} from "primeng/primeng";
import {UserComponent} from "./user/user.component";

@NgModule({
  imports:      [ ButtonModule, BrowserModule, DataTableModule, SharedModule,
    CalendarModule, DropdownModule, FormsModule, ToolbarModule, HttpModule,
    AppRoutingModule, InputTextModule
  ],
  declarations: [ AppComponent, CostComponent, MainComponent, LoginComponent, UserComponent ],
  providers:    [ CostService ],
  bootstrap:    [ MainComponent ]
})
export class AppModule { }
