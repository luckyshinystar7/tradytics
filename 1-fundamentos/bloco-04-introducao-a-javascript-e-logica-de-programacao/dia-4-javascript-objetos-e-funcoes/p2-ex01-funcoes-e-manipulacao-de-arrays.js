// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false
function verificaPalindrome(palavra) {
  
  let palavraArray = palavra.split(""); //transforma a string em uma array
  let arrayInvertida = palavraArray.reverse(); //inverte a ordem das letras
  let palavraInvertida = arrayInvertida.join(""); // retorna a array pra uma string

  //compara as duas palavras e retorna resultado
  if (palavra === palavraInvertida) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome('arara'));