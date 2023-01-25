# Exercício de Fixação 2

# Implemente as classes Secador, Batedeira e MaquinaDeLavar,
# sempre herdando da classe Eletrodomestico. Para testar,
# instancie as novas classes e realize alguns prints,
# como por exemplo, divulgando o preço do Eletrodoméstico.

from eletrodomestico import Eletrodomestico


class Secador(Eletrodomestico):
    pass


class Batedeira(Eletrodomestico):
    pass


class MaquinaDeLavar(Eletrodomestico):
    pass


meu_secador = Secador("preto", 250, 127, 130)

print(f"Preço do meu secador: {meu_secador.preco} reais.")
