"use strict";
// ./index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const ex02gab_1 = __importDefault(require("./ex02gab"));
const ex03gab_1 = __importDefault(require("./ex03gab"));
const monthsNames = Object.values(ex02gab_1.default);
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, "Escolha um mês do ano");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
const seasonsSouth = {
    [ex03gab_1.default.OUTONO]: [ex02gab_1.default.MARCO, ex02gab_1.default.ABRIL, ex02gab_1.default.MAIO, ex02gab_1.default.JUNHO],
    [ex03gab_1.default.INVERNO]: [ex02gab_1.default.JUNHO, ex02gab_1.default.JULHO, ex02gab_1.default.AGOSTO, ex02gab_1.default.SETEMBRO],
    [ex03gab_1.default.PRIMAVERA]: [ex02gab_1.default.SETEMBRO, ex02gab_1.default.OUTUBRO, ex02gab_1.default.NOVEMBRO, ex02gab_1.default.DEZEMBRO],
    [ex03gab_1.default.VERAO]: [ex02gab_1.default.DEZEMBRO, ex02gab_1.default.JANEIRO, ex02gab_1.default.FEVEREIRO, ex02gab_1.default.MARCO],
};
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também
const seasonsNorth = {
    [ex03gab_1.default.PRIMAVERA]: seasonsSouth[ex03gab_1.default.OUTONO],
    [ex03gab_1.default.VERAO]: seasonsSouth[ex03gab_1.default.INVERNO],
    [ex03gab_1.default.OUTONO]: seasonsSouth[ex03gab_1.default.PRIMAVERA],
    [ex03gab_1.default.INVERNO]: seasonsSouth[ex03gab_1.default.VERAO],
};
const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
const month = Object.values(ex02gab_1.default)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar
    if (months.includes(month))
        console.log(seasons);
});
