# Exercício 2: Defina uma classe Estatistica que calcule média,
# mediana e moda de uma lista de números.
# 🐦 Dica: Utilize métodos de classe.
import statistics


class estatistica:
    @classmethod
    def media(cls, my_list):
        return sum(my_list) / len(my_list)

    @classmethod
    def mediana(cls, my_list: list[int]):
        my_list.sort()
        mid_index = len(my_list // 2)
        if len(my_list) % 2 == 0:
            return (my_list[mid_index] + my_list[mid_index + 1]) / 2
        return my_list[mid_index]

    @classmethod
    def moda(cls, my_list):
        return statistics.mode(my_list)
