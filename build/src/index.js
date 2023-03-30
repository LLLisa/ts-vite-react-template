"use strict";
// import axios from 'axios';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const testFetch = async () => {
//   const { data } = await axios.get('http://localhost:1956');
//   console.log(data);
// };
// const foo = testFetch();
const react_1 = __importDefault(require("react"));
const client_1 = require("react-dom/client");
const root = document.getElementById('root');
// createRoot(root).render('hi');
(0, client_1.createRoot)(root).render(react_1.default.createElement("hr", null));
