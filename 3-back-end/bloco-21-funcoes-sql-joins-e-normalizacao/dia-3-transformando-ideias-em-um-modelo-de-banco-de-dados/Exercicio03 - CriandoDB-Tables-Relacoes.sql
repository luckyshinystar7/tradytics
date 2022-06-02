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
	id_funcionario INT NOT NULL,
    id_setor INT NOT NULL,
    FOREIGN KEY (id_funcionario) REFERENCES funcionario(id),
    FOREIGN KEY (id_setor) REFERENCES setor(id)
    );

-- 	3. Popule todas as tabelas com os dados fornecidos nos exercícios.

    