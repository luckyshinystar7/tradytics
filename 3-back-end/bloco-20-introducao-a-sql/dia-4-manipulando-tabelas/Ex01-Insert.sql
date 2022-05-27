-- Exercicio 01 - INSERT
-- Um grande filósofo uma vez disse: "Practice Makes Perfect". Não sabemos quem ele é, mas ele tem razão! Vamos praticar!

-- 1. Insira um novo funcionário na tabela sakila.staff.
	# use sakila;
    insert into staff (first_name, last_name, address_id, email, store_id, `active`, username, `password`)
    values ('Josh', 'Mayer', 2, 'josh.mayer@sakilastaff.com', 2, 1, 'Josh', 'J*ghd');

-- 2. Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione Table Inspector. Clique na aba columns e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa exploração!
	# RESP: Os campos password e email aceitam valor nulo
    
-- 3. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
	insert into staff (first_name, last_name, address_id, store_id, `active`, username)
    values 
		('Michael', 'Jackson', 5, 2, 1, 'Jackson'),
        ('Mike', 'Caruzo', 6, 2, 1, 'MikeC');
        
-- 4. Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
	insert into sakila.actor (first_name, last_name)
    	select first_name, last_name from sakila.staff
        limit 5;

-- 5. Cadastre três categorias de uma vez só na tabela sakila.category.
	insert into sakila.category (name)
		values ('Anime'), ('Brazilian'), ('British');
        
-- 6. Cadastre uma nova loja na tabela sakila.store.
	insert into sakila.store (address_id, manager_staff_id)
		values (3, 14);
		