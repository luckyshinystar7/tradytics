# Exercício 6: Você está trabalhando em um sistema de orçamentos que faz
# cálculos de impostos e precisa ser refatorado para adicionar novos,
# que no caso são o PIS (0,65%) e o COFINS (3%). Mas durante a refatoração,
# você se depara com uma má prática de código. Encontre essa má prática e
# a solucione em conjunto com a refatoração.

class Orcamento:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self, imposto):
        if imposto == 'ISS':
            return self.__calcular_iss()
        elif imposto == 'ICMS':
            return self.__calcular_icms()

    def __calcular_iss(self):
        return self.valor * 0.1

    def __calcular_icms(self):
        return self.valor * 0.06


orcamento = Orcamento(1000)
print(f"ISS: {orcamento.calcular_imposto('ISS')}")
print(f"ICMS: {orcamento.calcular_imposto('ICMS')}")
