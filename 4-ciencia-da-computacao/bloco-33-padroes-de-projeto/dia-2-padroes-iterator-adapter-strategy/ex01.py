# Exercício 1: Abaixo temos parte da implementação de um jogo do mundo de
# Star Wars. Porém, esse código está com um erro. Encontre-o e corrija-o sem
# alterar o código das classes de personagens (Soldier e Jedi).


class Soldier:
    def __init__(self, level):
        self.level = level

    def attack(self):
        return self.level * 1


class Jedi:
    def __init__(self, level):
        self.level = level

    def attackWithSaber(self):
        return self.level * 100


class StarWarsGame:
    def __init__(self, character):
        self.character = character

    def fight_enemy(self):
        print(f"You caused {self.character.attack()} of damage to the enemy")


StarWarsGame(Soldier(5)).fight_enemy()
StarWarsGame(Jedi(20)).fight_enemy()
