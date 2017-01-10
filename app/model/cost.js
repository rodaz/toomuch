"use strict";
var Cost = (function () {
    function Cost(costName, planQty, planRate, planTotal, factQty, factRate, factTotal) {
        this.costName = costName;
        this.planQty = planQty;
        this.planRate = planRate;
        this.planTotal = planTotal;
        this.factQty = factQty;
        this.factRate = factRate;
        this.factTotal = factTotal;
    }
    return Cost;
}());
exports.Cost = Cost;
//# sourceMappingURL=cost.js.map