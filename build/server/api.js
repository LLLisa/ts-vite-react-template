"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.get('/', (0, cors_1.default)(), (req, res, next) => {
    try {
        res.json({ foo: 'bar' });
    }
    catch (error) {
        next(error);
    }
});
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).send(err.message);
});
exports.default = app;
