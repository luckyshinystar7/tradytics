# RESUMO COMANDOS PYTHON

# SOBRE LISTAS

fruits = ["laranja", "maçã", "uva", "abacaxi"]  # elementos são definidos separados por vírgula, envolvidos por colchetes

fruits[0]  # o acesso é feito por índices iniciados em 0

fruits[-1]  # o acesso também pode ser negativo

fruits.append("banana")  # adicionando uma nova fruta

fruits.remove("abacaxi")  # removendo uma fruta

fruits.extend(["pera", "melão", "kiwi"])  # acrescenta uma lista de frutas a lista original

fruits.index("maçã")  # retorna o índice onde a fruta está localizada, neste caso, 1

fruits.sort()  # ordena a lista de frutas

# SOBRE TUPLAS (tuple)
# São similares a listas, porém não podem ser modificados durante a execução do programa.

user = ("Will", "Marcondes", 42)  # elementos são definidos separados por vírgula, envolvidos por parênteses

user[0]  # acesso também por índices

# SOBRE CONJUNTOS (set)
# Um conjunto é uma coleção de elementos únicos e não ordenados. Conjuntos implementam operações de união, intersecção e outras.

permissions = {"member", "group"}  # elementos separados por vírgula, envolvidos por chaves

permissions.add("root")  # adiciona um novo elemento ao conjunto

permissions.add("member")  # como o elemento já existe, nenhum novo item é adicionado ao conjunto

permissions.union({"user"})  # retorna um conjunto resultado da união

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos


