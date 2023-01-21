# 🚀 Exercício 1: Escreva um programa que retorne uma lista com
# os valores numéricos de 1 a N, mas com as seguintes exceções:

# Números divisíveis por 3 deve aparecer como “Fizz” ao invés do número;
# Números divisíveis por 5 devem aparecer como “Buzz” ao invés do número;
# Números divisíveis por 3 e 5 devem aparecer como “FizzBuzz”.

# Exemplo: 3 -> [1, 2, "Fizz"].

def fizz_buzz(number: int):
    my_list = []
    for x in (range(1, number + 1)):
        if x % 3 == 0 and x % 5 == 0:
            my_list.append("FizzBuzz")
        elif x % 3 == 0:
            my_list.append("Fizz")
        elif x % 5 == 0:
            my_list.append("Buzz")
        else:
            my_list.append(x)
    return my_list


print(fizz_buzz(15))
