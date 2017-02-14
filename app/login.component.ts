import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {CostService} from "./services/costService";

@Component({
  selector: 'log-app',
  templateUrl: './app/login.component.html',
  styleUrls: ['./app/login.component.css']
})
export class LoginComponent {

  //Main user
  admin: string = 'Hogwarts';
  //Admin panel
  crud: string = 'Selvin';

  constructor(private router: Router, private costService: CostService){}

  onLogin(log: string, pass: string) {
    this.costService.log_in(log, pass)
      .subscribe(
        (data:any) => {
          if(!data[0])
            this.router.navigate(['/login']);
          if (data[0].g_name == this.admin)
            this.router.navigate(['/admin']);
          else
            if (data[0].g_name == this.crud)
              this.router.navigate(['/crud']);
            else
              this.router.navigate(['/user'], {queryParams:{name: data[0].g_name, id: data[0].gild_id}});
        }
      );
  }
}
