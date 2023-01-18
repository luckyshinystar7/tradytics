# Criamos um contexto, limitando o escopo onde o arquivo está aberto.
# O uso do "as" aqui é somente para atribuir o valor
# utilizado no contexto à variável file
with open("arquivo.txt", "w") as file:
    file.write("Michelle 27\n")
# como estamos fora do contexto, o arquivo foi fechado
print(file.closed)
