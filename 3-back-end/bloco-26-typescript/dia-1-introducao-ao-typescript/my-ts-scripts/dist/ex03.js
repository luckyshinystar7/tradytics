"use strict";
// Exercício 3: Crie uma enum que represente as estações climáticas do ano.
Object.defineProperty(exports, "__esModule", { value: true });
var season;
(function (season) {
    season[season["outono"] = 1] = "outono";
    season[season["inverno"] = 2] = "inverno";
    season[season["primavera"] = 3] = "primavera";
    season[season["verao"] = 4] = "verao";
})(season || (season = {}));
exports.default = season;
