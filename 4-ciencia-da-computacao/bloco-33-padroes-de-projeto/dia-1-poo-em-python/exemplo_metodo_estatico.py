# Métodos estáticos são funções normais, só que dentro de uma classe.


class Classe:
    @staticmethod
    def método_estático():
        print("Olá")


objeto = Classe()
Classe.método_estático()
objeto.método_estático()
# Saída:
# Olá
# Olá
