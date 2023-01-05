# Exercício 3:
# Dado um arquivo contendo estudantes e suas respectivas
# notas, escreva um programa que:

# lê todas essas informações;
# aplique um filtro, mantendo somente as pessoas que estão reprovadas;
# escreva seus nomes em outro arquivo.
# Considere que a nota miníma para aprovação é 6.

# Arquivo:
# Marcos 10
# Felipe 4
# José 6
# Ana 10
# Maria 9
# Miguel 5

# 🦜 Dica: A função split pode ser utilizada para dividir o
# nome em uma linha. Ex: line.split() -> ["Marcos", "10"].

# Primeiro vamos criar o arquivo:
ex3_file = open("ex3_file.txt", mode="w")
LINES = ["Marcos 10\n", "Felipe 4\n", "José 6\n", "Ana 10\n", "Maria 9\n"]
ex3_file.writelines(LINES)
ex3_file.write("Miguel 5")
ex3_file.close()

# Agora vamos acessar o arquivo conforme enunciado
names_and_grades = open("ex3_file.txt", mode="r")
print(names_and_grades)
names_and_grades.close()
