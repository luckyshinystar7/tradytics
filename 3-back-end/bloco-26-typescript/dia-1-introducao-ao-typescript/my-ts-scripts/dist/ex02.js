"use strict";
// Exercício 2: Crie uma enum que represente os meses do ano.
var meses;
(function (meses) {
    meses[meses["janeiro"] = 1] = "janeiro";
    meses[meses["fevereiro"] = 2] = "fevereiro";
    meses[meses["mar\u00E7o"] = 3] = "mar\u00E7o";
    meses[meses["abril"] = 4] = "abril";
    meses[meses["maio"] = 5] = "maio";
    meses[meses["junho"] = 6] = "junho";
    meses[meses["julho"] = 7] = "julho";
    meses[meses["agosto"] = 8] = "agosto";
    meses[meses["setembro"] = 9] = "setembro";
    meses[meses["outubro"] = 10] = "outubro";
    meses[meses["novembro"] = 11] = "novembro";
    meses[meses["dezembro"] = 12] = "dezembro";
})(meses || (meses = {}));
