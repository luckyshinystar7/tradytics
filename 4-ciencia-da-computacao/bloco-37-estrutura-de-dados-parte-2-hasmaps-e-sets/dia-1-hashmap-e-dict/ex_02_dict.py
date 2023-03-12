# Exercício 2: Dada uma string, construa um dicionário com a contagem de cada
# caractere da palavra.
# Utilize o pseudocódigo e o exemplo abaixo para se nortear.
# Para cada char na string:
# 	- Se o char não estiver no dicionário, inclua com o valor 1;

# 	- Se estiver, incremente o valor.


# Exemplo:

str = "bbbbaaaacccaaaaaaddddddddccccccc"
# saída: {'b': 4, 'a': 10, 'c': 10, 'd': 8}


def letter_counter(word):
    output = {}
    for letter in word:
        if letter not in output.keys():
            output[letter] = 1
        else:
            output[letter] += 1
    return output


print(letter_counter("bbbbaaaacccaaaaaaddddddddccccccc"))
