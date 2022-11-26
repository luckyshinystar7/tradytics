#   EXERCICIOS SOBRE OPERAÇÕES BÁSICAS

# Exercício 1: No terminal, inicialize duas variáveis a e b, sendo a = 10 e b = 5. Mostre o resultado das 7 operações básicas (soma, subtração, multiplicação, divisão, divisão inteira, potenciação e módulo) envolvendo essas variáveis.
a = 10
b = 5
a + b
a - b
a * b
a / b
a // b
a ** b
a % b

# Exercício 2: Declare e inicialize uma variável: hours = 6. Quantos minutos têm em 6 horas? E quantos segundos? Declare e inicialize variáveis minutes e seconds que recebem os respectivos resultados das contas. Depois, imprima cada uma delas.
hours = 6
minutes = hours * 60
seconds = minutes * 60
print(hours, minutes, seconds)

# Exercício 3: Teste e verifique o que acontece se você colocar um ponto e vírgula no final de uma instrução em Python.
3+2; # nada aconteceu, o comando rodou normalmente

# Exercício 4: Suponha que o preço de capa de um livro seja R$ 24,20, mas as livrarias recebem um desconto de 40%. O transporte custa 3,00 para o primeiro exemplar e 75 centavos para cada exemplar adicional. 
# Qual é o custo total de atacado para 60 cópias? Escreva uma expressão que receba o custo total e a imprima.
preco_livro = 24.20
preco_livro_desc_40 = preco_livro * 0.6
preco_60_copias_desc = 60*preco_livro_desc_40
frete_60_copias = 3 + 59*0.75
preco_60_copias_com_frete = preco_60_copias_desc + frete_60_copias

print(preco_60_copias_com_frete)