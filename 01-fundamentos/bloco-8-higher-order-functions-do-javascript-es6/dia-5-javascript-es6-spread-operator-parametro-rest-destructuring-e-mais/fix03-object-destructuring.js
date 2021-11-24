const product = {
  nome: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const { nome, seller } = product;
console.log(nome); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: estudante, b: classAssigned, c: subject } = student;

console.log(estudante); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática
