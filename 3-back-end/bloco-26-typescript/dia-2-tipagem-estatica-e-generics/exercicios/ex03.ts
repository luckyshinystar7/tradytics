type Slices = 4 | 6 | 8;

interface Pizza {
  flavor:string;
  slices: Slices;
} 

const pizzaCalabresa:Pizza = {
flavor: 'Calabresa',
slices: 8
}

const pizzaMarguerita:Pizza = {
  flavor: 'Marguerita',
  slices: 6
}

const pizzaNutela:Pizza = {
  flavor: 'Nutela',
  slices: 4
}