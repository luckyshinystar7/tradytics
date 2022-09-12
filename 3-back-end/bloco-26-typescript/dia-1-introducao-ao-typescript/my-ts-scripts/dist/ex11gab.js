"use strict";
// ./index.ts (gabarito)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync")); // importamos o pacote readline-sync
// criamos um array de objetos com o nome do script e o caminho do script a ser executado
const scripts = [
    { name: "Converter comprimento", script: "./ex10gab" },
    { name: "Converter massa", script: "./ex06gab" },
    { name: "Converter capacidade", script: "./ex07gab" },
    { name: "Converter área", script: "./ex08gab" },
    { name: "Converter volume", script: "./ex09gab" }
];
// criamos um novo array somente com os nomes dos scripts
const scriptNames = scripts.map(item => item.name);
// pedimos à pessoa usuária para escolher um dos scripts de conversão
const choice = readline_sync_1.default.keyInSelect(scriptNames, "Escolha um número para executar o script de conversão de unidade");
require(scripts[choice].script); // executamos o script escolhido usando o require
