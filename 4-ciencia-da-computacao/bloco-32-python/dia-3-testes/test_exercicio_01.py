from exercicio_01 import fizz_buzz

until_3 = [1, 2, 'Fizz']
until_5 = [1, 2, 'Fizz', 4, 'Buzz']
until_10 = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']
until_15 = until_10 + [11, 'Fizz', 13, 14, 'FizzBuzz']


def test_01():
    'Verifica se função funciona corretamente até 3'
    assert fizz_buzz(3) == until_3


def test_02():
    'Verifica se função funciona corretamente até 5'
    assert fizz_buzz(5) == until_5


def test_03():
    'Verifica se função funciona corretamente até 10'
    assert fizz_buzz(10) == until_10


def test_04():
    'Verifica se função funciona corretamente até 10'
    assert fizz_buzz(15) == until_15
