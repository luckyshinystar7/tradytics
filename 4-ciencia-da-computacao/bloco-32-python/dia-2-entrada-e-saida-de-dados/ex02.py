# Exercício 2:
# Jogo da palavra embaralhada.
# Desenvolva um jogo em que a pessoa usuária tenha que adivinhar
# uma palavra que será mostrada com as letras embaralhadas.
# O programa terá uma lista de palavras e escolherá uma aleatoriamente.
# O jogador terá três tentativas para adivinhar a palavra.
# Ao final, a palavra deve ser mostrada na tela, informando se a pessoa ganhou
# ou perdeu o jogo.

# 🦜 Para embaralhar uma palavra faça:
#     scrambled_word = "".join(random.sample(word, len(word)))

# 🦜 O sorteio de uma palavra aleatória pode ser feito utilizando o choice:
#     random.choice(["word1", "word2", "word3"]) -> "word2".

import random

lista_1 = ['druida', 'carro', 'biblioteca', 'javascript']
lista_2 = ['empatia', 'runescape', 'caraguatatuba', 'elefante']
lista_3 = ['geografia', 'paralelepipedo', 'trem', 'pizzaria']
lista = lista_1 + lista_2
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
