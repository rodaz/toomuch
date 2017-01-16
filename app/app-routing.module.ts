import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login.component";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AppComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
