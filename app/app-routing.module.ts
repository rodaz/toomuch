import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login.component";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {UserComponent} from "./user/user.component";
import {CostComponent} from "./cost/cost.component";
import {SelvinComponent} from "./admin/selvin.component";

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: CostComponent},
  { path: 'user', component: UserComponent},
  { path: 'crud', component: SelvinComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
