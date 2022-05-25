-- Execute os comandos abaixo para criar o db Escola

-- CREATE DATABASE `Escola`;
-- CREATE TABLE IF NOT EXISTS Escola.Estudantes (
--     `Nome` VARCHAR(7) CHARACTER SET utf8,
--     `Idade` INT
-- );
-- INSERT INTO Escola.Estudantes VALUES
--     ('Rafael', 25),
--     ('Amanda', 30),
--     ('Roberto', 45),
--     ('Carol', 19),
--     ('Amanda', 25);


-- Feito isso, você terá acesso à tabela Estudantes do banco de dados Escola. Como você montaria uma query para encontrar os seguintes dados?

-- 1. Monte uma query para encontrar pares únicos de nomes e idades.
	SELECT DISTINCT * FROM Escola.Estudantes;
    
-- 2. Quantas linhas você encontraria na query anterior?
	# 5 linhas
    
-- 3. Monte uma query para encontrar somente os nomes únicos.
	SELECT DISTINCT Nome FROM Escola.Estudantes;

-- 4. Quantas linhas você encontraria na query anterior?
	# 4 linhas
    
-- 5. Monte uma query para encontrar somente as idades únicas.
	SELECT DISTINCT Idade FROM Escola.Estudantes;

-- 6. Quantas linhas você encontraria na query anterior?
	# 4 linhas
