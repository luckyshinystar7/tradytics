import pytest
from exercicio_02 import text_to_number

INPUT_03 = "1-HOME-SWEET-HOME"
OUTPUT_03 = "1-4663-79338-4663"


def test_01():
    with pytest.raises(ValueError, match="Expression with invalid length"):
        text_to_number("")


def test_02():
    with pytest.raises(ValueError, match="Expression with invalid length"):
        text_to_number("dsadsdadsadsdadsadasdasdasdasdasdasdadasdasdasdasd")


def test_03():
    'Verifica se função funciona corretamente'
    assert text_to_number(INPUT_03) == OUTPUT_03


def test_04():
    with pytest.raises(ValueError, match="Invalid character"):
        text_to_number("big brother !!")
