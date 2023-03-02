# 🚀Exercício 1 - Em um software monitor, o qual verifica a resiliência de
# outro software, precisamos saber o tempo máximo que um software permaneceu
# sem instabilidades. Para isto, a cada hora é feito uma requisição ao sistema
# para verificamos se está tudo bem. Supondo um array que contenha os estados
# coletados por nosso software, calcule quanto tempo máximo que o servidor
# permaneceu sem instabilidades.
# Faça a análise de complexidade da sua solução.

# ----------------------------------------------------
# EXEMPLO
# 1 - OK
# 0 - Instabilidades

# valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado = 3

# valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
# resultado = 4

# ----------------------------------------------------


def stability_checker(list):
    counter = 0
    max_list = []
    for number in list:
        if number:
            counter += 1
        else:
            max_list.append(counter)
            counter = 0
    return max(max_list)


# print(stability_checker([1, 1, 1, 1, 0, 0, 1, 1]))
# A complexidade da solução é O(n).
