# Exercício 3:
# Modifique o exercício 2 para que as palavras sejam lidas de um arquivo.
# Considere que o arquivo terá cada palavra em uma linha.

import random


# Primeiro vamos criar o arquivo:
def cria_txt():
    lista_1 = ["druida\n", "carro\n", "biblioteca\n", "javascript\n"]
    lista_2 = ["empatia\n", "runescape\n", "caraguatatuba\n", "elefante\n"]
    lista_3 = ["geografia\n", "paralelepipedo\n", "trem\n", "pizzaria\n"]
    LINES = lista_1 + lista_2 + lista_3
    with open("palavras_ex03.txt", mode="w") as file:
        file.writelines(LINES)


# Agora vamos abrir e usar o arquivo com as palavras:
def jogar():
    with open("palavras_ex03.txt", mode="r") as file:
        lista_str = file.read()
    # transforma str em lista
    lista = lista_str.split()
    palavra = random.choice(lista)
    palavra_embaralhada = "".join(random.sample(palavra, len(palavra)))

    tentativas = 3
    while tentativas > 0:
        chute = input(f"Adivinhe a palavra {palavra_embaralhada}: ")
        if chute == palavra:
            print("Parabéns! Você acertou")
            tentativas = 0
        else:
            tentativas = tentativas - 1
            print("Não foi dessa vez\n")
    print(f"A palavra era: {palavra}")


jogar()
