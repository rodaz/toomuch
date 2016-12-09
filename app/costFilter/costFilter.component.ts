import {Component} from "@angular/core";
import {SelectItem} from 'primeng/primeng';
import {CostService} from "../services/costService";

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

  constructor(private costService: CostService){
    this.months = [];
    this.months.push({label:'Январь', value:1});
    this.months.push({label: 'Февраль', value:2});
    this.months.push({label:'Март', value:3});
    this.months.push({label: 'Апрель', value:4});
    this.months.push({label:'Май', value:5});
    this.months.push({label: 'Июнь', value:6});
    this.months.push({label:'Июль', value:7});
    this.months.push({label: 'Август', value:8});
    this.months.push({label:'Сентябрь', value:9});
    this.months.push({label: 'Октябрь', value:10});
    this.months.push({label:'Ноябрь', value:11});
    this.months.push({label: 'Декабрь', value:12});
    this.years = [];
    this.years.push({label:'2016', value:2016});
    this.years.push({label: '2017', value:2017});
    this.years.push({label: '2018', value:2018});
    this.years.push({label: '2019', value:2019});
    this.years.push({label: '2020', value:2020});
  }

  searchCosts(){
    this.costService.subject.next();
  }
}
