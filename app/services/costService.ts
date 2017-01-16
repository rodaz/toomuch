import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {costs} from "../data/db";
import {Http, Response} from "@angular/http";

@Injectable()
export class CostService {

  constructor(private http: Http){ }

  getCosts() {
    return  this.http.get('costs')
      .map((response: Response) => response.json());
  }
}
