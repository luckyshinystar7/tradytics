// 7 - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

// const uppercase = (str) => str.toUpperCase();

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Verifica se funcao converte string para maiuscula', () => {
  expect(uppercase('eita', console.log)).toBe(console.log('EITA'));
});

uppercase('eita', console.log);
