import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'log-app',
  templateUrl: './app/login.component.html'
})
export class LoginComponent {

  constructor(private router: Router){}

  onLogin(log: string, pass: string) {
    if (log == 'root' && pass == 'root')
      this.router.navigate(['/admin']);
    else
      if (log == 'user' && pass == 'user')
        this.router.navigate(['/admin']);
      else
        this.router.navigate(['/admin']);
  }
}
