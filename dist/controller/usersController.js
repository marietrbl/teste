"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
var express_1 = require("express");
var userService_1 = require("../service/userService");
exports.userController = (0, express_1.Router)();
exports.userController.get("/", function (req, res) { return res.send('bateu na rota/users/'); });
exports.userController.post("/", function (req, res) { return userService_1.userService.CreateUser(req, res); });
