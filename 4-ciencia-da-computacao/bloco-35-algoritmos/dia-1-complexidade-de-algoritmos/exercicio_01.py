# Exercício 1 Dado um array de números de tamanho n, escreva um algoritmo que
# retorna true se há no array um número duplicado e false caso contrário.
# Analise a solução abaixo e diga qual é a ordem de complexidade desse
# algoritmo para o melhor caso, pior caso e caso médio.


def contains_duplicate(numbers):
    numbers.sort()
    previous_number = "not a number"
    for number in numbers:
        if previous_number == number:
            return True
        previous_number = number

    return False
