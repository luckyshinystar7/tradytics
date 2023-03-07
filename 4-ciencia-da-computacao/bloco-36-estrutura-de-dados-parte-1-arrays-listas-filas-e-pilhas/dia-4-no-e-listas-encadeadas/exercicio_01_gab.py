# Exercício 1:
# Aprimorando a classe Lista: nossa classe Lista atende as principais
# operações que essa TAD nos oferece, mas que tal melhorarmos?
# Para isso, você deve adicionar os seguintes métodos:

# a. A operação clear nos permite remover todos os Nodes da lista;
# b. A operação __get_node_at nos permite acessar o Node em qualquer
# posição da lista.

# Após criada as operações anteriores, refatore os seguintes métodos para que
# utilizem a __get_node_at ante iterações:

# insert_at;
# insert_last;
# remove_last;
# remove_at;
# get_element_at.

# ⚠️ Faça a análise de complexidade da sua solução.

def __get_node_at(self, position):
    value_to_be_returned = self.head_value
    if value_to_be_returned:
        while position > 0 and value_to_be_returned.next:
            value_to_be_returned = value_to_be_returned.next
            position -= 1
    return value_to_be_returned

# COMPLEXIDADE
# O método __get_node_at realiza a busca de um item em qualquer local da lista,
# portanto sua Complexidade de tempo é O(n).

# O método insert_at realiza a inserção de um item em qualquer lugar da lista,
# portanto sua Complexidade de tempo é O(n).

# O método insert_last realiza a inserção de um item no final da lista,
# portanto sua Complexidade de tempo é O(1).

# O método remove_last realiza a remoção de um item do final da lista,
# portanto sua Complexidade de tempo é O(1).

# O método remove_at realiza a remoção de um item em qualquer lugar da lista,
# portanto sua Complexidade de tempo é O(n).

# O método get_element_at realiza a busca de um item em qualquer local
# da lista, portanto sua Complexidade de tempo é O(n).
