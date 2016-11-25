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

@NgModule({
  imports:      [ ButtonModule, BrowserModule, DataTableModule,SharedModule, CalendarModule, DropdownModule, FormsModule ],
  declarations: [ AppComponent, CostTable, CostFilter ],
  bootstrap:    [ AppComponent, CostTable, CostFilter ]
})
export class AppModule { }
