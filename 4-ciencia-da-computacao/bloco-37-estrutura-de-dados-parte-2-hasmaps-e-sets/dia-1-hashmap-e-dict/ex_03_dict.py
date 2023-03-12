# Exercício 3: Utilize o dicionário criado no exercício 1. Para as chaves
# ímpares, não queremos mais mapear para o seu dobro,
# mas sim para o seu triplo.
# Consulte o método keys() e atualize o seu dicionário para a nova regra.

def dict_mapping():
    output = {}
    for elem in range(3, 21):
        if elem % 2 == 0:
            output[elem] = 2 * elem
        else:
            output[elem] = 3 * elem
    return output


print(dict_mapping())
