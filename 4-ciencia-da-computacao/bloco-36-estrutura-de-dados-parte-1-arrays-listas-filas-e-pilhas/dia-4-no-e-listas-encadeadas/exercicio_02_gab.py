# Exercício 2:
# Nova busca: até o momento nossa estrutura consulta elementos através da
# posição. Nesta atividade será necessário criar uma função chamada def
# index_of(self, value), onde ela será responsável por consultar na lista
# a existência do valor informado e retornar a posição da primeira ocorrência.
# Caso o valor não exista, considere retornar -1.
# Esta função deve respeitar a complexidade O(n).

# ⚠️ Faça a análise de complexidade da sua solução.


def index_of(self, value):
    position = 1
    current_value = self.head_value
    while current_value:
        if current_value.value == value:
            return position
        current_value = current_value.next
        position += 1
    return -1


# O método index_of percorre a lista toda, e por isso sua Complexidade de
# tempo é O(n).
