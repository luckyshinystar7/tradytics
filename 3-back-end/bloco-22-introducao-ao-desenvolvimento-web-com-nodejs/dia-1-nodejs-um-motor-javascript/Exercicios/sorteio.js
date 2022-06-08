// Ex - 7 Crie um "jogo de adivinhação" em que a pessoa ganha se acertar qual foi o número aleatório gerado.
//     O script deve ser executado através do comando npm run sorteio.
//     Utilize o readline-sync para realizar input de dados.
//     Armazene o script em sorteio.js.
//     O número gerado deve ser um inteiro entre 0 e 10.
//     Caso a pessoa acerte o número, exiba na tela "Parabéns, número correto!".
//     Caso a pessoa erre o número, exiba na tela "Opa, não foi dessa vez. O número era [número sorteado]".
//     Ao final, pergunte se a pessoa deseja jogar novamente. Se sim, volte ao começo do script.

const sorteio = () => {
    const rs = require('readline-sync');

    console.log("Olá!! Bem vindo ao jogo de adivinhação Maediná");

    const game = () => {
        numeroEscolhido = rs.questionFloat('Digite um numero (entre 0 e 10): ');

        const numeroSorteado = Math.floor(Math.random() * 10);

        if (numeroSorteado === numeroEscolhido) {
            console.log("Parabéns, número correto!");
        } else { console.log(`Opa, não foi dessa vez. O número era ${numeroSorteado}`); }

        playAgain = rs.keyInYN("Voce quer jogar novamente?");
        if (playAgain) game();
    }
    game();
};

sorteio();

module.exports = sorteio;
