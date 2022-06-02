-- Exercício 3: 🚀 Monte uma query que:
-- 	1. Crie um banco de dados chamado normalization;
	CREATE DATABASE IF NOT EXISTS normalization;

-- 	2. Crie todas as tabelas resultantes do exercício 2 (na 2ª Forma Normal);
	USE normalization;
    
    CREATE TABLE funcionario(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(100),
    email VARCHAR(50),
    telefone CHAR(11),
    data_cadastro TIMESTAMP
    );
    
    CREATE TABLE setor(
    id INT PRIMARY KEY AUTO_INCREMENT,
    setor VARCHAR(50)
    );
    
    CREATE TABLE funcionario_setor(
    id INT PRIMARY KEY AUTO_INCREMENT,
	funcionario_id INT NOT NULL,
    setor_id INT NOT NULL,
    FOREIGN KEY (funcionario_id) REFERENCES funcionario(id),
    FOREIGN KEY (setor_id) REFERENCES setor(id)
    );

-- 	3. Popule todas as tabelas com os dados fornecidos nos exercícios.

	INSERT INTO funcionario(nome, sobrenome, email, telefone)
	VALUES 	('Joseph', 'Rodrigues', 'jo@gmail.com','35998552144'),
			('André', 'Freeman', 'andre1990@gmail.com','47995224996'),
            ('Cíntia', 'Duval', 'cindy@outlook.com','33998554669'),
            ('Fernanda', 'Mendes', 'fernandamendes@yahoo.com','33992001556');
            
	INSERT INTO setor(setor)
	VALUES 	('Administração'),
			('Operacional'),
            ('Estrategico'),
            ('Marketing'),
            ('Vendas');
            
	INSERT INTO funcionario_setor(funcionario_id, setor_id)
	VALUES 	(1,1),
			(1,5),
            (2,2),
            (3,3),
            (4,5),
            (4,4);
    