"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var typeorm_1 = require("typeorm");
var express_2 = require("express");
var PORT = 5000;
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_2.router);
app.get('/', function (req, res) { return res.send('nosso servidor está funcionando! 😍'); });
exports.dbConfig = new typeorm_1.DataSource({
    type: "sqlite",
    database: "./database.db",
    entities: [__dirname + '/../**/*.entity.js'],
    logging: true,
    synchronize: true,
});
exports.dbConfig.initialize()
    .then(function () {
    console.log('conectado ao banco');
    app.listen(PORT, function () { return console.log("\uD83D\uDCBB servidor rodando na porta ".concat(PORT, " \uD83D\uDCBB")); });
})
    .catch(function () { return console.log('falha ao conectar com o banco'); });
console.log('encerrando servidor');
