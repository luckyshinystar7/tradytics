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


# media([1, 2, 4, 3, 7, 10, 2, 12, 45, 32, 5, 67])


# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
def square(n):
    i = 0
    while i < n:
        print(n*'*')
        i = i + 1


square(2)
