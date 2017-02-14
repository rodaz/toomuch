import {Component, OnInit} from "@angular/core";
import {SelectItem} from 'primeng/primeng';
import {CostService} from "../services/costService";
import {Cost} from "../model/cost";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'user',
  templateUrl: './app/user/user.component.html',
  styleUrls: ['./app/user/user.component.css']
})
export class UserComponent implements OnInit {
  months: SelectItem[];
  years: SelectItem[];
  costs: Cost[];
  locks: any[] = [];
  openEditing: boolean = false;

  user:any;

  selectedMonth: string = 'Выбрать';
  selectedYear: number = 0;

  constructor(private costService: CostService, private route: ActivatedRoute){

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

    this.user = this.route.queryParams;

    this.costService.getMonthes()
      .subscribe(
        (data:any[]) => {
          let tempArr: any[] = [];
          for (let i=0; i<data.length; i++){
            tempArr.push({name: data[i].m_name, id:data[i].month_id, lock: data[i].lock});
          }
          this.locks = tempArr;
        }
      );
  }

  searchCosts(){
    this.loadData(this.selectedMonth, this.selectedYear);
  }

  ngOnInit() { }

  loadData(month: string, year: number) {
    for(let y=0; y < this.locks.length; y++) {
      if (month + ' ' + year == this.locks[y].name)
        if (this.locks[y].lock == 0)
         this.openEditing = true;
    }

    this.costService.getUserData(month, year, this.user.value.id)
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

  editTable(event: any) {
    event.data.planTotal = event.data.planQty as number * event.data.planRate as number;
    event.data.factRate = event.data.factQty as number * event.data.planRate as number;
    event.data.factTotal = event.data.planTotal as number - event.data.factRate as number;

    this.costService.updCosts(event.data.costId, event.column.field, event.data[event.column.field])
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
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
