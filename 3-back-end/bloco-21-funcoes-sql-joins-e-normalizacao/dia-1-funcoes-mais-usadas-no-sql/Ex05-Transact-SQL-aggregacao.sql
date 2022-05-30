-- Exercicio 5 - Transact SQL

-- Monte um query que exiba:
-- 	1. A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
	SELECT AVG(length) AS 'Média de Duração' FROM sakila.film;
    
-- 	2. A duração mínima dos filmes como 'Duração Mínima';
	SELECT MIN(length) AS 'Duração Mínima' FROM sakila.film;

-- 	3. A duração máxima dos filmes como 'Duração Máxima';
	SELECT MAX(length) AS 'Duração Máxima' FROM sakila.film;
    
-- 	4. A soma de todas as durações como 'Tempo de Exibição Total';
	SELECT SUM(length) AS 'Tempo de Exibição Total' FROM sakila.film;

-- 	5. E, finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
	SELECT COUNT(length) AS 'Filmes Registrados' FROM sakila.film;
