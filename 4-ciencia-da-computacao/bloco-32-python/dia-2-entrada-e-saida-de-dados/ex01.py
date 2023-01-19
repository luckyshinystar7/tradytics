# Exercício 01
# Faça um programa que receba um nome e imprima
# na vertical em escada invertida.
# Exemplo: Entrada:
# PEDRO

# Saída:
# PEDRO
# PEDR
# PED
# PE
# P
palavra = input("Digite uma palavra qualquer: ")
while len(palavra) >= 1:
    print(palavra)
    palavra = palavra[:-1]
