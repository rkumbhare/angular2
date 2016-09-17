"use strict";
var DashboardRow = (function () {
    function DashboardRow() {
        this._productList = [];
    }
    Object.defineProperty(DashboardRow.prototype, "productList", {
        get: function () {
            return this._productList;
        },
        enumerable: true,
        configurable: true
    });
    DashboardRow.prototype.addProduct = function (product) {
        this._productList.push(product);
    };
    return DashboardRow;
}());
exports.DashboardRow = DashboardRow;
//# sourceMappingURL=dashboardRow.js.map