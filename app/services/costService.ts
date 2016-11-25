import {Injectable} from "@angular/core";
import {Cost} from "../model/cost";
import {costs} from "../data/db";

@Injectable()
export class CostService {
  getCosts(): Promise<Cost[]> {
    return  new Promise(
      resolve => setTimeout(
        () => resolve(costs), 1000
      )
    );
  }
}
