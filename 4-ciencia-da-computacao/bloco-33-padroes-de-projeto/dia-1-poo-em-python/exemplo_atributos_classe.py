# Atributos da classe são declarados no nível (escopo)
# da classe (no mesmo nível que os métodos).

# Eles podem ser acessados tanto pela classe quanto pelos objetos.

# Eles podem ser alterados ou pelo acesso feito a partir da classe
# ou por métodos de classe. Se você tentar alterar a partir de um
# objeto vai apenas setar um atributo do objeto com o mesmo nome.


class Classe:
    atributo_da_classe = 1


objeto_1 = Classe()
objeto_2 = Classe()

print(Classe.atributo_da_classe)  # Saída: 1
print(objeto_1.atributo_da_classe)  # Saída: 1
print(objeto_2.atributo_da_classe)  # Saída: 1

Classe.atributo_da_classe = 2
print(Classe.atributo_da_classe)  # Saída: 2
print(objeto_1.atributo_da_classe)  # Saída: 2
print(objeto_2.atributo_da_classe)  # Saída: 2

objeto_1.atributo_da_classe = 3
print(Classe.atributo_da_classe)  # Saída: 2
print(objeto_1.atributo_da_classe)  # Saída: 3
print(objeto_2.atributo_da_classe)  # Saída: 2
