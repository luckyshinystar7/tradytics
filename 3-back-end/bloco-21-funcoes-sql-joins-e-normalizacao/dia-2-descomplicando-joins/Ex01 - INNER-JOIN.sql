-- EXERCICIO 01 - INNER JOIN
-- Vamos ver agora alguns desafios para consolidar o conhecimento sobre o INNER JOIN, utilizando o banco de dados sakila. Antes de começar a escrever suas queries, identifique quais tabelas contêm as informações de que você precisa e como elas estão relacionadas.
	
-- 1. Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.
	SELECT a.actor_id, a.first_name, f.film_id
    FROM sakila.actor AS a
    INNER JOIN sakila.film_actor AS f
    ON a.actor_id = f.actor_id;

-- 2. Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
	SELECT s.first_name, s.last_name, a.address
    FROM sakila.address AS a
    INNER JOIN sakila.staff AS s
    ON a.address_id = s.address_id;

-- 3. Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
	SELECT c.customer_id, c.first_name, c.email, c.address_id, a.address
    FROM sakila.customer as c
    INNER JOIN sakila.address AS a
    ON a.address_id = c.address_id
    ORDER BY c.first_name DESC
    LIMIT 100;

-- 4. Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer.


-- 5. Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.


-- 6. Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.


-- 7. Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.

