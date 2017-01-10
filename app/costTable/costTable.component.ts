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

  // loadData() {
  //   this.costService.getCosts().then(costs => this.costs = costs);
  // }
  loadData() {
    this.costService.getCosts()
      .subscribe(
        (data:any) => {
          let myArray: Cost[] = [];
          for (let key in data) {
            myArray.push(new Cost(123,data[key][1],data[key][2],data[key][3],data[key][4],data[key][5],data[key][6]));
          }
          this.costs = myArray;
          console.log(myArray);
        }
      );
  }
}
