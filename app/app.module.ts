import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {CostTable} from "./costTable/costTable.component";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {SharedModule} from "primeng/components/common/shared";
import {CalendarModule} from 'primeng/primeng';
import {CostFilter} from "./costFilter/costFilter.component";
import {DropdownModule} from 'primeng/primeng';
import { FormsModule }   from '@angular/forms';
import {ButtonModule} from 'primeng/primeng';
import {ToolbarModule} from 'primeng/primeng';
import {CostService} from "./services/costService";

@NgModule({
  imports:      [ ButtonModule, BrowserModule, DataTableModule, SharedModule,
    CalendarModule, DropdownModule, FormsModule, ToolbarModule ],
  declarations: [ AppComponent, CostTable, CostFilter ],
  providers:    [ CostService ],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
