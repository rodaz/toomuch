import {Component, OnInit} from "@angular/core";
import {SelectItem} from 'primeng/primeng';
import {CostService} from "../services/costService";
import {Cost} from "../model/cost";

@Component({
  selector: 'cost',
  templateUrl: './app/cost/cost.component.html',
  styleUrls: ['./app/cost/cost.component.css']
})
export class CostComponent implements OnInit {
  months: SelectItem[];
  years: SelectItem[];
  costs: Cost[];
  locks: SelectItem[];

  selectedMonthStart: string = 'Выбрать';
  selectedYearStart: number = 0;
  // selectedMonthEnd: string = 'Январь';
  // selectedYearEnd: number = 2016;
  lock_item: any = {};

  constructor(private costService: CostService){

    this.months = [];
    this.months.push({label:'Месяц', value:''});
    this.months.push({label:'Январь', value:'Январь'});
    this.months.push({label: 'Февраль', value:'Февраль'});
    this.months.push({label:'Март', value:'c'});
    this.months.push({label: 'Апрель', value:'Апрель'});
    this.months.push({label:'Май', value:'Май'});
    this.months.push({label: 'Июнь', value:'Июнь'});
    this.months.push({label:'Июль', value:'Июль'});
    this.months.push({label: 'Август', value:'Август'});
    this.months.push({label:'Сентябрь', value:'Сентябрь'});
    this.months.push({label: 'Октябрь', value:'Октябрь'});
    this.months.push({label:'Ноябрь', value:'Ноябрь'});
    this.months.push({label: 'Декабрь', value:'Декабрь'});
    this.years = [];
    this.years.push({label:'Год', value:0});
    this.years.push({label: '2016', value:2016});
    this.years.push({label: '2017', value:2017});
    this.years.push({label: '2018', value:2018});
    this.years.push({label: '2019', value:2019});
    this.years.push({label: '2020', value:2020});

    this.locks = [];
    //this.locks.push({label: 'Декабрь 2015', value: 4});
    this.costService.getMonthes()
      .subscribe(
        (data:any[]) => {
          let tempArr: any[] = [{label:'Выберите месяц:', value: {id:0, lock:2}}];
          for (let i=0; i<data.length; i++){
            tempArr.push({label: data[i].m_name, value: {id:data[i].month_id, lock: data[i].lock}});
          }
          this.locks = tempArr;
          //this.lock_item = tempArr[0];
        }
      );
  }

  searchCosts(){
    this.loadData(this.selectedMonthStart, this.selectedYearStart);
  }

  ngOnInit() {
    //this.loadData('Январь', 2016);
    //this.costService.subject.subscribe((month) => this.loadData(month));
  }

  loadData(month: string, year: number) {
    this.costService.getCosts(month, year)
      .subscribe(
        (data:any[]) => {
          let myArray: Cost[] = [];
          let tempCosts: Cost[] = [];
          for (let costItem of data) {

            tempCosts.push(costItem as Cost);
          }

          //for (let k=0;k<data.length;k++) {
            //myArray.push(new Cost(data[key].cost_id, data[key].a_name,data[key].fact_qty,data[key].fact_rate,
              //data[key].fact_total, data[key].plan_qty,data[key].plan_rate,data[key].plan_total));
            //myArray.push(new Cost(0, data[k][1].a_name, data[k][2].plan_qty, data[k][3].plan_rate,
            //  data[k][4].plan_total, data[k][5].fact_qty, data[k][6].fact_rate, data[k][7].fact_total))
          //}
          // this.costs = myArray;
          console.log(tempCosts);
          this.costs = tempCosts;
        }
      );
  }

  lock() {
    this.costService.updLock(this.lock_item.id, 1)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    this.lock_item.lock = 1;
  }

  open() {
    //this.costService.updLock(this.lock_item.id, 0);
    this.lock_item.lock = 0;
  }
}
