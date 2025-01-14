# 2- Escreva um programa que receba vários números naturais e calcule
# a soma desses valores. Caso algum valor da entrada seja inválido
# (por exemplo uma letra), uma mensagem deve ser exibida na saída
# de erros no seguinte formato: “Erro ao somar valores, {valor}
# é um valor inválido”. Ao final, você deve imprimir a soma
# dos valores válidos.

# 🦜 Receba os valores em um mesmo input, solicitando à pessoa usuária
# que separe-os com um espaço. Receba os valores no formato str e utilize
# o método split para pegar cada valor separado. O método isdigit,
# embutido no tipo str, pode ser utilizado para verificar se a string
# corresponde a um número natural.
nums = input("Informe a lista de numeros separada por espaços: ")
num_list = nums.split(" ")

sum = 0
for num in num_list:
    if not num.isdigit():
        print(f"Erro ao somar, {num} é inválido!")
    else:
        sum = sum + int(num)
print(f"A soma dos valores deu: {sum}")
