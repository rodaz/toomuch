"use strict";
var Cost = (function () {
    function Cost(costName, rank, planQty, factQty, price, planTotal, factTotal, diff, costId) {
        if (costId === void 0) { costId = 0; }
        this.costName = costName;
        this.rank = rank;
        this.planQty = planQty;
        this.factQty = factQty;
        this.price = price;
        this.planTotal = planTotal;
        this.factTotal = factTotal;
        this.diff = diff;
        this.costId = costId;
    }
    return Cost;
}());
exports.Cost = Cost;
//# sourceMappingURL=cost.js.map