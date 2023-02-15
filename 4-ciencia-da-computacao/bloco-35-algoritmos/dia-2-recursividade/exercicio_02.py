# 🚀 Exercício 2: Transforme o algoritmo criado no ex 1 em recursivo.


def even_counter(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + even_counter(n - 1)
    else:
        return even_counter(n - 1)


print(even_counter(17))
