import {Injectable} from "@angular/core";
import {Cost} from "../model/cost";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import {costs} from "../data/db";
import {Subject} from "rxjs/Subject";
import {Http, Response} from "@angular/http";

@Injectable()
export class CostService {

  subject: Subject<String>;

  constructor(private http: Http){
    this.subject = new Subject<String>();
  };

  // getCosts(): Promise<Cost[]> {
  //   return  new Promise(
  //     resolve => setTimeout(
  //       () => resolve(costs), 1000
  //     )
  //   );
  // }
  getCosts() {
    return  this.http.get('costs')
      .map((response: Response) => console.log(response.json()));
  }
}
