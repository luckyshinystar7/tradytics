-- Exercicio 03 - DELETE
-- 1. Exclua do banco de dados o ator com o nome de "KARL".
	-- primeira tarefa, descobrindo actor_id do KARL
	select * from actor			-- 
    where first_name = 'KARL'; -- actor_id é 12
    
    -- segunda tarefa, apagando as linhas onde o actor_id 12 é referenciado
    delete from film_actor
    where actor_id = 12;
    
    -- terceira tarefa, apagando o actor
	delete from actor
    where first_name = 'KARL';
    
-- 2. Exclua do banco de dados os atores com o nome de "MATTHEW".
	-- primeira tarefa, descobrindo actor_id dos MATTHEW
	select * from actor			-- 
    where first_name = 'MATTHEW';
    
    -- segunda tarefa, apagando as linhas onde actor_id 8, 103 e 181 é referenciado
    delete from film_actor
    where actor_id in (8, 103, 181);
    
    -- terceira tarefa, apagando os actors
	delete from actor
    where first_name = 'MATTHEW';

-- 3. Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
	delete from film_text
    where description like '%saga%';

-- 4. Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category.
	truncate film_actor;
    truncate film_category;

-- 5. Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).
	-- Verificado.

-- 6. Exclua o banco de dados e o recrie (use as instruções no início desta aula).
	-- FEITO (usando a GUI, clique direito, drop schema e importando novamente)