"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = require("./controller");
var userCtrl;
var UserRoutes = (function () {
    function UserRoutes() {
        userCtrl = new controller_1.default;
    }
    UserRoutes.prototype.index = function (req, res) {
        return userCtrl.getAll(req, res);
    };
    UserRoutes.prototype.create = function (req, res) {
        return userCtrl.create(req, res);
    };
    UserRoutes.prototype.findOne = function (req, res) {
        return userCtrl.getById(req, res);
    };
    UserRoutes.prototype.update = function (req, res) {
        return userCtrl.update(req, res);
    };
    UserRoutes.prototype.destroy = function (req, res) {
        return userCtrl.delete(req, res);
    };
    return UserRoutes;
}());
exports.default = UserRoutes;
