const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, N°: ${order.address.number}, AP: ${order.address.apartment}.`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
const order2 = Object.assign({},order);
order2['name'] = 'Luiz Silva';
order2.order.pizza = {
  salgada: ['marguerita', 'pepperoni'],
};
order2.order.drinks = {
  semAlcool: ['Coca-Cola Zero'],
}
order2.payment.total = 50;
console.log(`Olá ${order2.name}, o total do seu pedido de ${order2.order.pizza.salgada[0]}, ${order2.order.pizza.salgada[1]} e ${order2.order.drinks.semAlcool[0]} é de R$ ${order2.payment.total}.`);
}

orderModifier(order);

// 1 - Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// Note que o parâmetro da função já está sendo passado na chamada da função.

// 2 - Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.