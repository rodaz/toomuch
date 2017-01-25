import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {costs} from "../data/db";
import {Http, Response} from "@angular/http";

@Injectable()
export class CostService {

  constructor(private http: Http){ }

  getCosts(month: number, year: number) {
    return  this.http.post('costs', {month: month, year: year})
      .map((response: Response) => response.json());
  }

  getMonthes() {
    return this.http.post('month', null)
      .map((response: Response) => response.json());
  }

  updLock(idl: number, lck: number) {
    return this.http.post('updLock', {id: idl, lock: lck})
      .map((response: Response) => response.json());
  }
}
