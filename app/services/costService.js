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
require("rxjs/Rx");
var http_1 = require("@angular/http");
var CostService = (function () {
    function CostService(http) {
        this.http = http;
    }
    CostService.prototype.getCosts = function (month, year) {
        return this.http.post('costs', { month: month, year: year })
            .map(function (response) { return response.json(); });
    };
    CostService.prototype.getUserData = function (month, year, user) {
        return this.http.post('userData', { month: month, year: year, user: user })
            .map(function (response) { return response.json(); });
    };
    CostService.prototype.getMonthes = function () {
        return this.http.post('month', null)
            .map(function (response) { return response.json(); });
    };
    CostService.prototype.updLock = function (idl, lck) {
        return this.http.post('updLock', { id: idl, lock: lck })
            .map(function (response) { return response.json(); });
    };
    CostService.prototype.log_in = function (log, pass) {
        return this.http.post('log', { log: log, pass: pass })
            .map(function (response) { return response.json(); });
    };
    CostService.prototype.updCosts = function (id, field, value) {
        return this.http.post('update', { id: id, field: field, value: value })
            .map(function (response) { return response.json(); });
    };
    CostService.prototype.getArts = function () {
        return this.http.post('arts', null)
            .map(function (response) { return response.json(); });
    };
    CostService.prototype.updArt = function (art) {
        return this.http.post('art_upd', { art: art })
            .map(function (response) { return response.json(); });
    };
    CostService.prototype.delArt = function (art) {
        return this.http.post('art_del', { art: art })
            .map(function (response) { return response.json(); });
    };
    CostService.prototype.addArt = function (art) {
        return this.http.post('art_add', { art: art })
            .map(function (response) { return response.json(); });
    };
    return CostService;
}());
CostService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CostService);
exports.CostService = CostService;
//# sourceMappingURL=costService.js.map