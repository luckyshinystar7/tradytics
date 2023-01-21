# Exercício 1:

def text_to_number(expression: str):
    if not 1 < len(expression) <= 30:
        raise ValueError("Expression with invalid length")
    number = ""
    for char in expression:
        if char in "ABC":
            number += "2"
        elif char in "DEF":
            number += "3"
        elif char in "GHI":
            number += "4"
        elif char in "JKL":
            number += "5"
        elif char in "MNO":
            number += "6"
        elif char in "PQRS":
            number += "7"
        elif char in "TUV":
            number += "8"
        elif char in "WXYZ":
            number += "9"
        elif char in "-01":
            number += char
        else:
            raise ValueError("Invalid character")
    return number


print(text_to_number("1-HOME-SWEET-HOME"))
