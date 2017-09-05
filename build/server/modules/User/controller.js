"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = require("http-status");
var UserController = (function () {
    function UserController() {
    }
    UserController.prototype.getAll = function (req, res) {
        res.status(HTTPStatus.OK).json({
            message: 'OK'
        });
    };
    UserController.prototype.create = function (req, res) {
        res.status(HTTPStatus.OK).json({
            message: 'OK'
        });
    };
    UserController.prototype.getById = function (req, res) {
        res.status(HTTPStatus.OK).json({
            message: 'OK'
        });
    };
    UserController.prototype.update = function (req, res) {
        res.status(HTTPStatus.OK).json({
            message: 'OK'
        });
    };
    UserController.prototype.delete = function (req, res) {
        res.status(HTTPStatus.OK).json({
            message: 'OK'
        });
    };
    return UserController;
}());
exports.default = UserController;
