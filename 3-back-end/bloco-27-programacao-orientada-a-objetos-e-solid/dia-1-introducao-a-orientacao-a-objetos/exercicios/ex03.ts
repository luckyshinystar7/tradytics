// Exercício 3: Vamos mudar um pouco nosso contexto para um sistema de vendas de uma lanchonete.
// Crie uma classe que represente uma pessoa cliente da lanchonete, uma classe que represente um pedido e uma que represente um item do pedido.

// A pessoa cliente deverá conter o nome;
// O item do pedido deve conter o nome do pedido (ex. “Batatas fritas”; “Açaí”) e o preço;
// O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: “cartão”, “dinheiro”) 
// e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.

class Cliente {
  private nome:string

  constructor(n: string) {
    this.nome = n;
  }
}

class Pedido {
  private precoPedido:number;
}

class Item {
  private nomePedido:string;
  private precoPedido:number;
}