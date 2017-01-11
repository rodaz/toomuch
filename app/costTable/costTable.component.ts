import {Component, OnInit} from "@angular/core";
import {Cost} from "../model/cost";
import {CostService} from "../services/costService";

@Component({
  selector: 'cost-table',
  templateUrl: './app/costTable/costTable.component.html'
})
export class CostTable implements OnInit {

  costs: Cost[];

  constructor(private costService: CostService) { }

  ngOnInit() {
    this.loadData();
    this.costService.subject.subscribe(() => this.loadData());
  }

  loadData() {
    this.costService.getCosts()
      .subscribe(
        (data:any) => {
          let myArray: Cost[] = [];
          for (let key in data) {
            myArray.push(new Cost(data[key].cost_id, data[key].cost_name,data[key].fact_qty,data[key].fact_rate,
              data[key].fact_total, data[key].plan_qty,data[key].plan_rate,data[key].plan_total));
          }
          this.costs = myArray;
        }
      );
  }
}
