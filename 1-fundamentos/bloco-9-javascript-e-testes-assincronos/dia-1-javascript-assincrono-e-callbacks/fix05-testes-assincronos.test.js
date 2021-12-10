const { doesNotMatch } = require("assert");

// test('Não deveria passar!', () => { // passa pois o teste roda antes de a function terminar
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//   }, 500);
// });

// test('Não deveria passar!', (done) => { // nao passa pois a function demora mais do que o esperado pelo teste
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//     done();
//   }, 500);
// });

// test('Não deveria passar!', (done) => { // falso positivo pois o catch captura o erro e o try segue com a function
//   setTimeout(() => {
//     try {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//       done();
//     } catch (error) {
//       done();
//     }
//   }, 500);
// });

test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done(error); // Alteramos esta linha
    }
  }, 500);
});
