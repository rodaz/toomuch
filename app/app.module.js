"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var costTable_component_1 = require("./costTable/costTable.component");
var datatable_1 = require("primeng/components/datatable/datatable");
var shared_1 = require("primeng/components/common/shared");
var primeng_1 = require('primeng/primeng');
var costFilter_component_1 = require("./costFilter/costFilter.component");
var primeng_2 = require('primeng/primeng');
var forms_1 = require('@angular/forms');
var primeng_3 = require('primeng/primeng');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [primeng_3.ButtonModule, platform_browser_1.BrowserModule, datatable_1.DataTableModule, shared_1.SharedModule, primeng_1.CalendarModule, primeng_2.DropdownModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, costTable_component_1.CostTable, costFilter_component_1.CostFilter],
            bootstrap: [app_component_1.AppComponent, costTable_component_1.CostTable, costFilter_component_1.CostFilter]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map