"use strict";
// Exercício 2: Crie uma enum que represente os meses do ano.
Object.defineProperty(exports, "__esModule", { value: true });
var mes;
(function (mes) {
    mes[mes["janeiro"] = 1] = "janeiro";
    mes[mes["fevereiro"] = 2] = "fevereiro";
    mes[mes["mar\u00E7o"] = 3] = "mar\u00E7o";
    mes[mes["abril"] = 4] = "abril";
    mes[mes["maio"] = 5] = "maio";
    mes[mes["junho"] = 6] = "junho";
    mes[mes["julho"] = 7] = "julho";
    mes[mes["agosto"] = 8] = "agosto";
    mes[mes["setembro"] = 9] = "setembro";
    mes[mes["outubro"] = 10] = "outubro";
    mes[mes["novembro"] = 11] = "novembro";
    mes[mes["dezembro"] = 12] = "dezembro";
})(mes || (mes = {}));
exports.default = mes;
