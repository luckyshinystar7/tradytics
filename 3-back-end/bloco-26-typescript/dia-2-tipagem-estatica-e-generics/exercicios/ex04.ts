type CommonFlavors = 'Calabresa' | 'Frango' | 'Pepperoni';
type VeganFlavors = 'Marguerita' | 'Palmito' | 'Cogumelo';
type SweetFlavors = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow';

interface CommonPizza extends Pizza {
  flavor: CommonFlavors;
}

interface VeganPizza extends Pizza {
  flavor: VeganFlavors;
}

interface SweetPizza extends Pizza {
  flavor: SweetFlavors;
  slices: 4;
}

const pizzaPalmito:VeganPizza = {
  flavor: 'Palmito',
  slices: 8
}