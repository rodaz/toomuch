import {Component, OnInit} from "@angular/core";
import {Cost} from "../model/cost";
import {CostService} from "../services/costService";

@Component({
  selector: 'cost-table',
  templateUrl: './app/costTable/costTable.component.html',
  providers: [CostService]
})
export class CostTable implements OnInit {

  costs: Cost[];

  cols: any[];

  constructor(private costService: CostService) { }

  ngOnInit() {
    this.costService.getCosts().then(costs => this.costs = costs);

    this.cols = [
      {field: 'plan', header: 'Plan'},
      {field: 'fact', header: 'Fact'}
    ];
  }
}
