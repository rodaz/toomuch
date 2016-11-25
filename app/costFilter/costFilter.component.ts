import {Component} from "@angular/core";
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'cost-filter',
  templateUrl: './app/costFilter/costFilter.component.html'
})
export class CostFilter {
  months: SelectItem[];
  years: SelectItem[];

  selectedMonthStart: string;
  selectedYearStart: string;
  selectedMonthEnd: string;
  selectedYearEnd: string;

  constructor(){
    this.months = [{label:'July'}, {label: 'June'}];
    this.years = [{label:'2017'}, {label: '2018'}];
  }
}
