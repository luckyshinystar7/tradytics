# Exercício 3: Lembra do exercício dos gráficos? De semelhante modo,
# implemente os objetos das seguintes figuras geométricas:
# <<abstract>> FiguraGeometrica - area, perimetro
# Quadrado - lado, area, perimetro
# Retangulo - base, altura, area, perimetro
# Circulo - raio, area, perimetro
from abc import abstractmethod


class FiguraGeometrica:
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimetro(self):
        pass


class Quadrado(FiguraGeometrica):
    def __init__(self, base):
        self.base = base

    def area(self):
        return self.base * self.base

    def perimetro(self):
        return 4 * self.base


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return 2 * self.base + 2 * self.altura


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return (self.raio ** 2) * 3.14

    def perimetro(self):
        return 2 * self.raio * 3.14
