import csv
import json
# from simple_report import SimpleReport
import xmltodict
from pprint import pprint


class Inventory:
    @classmethod
    def import_data(cls, path: str, option: str):
        data = []
        if path.endswith(".csv"):
            with open(path, encoding="utf-8") as file:
                csv_file = csv.DictReader(file, delimiter=",", quotechar='"')

                for row in csv_file:
                    data.append(row)

        if path.endswith(".json"):
            with open(path) as file:
                data = json.load(file)

        if path.endswith(".xml"):
            with open(path) as file:
                data = xmltodict.parse(file.read())["dataset"]["record"]
        print(data)

        # if option == "simples":
        # return SimpleReport.generate(data)


Inventory.import_data("inventory.xml", "simples")
