"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var primeng_1 = require("primeng/primeng");
var primeng_2 = require("primeng/primeng");
var primeng_3 = require("primeng/primeng");
var primeng_4 = require("primeng/primeng");
var primeng_5 = require("primeng/primeng");
var primeng_6 = require("primeng/primeng");
var costService_1 = require("./services/costService");
var cost_component_1 = require("./cost/cost.component");
var main_component_1 = require("./main.component");
var app_routing_module_1 = require("./app-routing.module");
var login_component_1 = require("./login.component");
var primeng_7 = require("primeng/primeng");
var user_component_1 = require("./user/user.component");
var selvin_component_1 = require("./admin/selvin.component");
var primeng_8 = require("primeng/primeng");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [primeng_5.ButtonModule, platform_browser_1.BrowserModule, primeng_1.DataTableModule, primeng_2.SharedModule,
            primeng_3.CalendarModule, primeng_4.DropdownModule, forms_1.FormsModule, primeng_6.ToolbarModule, http_1.HttpModule,
            app_routing_module_1.AppRoutingModule, primeng_7.InputTextModule, primeng_8.DialogModule
        ],
        declarations: [app_component_1.AppComponent, cost_component_1.CostComponent, main_component_1.MainComponent, login_component_1.LoginComponent, user_component_1.UserComponent, selvin_component_1.SelvinComponent],
        providers: [costService_1.CostService],
        bootstrap: [main_component_1.MainComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map