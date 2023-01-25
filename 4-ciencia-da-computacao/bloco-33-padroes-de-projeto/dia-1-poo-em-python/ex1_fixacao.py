# Exercício de fixação 1

# Além do liquidificador, podemos modelar inúmeros eletrodomésticos,
# tais como: ventilador, batedeira, secador, máquina de lavar e etc.

# 1.1 - Para fixar crie uma objeto da classe Ventilador,
# semelhante ao exemplo do liquidificador.

# 1.2 - Em seguida faça com que a pessoa tenha um ventilador como atributo
# através da composição.

# 1.3 - Crie também um método comprar_ventilador.

# 1.4 - Faça com que o print (__str__) de Pessoa informe se sua instância
# possui ou não um ventilador.

# 1.1
class Ventilador:
    def __init__(self, cor, potencia, preco,  tensao):
        self.cor = cor
        self.potencia = potencia
        self.tensao = tensao
        self.preco = preco

    def cor(self):
        return self.cor


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None
        self.ventilador = None

    def comprar_liquidificador(self, liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador
