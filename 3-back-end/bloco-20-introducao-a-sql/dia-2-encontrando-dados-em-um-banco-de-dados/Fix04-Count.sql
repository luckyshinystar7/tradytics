-- Na tabela staff do banco de dados sakila. Como você poderia responder às seguintes questões?

-- 1. Quantas senhas temos cadastradas nessa tabela?
	SELECT COUNT(password) FROM sakila.staff;
    
-- 2. Quantas pessoas temos no total trabalhando para nossa empresa?
	SELECT COUNT(DISTINCT staff_id) FROM sakila.staff;

-- 3. Quantos emails temos cadastrados nessa tabela?
	SELECT COUNT(DISTINCT email) FROM sakila.staff;
