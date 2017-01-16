import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'log-app',
  templateUrl: './app/login.component.html'
})
export class LoginComponent {

  constructor(private router: Router){}

  onLogin() {
    this.router.navigate(['/admin']);
  }
}
