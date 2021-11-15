function hydrate(a) {
  // recebe uma frase em uma string (pedido) e da uma sujestao de copos de agua
  // parseInt e isNaN retirados do site developer.mozilla.org/en-US/docs/Web/JavaScript/
  let n = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (typeof parseInt(a[i]) === 'number' && !isNaN(parseInt(a[i]))) {
      n += parseInt(a[i]);
    }
  }
  if (n === 1) {
    return `${n} copo de água`;
  }
  return `${n} copos de água`;
}

module.exports = hydrate;
