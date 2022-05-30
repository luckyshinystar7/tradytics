-- Exercicio 01 - Common Functions

-- 1. Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
	SELECT UCASE('trybe');
    
-- 2. Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?'.
	SELECT REPLACE('Você já ouviu falar do DuckDuckGo?','DuckDuckGo','Google');

-- 3. Utilizando uma query, encontre quantos caracteres temos em 'Uma frase qualquer'.
	SELECT CHAR_LENGTH('Uma frase qualquer');

-- 4. Extraia e retorne apenas a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas'.
	SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);

-- 5. Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.


-- EXEMPLOS

-- SELECT UCASE(title) FROM sakila.film LIMIT 10;
-- SELECT LCASE(title) FROM sakila.film LIMIT 10;
-- SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;
-- SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;
-- SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;
-- SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1;
-- SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;
-- SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;