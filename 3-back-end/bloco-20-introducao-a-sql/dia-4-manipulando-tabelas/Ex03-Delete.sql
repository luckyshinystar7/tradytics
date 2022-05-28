-- Exercicio 03 - DELETE
-- 1. Exclua do banco de dados o ator com o nome de "KARL".
	-- primeiro passo, descobrindo actor_id do KARL
	select * from actor			-- 
    where first_name = 'KARL'; -- actor_id é 12
    
    -- segundo passo, apagando as linhas onde o actor_id 12 é referenciado
    delete from film_actor
    where actor_id = 12;
    
    -- terceiro passo, apagando o actor
	delete from actor
    where first_name = 'KARL';
    
-- 2. Exclua do banco de dados os atores com o nome de "MATTHEW".

-- 3. Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.

-- 4. Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category.

-- 5. Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).

-- 6. Exclua o banco de dados e o recrie (use as instruções no início desta aula).