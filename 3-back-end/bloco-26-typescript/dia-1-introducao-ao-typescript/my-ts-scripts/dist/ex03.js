"use strict";
// Exercício 3: Crie uma enum que represente as estações climáticas do ano.
var seasons;
(function (seasons) {
    seasons[seasons["outono"] = 1] = "outono";
    seasons[seasons["inverno"] = 2] = "inverno";
    seasons[seasons["primavera"] = 3] = "primavera";
    seasons[seasons["verao"] = 4] = "verao";
})(seasons || (seasons = {}));
