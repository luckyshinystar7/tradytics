# Exercício 4 Dado um array de doces candies e um valor inteiro extra_candies,
# onde o candies[i] representa o número de doces que a enésima criança possui.
# Para cada criança, verifique se há uma maneira de distribuir doces extras
# entre as crianças de forma que ela possa ter o maior número de doces entre
# elas. Observe que várias crianças podem ter o maior número de doces.
# Analise o código abaixo para o melhor, pior caso e caso médio.
# Faça a análise de complexidade de espaço também.

import random


def randomAverages(n):
    list_of_averages = []

    for _ in range(100):
        average = 0
        for _ in range(n):
            average += random.randrange(1, n)
        average = average/n
        list_of_averages.append(average)

    return list_of_averages

# A complexidade será O(n) pois o número de iterações cresce linearmente
# com o aumento de n. a complexidade de espaço será O(1), pois a saída
# vai ser sempre constante independente da entrada n
