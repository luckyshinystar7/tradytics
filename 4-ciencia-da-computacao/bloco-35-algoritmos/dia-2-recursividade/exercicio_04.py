# 🚀 Exercício 4: Escreva um algoritmo recursivo para encontrar o máximo
# divisor comum (mdc) de dois inteiros.
# Solução com iterador:

# Utilizando o algoritmo de Euclides
def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)


print(mdc(200, 240))
