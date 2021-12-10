function techList(arrayTechs, name) {
  // cria e exibe uma lista de tecnologias.
  let arrayOrdenado = arrayTechs.sort();
  let objectList = [];
  if (arrayTechs.length < 1) {
    return 'Vazio!';
  }
  for (let i = 0; i < arrayOrdenado.length; i += 1) {
    let x = { tech: arrayOrdenado[i], name };
    objectList.push(x);
  }
  return objectList;
}

module.exports = techList;