import {Component, OnInit} from "@angular/core";
import {SelectItem} from 'primeng/primeng';
import {CostService} from "../services/costService";
import {Cost} from "../model/cost";

@Component({
  selector: 'user',
  templateUrl: './app/user/user.component.html',
  styleUrls: ['./app/user/user.component.css']
})
export class UserComponent implements OnInit {
  months: SelectItem[];
  years: SelectItem[];
  costs: Cost[];

  selectedMonthStart: number = 1;
  selectedYearStart: number = 2016;

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
    this.loadData(this.selectedMonthStart, this.selectedYearStart);
  }

  ngOnInit() {
    this.loadData(1, 2016);
    //this.costService.subject.subscribe((month) => this.loadData(month));
  }

  loadData(month: number, year: number) {
    this.costService.getCosts(month, year)
      .subscribe(
        (data:any[]) => {
          let myArray: Cost[] = [];
          for (let k=0;k<data.length;k++) {
            //myArray.push(new Cost(data[key].cost_id, data[key].a_name,data[key].fact_qty,data[key].fact_rate,
            //data[key].fact_total, data[key].plan_qty,data[key].plan_rate,data[key].plan_total));
            myArray.push(new Cost(data[k][0].cost_id, data[k][1].a_name, data[k][2].plan_qty, data[k][3].plan_rate,
              data[k][4].plan_total, data[k][5].fact_qty, data[k][6].fact_rate, data[k][7].fact_total))
          }
          this.costs = myArray;
        }
      );
  }
}
