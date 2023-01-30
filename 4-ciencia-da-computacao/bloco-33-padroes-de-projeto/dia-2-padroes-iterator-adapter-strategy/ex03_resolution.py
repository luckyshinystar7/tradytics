# Exercício 3: Com o baralho tradicional pronto, implemente uma subclasse de
# Baralho chamada BaralhoInverso, que produz um iterador para fornecer as
# cartas na ordem inversa. Ou seja, sem embaralhar, a primeira carta deve ser
# o <K de paus> em vez do <A de copas>, como acontece na implementação atual.
from ex02_resolution import Baralho, Iterator


class IteradorDoBaralhoInverso(Iterator):
    def __init__(self, cartas):
        self._cartas = cartas
        self._pos = 0

    def __next__(self):
        try:
            carta = self._cartas[self._pos]
        except IndexError:
            raise StopIteration()
        else:
            self._pos -= 1
            return carta


class BaralhoInverso(Baralho):
    def __iter__(self):
        return IteradorDoBaralhoInverso(self._cartas)
