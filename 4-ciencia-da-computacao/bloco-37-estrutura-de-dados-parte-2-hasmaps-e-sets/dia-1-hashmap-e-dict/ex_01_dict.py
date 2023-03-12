# Exercício 1: Consulte a forma de se criar um dicionário chamado
# de dict comprehension e crie um dicionário que mapeia inteiros
# de 3 a 20 para o seu dobro.

def dict_mapping():
    output = {}
    for elem in range(3, 21):
        output[elem] = 2 * elem
    return output


print(dict_mapping())
