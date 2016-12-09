import {Injectable} from "@angular/core";
import {Cost} from "../model/cost";
import {costs} from "../data/db";
import {Subject} from "rxjs/Subject";

@Injectable()
export class CostService {

  subject: Subject<String>;

  constructor(){
    this.subject = new Subject<String>();
  };

  getCosts(): Promise<Cost[]> {
    return  new Promise(
      resolve => setTimeout(
        () => resolve(costs), 1000
      )
    );
  }
}
