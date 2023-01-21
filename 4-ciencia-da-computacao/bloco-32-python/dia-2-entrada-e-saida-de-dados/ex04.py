# 🚀 Exercício 4:

# Dado o arquivo books.json no, leia seu conteúdo e calcule a porcentagem
# de livros em cada categoria em relação ao número total de livros.
# O resultado deve ser escrito em um arquivo no formato CSV
# como o exemplo abaixo.

# categoria,porcentagem
# Python,0.23201856148491878
# Java,0.23201856148491878
# PHP,0.23201856148491878

import json
import csv

# abre o arquivo books.json e salva na variável books
with open("books.json") as file:
    books = json.load(file)


def categories_counter(books):
    book_categories = {}
    for book in books:
        for category in book["categories"]:
            if category in book_categories:
                book_categories[category] += 1
            else:
                book_categories[category] = 1
    return book_categories


def categories_pct(categories_dict):
    return [
        [category, num_books / len(books)]
        for category, num_books in categories_dict.items()
    ]


# gera um dict com todas categorias e número de livros:
book_categories = categories_counter(books)

# gera uma lista de listas contendo as categorias e o percentual
categories_share = categories_pct(book_categories)

# cria um csv com as categorias e percentual de cada uma
with open("report.csv", "w") as file:
    writer = csv.writer(file)
    writer.writerow(["categoria", "percentagem"])
    writer.writerows(categories_share)
