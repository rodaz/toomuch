import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {costs} from "../data/db";
import {Subject} from "rxjs/Subject";
import {Http, Response} from "@angular/http";

@Injectable()
export class CostService {

  subject: Subject<String>;

  constructor(private http: Http){
    this.subject = new Subject<String>();
  };

  getCosts() {
    return  this.http.get('costs')
      .map((response: Response) => response.json());
  }
}
