# Ao sobrescrever o construtor, devemos chamar o construtor da superclasse
# também, de forma a garantir que ele seja executado e o que ele faz seja
# aproveitado. Caso não faça isso, como em qualquer método normal,
# você terá de re-implementar a lógica do construtor da superclasse
# manualmente na subclasse.

# De olho na dica 👀: Se você quiser sobrescrever métodos decorados
# com o @property, precisará fazer algumas adaptações na superclasse.
# Dê uma olhada nesta resposta no stack overflow para mais informações.

from eletrodomestico import Eletrodomestico


class Liquidificador(Eletrodomestico):
    pass


class Ventilador(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco, quantidade_de_portas=1):
        # Chamada ao construtor da superclasse
        super().__init__(cor, potencia, tensao, preco)

        # Faz outras coisas específicas dessa subclasse
        self.quantidade_de_portas = quantidade_de_portas


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.eletrodomesticos = []

    # Permite a aquisição de qualquer eletrodoméstico
    def comprar_eletrodomestico(self, eletrodomestico):
        if eletrodomestico.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= eletrodomestico.preco
            self.eletrodomestico.append(eletrodomestico)
