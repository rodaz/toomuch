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
var core_1 = require("@angular/core");
var cost_1 = require("../model/cost");
var costService_1 = require("../services/costService");
var CostTable = (function () {
    function CostTable(costService) {
        this.costService = costService;
    }
    CostTable.prototype.ngOnInit = function () {
        var _this = this;
        this.loadData();
        this.costService.subject.subscribe(function () { return _this.loadData(); });
    };
    // loadData() {
    //   this.costService.getCosts().then(costs => this.costs = costs);
    // }
    CostTable.prototype.loadData = function () {
        var _this = this;
        this.costService.getCosts()
            .subscribe(function (data) {
            var myArray = [];
            for (var key in data) {
                myArray.push(new cost_1.Cost(data[key][0], data[key][1], data[key][2], data[key][3], data[key][4], data[key][5], data[key][6]));
            }
            _this.costs = myArray;
            console.log(myArray);
        });
    };
    CostTable = __decorate([
        core_1.Component({
            selector: 'cost-table',
            templateUrl: './app/costTable/costTable.component.html'
        }), 
        __metadata('design:paramtypes', [costService_1.CostService])
    ], CostTable);
    return CostTable;
}());
exports.CostTable = CostTable;
//# sourceMappingURL=costTable.component.js.map