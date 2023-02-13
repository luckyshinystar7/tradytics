from datetime import date
from collections import Counter


class SimpleReport:
    @classmethod
    def generate(cls, my_list: list[dict]):
        today = str(date.today())
        manufactured_date = [item["data_de_fabricacao"] for item in my_list]
        expiration_date = [
            item["data_de_validade"]
            for item in my_list
            if item["data_de_validade"] > today
        ]
        companies = [item["nome_da_empresa"] for item in my_list]
        manufactured_date.sort()
        expiration_date.sort()
        company_with_most_items = Counter(companies).most_common(1)[0][0]
        oldest_item = manufactured_date[0]
        to_expire_soon = expiration_date[0]

        return (
            f"Data de fabricação mais antiga: {oldest_item}\n"
            f"Data de validade mais próxima: {to_expire_soon}\n"
            f"Empresa com mais produtos: {company_with_most_items}"
        )
