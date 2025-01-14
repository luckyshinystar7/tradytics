# Em Python a chamada de métodos pode ser feita de algumas formas diferentes.

# É bom salientar que o acesso de métodos de instância, de classe e estáticos
# podem ser feitos de forma transparente, isto é,
# ao chamar objeto.método(parâmetro) você não sabe se o método
# é da instância, de classe ou estático, o que ajuda na abstração
# e facilidade do uso.
# O Python preenche os valores de self e cls de maneira adequada quando eles
# existem, e não passa nenhum parâmetro adicional pra um método estático.

# Segue uma listagem mais completa para sintetizar:

# Arquivo main.py
class Classe:
    atributo_da_classe = 1

    def __init__(self):
        self.atributo_do_objeto = 2

    def método_normal(self):
        print(self)

    @classmethod
    def método_de_classe(cls):
        print(cls)

    @staticmethod
    def método_estático():
        print("Olá")


objeto = Classe()

# Acessando atributo do objeto
print(objeto.atributo_do_objeto)
# Não dá pra chamar usando a classe (Classe.atributo_do_objeto dá erro)
# Saída:
# 2

# Acessando atributo da classe
print(Classe.atributo_da_classe)
print(objeto.atributo_da_classe)
# Saída:
# 1
# 1

# Chamando o método normal
Classe.método_normal(objeto)  # Ou Classe.método_normal(self=objeto)
objeto.método_normal()  # Açúcar sintático para a forma da linha acima
# Saída:
# <__main__.Classe object at 0x7f2304ab3d30>
# <__main__.Classe object at 0x7f2304ab3d30>

# Chamando o método estático
Classe.método_estático()
objeto.método_estático()
# Saída:
# Olá
# Olá

# Chamando o método de classe
Classe.método_de_classe()  # Observe que não precisa passar nenhum parâmetro
objeto.método_de_classe()
# Saída:
# <class '__main__.Classe'>
# <class '__main__.Classe'>
