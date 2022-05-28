-- Exercicio 02 - UPDATE

-- 1. Atualize todas as linhas da tabela sakila.actor que possuem o primeiro nome "JULIA" para "JULES".
	# use sakila;
    update actor
    set first_name = 'JULES'
    where first_name = 'JULIA'; 

-- 2. Altere a linha da tabela categoria onde o valor da coluna x é igual "Sci-fi" para "Science Fiction".
	UPDATE category
    set `name` = 'Science Fiction'
    where `name` = 'Sci-Fi';

-- 3. Corrija para $25 o valor do aluguel da tabela filmes com duração maior que 100 minutos e que possuem classificação "G", "PG" ou "PG-13" e um custo de substituição maior que $20.
	update film
    set rental_rate = 25.00
    where 
		length > 100 and
        (rating = 'G' or
        rating = 'PG' or 
        rating = 'PG-13') and
        replacement_cost > 20;

-- 4. Agora, o aluguel dos filmes com duração entre 0 e 100 minutos passará a ser $10,00 e o aluguel dos filmes com duração acima de 100 minutos passará a ser de $20,00.
	update film
    set rental_rate = (
    case 
		when length < 100 then 10.00
		when length	>= 100 then 20.00
	end);
    
    
    
    