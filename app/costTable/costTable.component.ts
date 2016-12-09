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
    this.costService.getCosts().then(costs => this.costs = costs);
  }

}
