# 🚀 Exercício 4: Escreva um algoritmo recursivo para encontrar o máximo
# divisor comum (mdc) de dois inteiros.
# Solução com iterador:
def is_divisible(dividend, divisor):
    if dividend % divisor == 0:
        return True
    return False


def mdc(first_int, second_int, r):
    while True:
        if is_divisible(first_int, r):
            if is_divisible(second_int, r):
                return r
            else:
                r -= 1
        else:
            r -= 1


def mdc_iterator(a: int, b: int):
    starter_int = 1
    if a > b:
        starter_int = a
    else:
        starter_int = b
    return mdc(a, b, starter_int)


print(mdc_iterator(200, 240))
