# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
def higher(a, b):
    if a > b:
        return a
    return b


# higher(3, 5)


# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
def media(a):
    size = len(a)
    sum = 0
    for x in a:
        sum = sum + x
    med = sum / size
    return med


media([1, 2, 4, 3, 7, 10, 2, 12, 45, 32, 5, 67])
