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
    this.months.push({label:'Март', value:'Март'});
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

    this.costService.getMonthes()
      .subscribe(
        (data:any[]) => {
          let tempArr: any[] = [{label:'Выберите месяц:', value: {id:0, lock:2}}];
          for (let i=0; i<data.length; i++){
            tempArr.push({label: data[i].m_name, value: {id:data[i].month_id, lock: data[i].lock}});
          }
          this.locks = tempArr;
        }
      );
  }

  searchCosts(){
    this.loadData(this.selectedMonthStart, this.selectedYearStart);
  }

  ngOnInit() { }

  loadData(month: string, year: number) {
    this.costService.getCosts(month, year)
      .subscribe(
        (data:any[]) => {
          let tempCosts: Cost[] = [];
          for (let costItem of data) {
            tempCosts.push(costItem as Cost);
          }
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
    this.lock_item.lock = 0;
  }

  calculateGroupTotal(rank: string) {
    let total = 0;

    if(this.costs) {
      for(let car of this.costs) {
        if(car.rank === rank) {
          total += car.diff;
        }
      }
    }
    return total;
  }
}
