import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Http, Response} from "@angular/http";

@Injectable()
export class CostService {

  constructor(private http: Http){ }

  getCosts(month: string, year: number) {
    return  this.http.post('costs', {month: month, year: year})
      .map((response: Response) => response.json());
  }

  getUserData(month:string, year: number, user: number) {
    return this.http.post('userData', {month: month, year: year, user:user})
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

  log_in(log: string, pass: string) {
    return this.http.post('log', {log: log, pass: pass})
      .map((response: Response) => response.json());
  }

  updCosts(id: number, field: string, value: string) {
    return this.http.post('update', {id: id, field: field, value: value})
      .map((response: Response) => response.json());
  }

  getArts() {
    return this.http.post('arts', null)
      .map((response: Response) => response.json());
  }

  updArt(art: any) {
    return this.http.post('art_upd', {art:art})
      .map((response: Response) => response.json());
  }

  delArt(art: any) {
    return this.http.post('art_del', {art:art})
      .map((response: Response) => response.json());
  }

  addArt(art: any) {
    return this.http.post('art_add', {art:art})
      .map((response: Response) => response.json());
  }
}
