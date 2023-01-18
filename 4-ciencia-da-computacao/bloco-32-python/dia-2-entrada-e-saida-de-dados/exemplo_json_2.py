# A leitura pode ser feita diretamente do arquivo,
# utilizando o método load ao invés de loads.
# O loads carrega o JSON a partir de um texto
# e o load carrega o JSON a partir de um arquivo.

import json


with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

print(pokemons[0])  # imprime o primeiro pokemon da lista
