const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 - Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addKey = (obj, key, value) => {
  obj[key] = value;
}

addKey(lesson2, 'turno', 'noite');
console.log('Resposta Ex01:');
console.log(lesson2);

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
console.log('Resposta Ex02:');

const objKeys = (obj) => {
  for (i in obj) {
    console.log(i);
  }
}

objKeys(lesson2);

// 3 - Crie uma função para mostrar o tamanho de um objeto.
console.log('Resposta Ex03:');

const objLength = (obj) => console.log(Object.keys(obj).length);
objLength(lesson2);

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const objValues = (obj) => {
  for (i in obj) {
    console.log(obj[i]);
  }
}

console.log('Resposta Ex04:');
objValues(lesson1);

// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .
const bLesson1 = { 'lesson1': lesson1 };
const bLesson2 = { 'lesson2': lesson2 };
const bLesson3 = { 'lesson3': lesson3 };
const allLessons = Object.assign({}, bLesson1, bLesson2, bLesson3);

console.log('Resposta Ex05');
console.log(allLessons);

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalStudents = (obj) => {
  let somaStudents = 0;
  for (i in obj) {
    somaStudents += obj[i].numeroEstudantes;
  }
  return somaStudents;
}

console.log('Resposta Ex06 expected: /n 50');
console.log(totalStudents(allLessons));

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const getValueByNumber = (obj, n) => {
  const arrayKeysObj = Object.keys(obj);
  return obj[arrayKeysObj[n]];
}

console.log('Resposta Ex07 expected: /n Matemática');
console.log(getValueByNumber(lesson1, 0));

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. 
const verifyPair = (obj, key, value) => {
  if (obj[key] === value) {
    return true
  }
  return false
}

console.log('Resposta Ex08 expected: /n true /n false');
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
