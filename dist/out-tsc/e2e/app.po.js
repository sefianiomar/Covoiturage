"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var EquitablePage = /** @class */ (function () {
    function EquitablePage() {
    }
    EquitablePage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    EquitablePage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return EquitablePage;
}());
exports.EquitablePage = EquitablePage;
//# sourceMappingURL=app.po.js.map