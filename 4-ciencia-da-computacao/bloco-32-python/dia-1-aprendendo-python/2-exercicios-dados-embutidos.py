#   EXERCICIOS SOBRE DADOS EMBUTIDOS

# LISTAS
# Copie a lista abaixo para realizarmos os exercícios de fixação 5 e 6:
trybe_course = ["Introdução", "Front-end", "Back-end"]

# Exercício 5: Adicione o elemento “Ciência da Computação” à lista.
trybe_course.append("Ciência da Computação")

# Exercício 6: Acesse e altere o primeiro elemento da lista para “Fundamentos”.
trybe_course[0] = "Fundamentos"

# Exercício 7: Um conjunto ou set pode ser inicializado utilizando-se também o método set(). Inicialize uma variável com essa função var = set() e adicione seu nome ao conjunto utilizando um dos métodos vistos. Depois, imprima a variável e confira se o retorno é: {‘seu_nome’}.
var = set()
var.add("Elthon")
var

# Utilizando o código abaixo, faça os exercícios 8 e 9:
info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}
# De olho na dica 👀: Em Python, precisamos colocar a chave do objeto entre aspas.
# Exercício 8: Insira no objeto uma nova propriedade com o nome de chave “recorrente” e o valor “Sim”. Em seguida, imprima o objeto no console.
info["recorrente"] = "Sim"
info

# Exercício 9: Remova a propriedade cuja chave é “origem” e imprima o objeto no console.
