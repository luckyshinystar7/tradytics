-- Exercicio 3 - Math Functions

-- 1. Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar.
	-- Chame essa coluna de 'Par ou Ímpar', onde ela pode dizer 'Par' ou 'Ímpar'.
	SELECT IF (15 MOD 2 = 0, 'Par', 'Impar') AS 'Par ou Impar';

-- 2. Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?
	SELECT 220 DIV 12 AS 'Grupos completos';
    
-- 3. Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?
	SELECT 220 MOD 12 AS 'Lugares sobrando';

-- 4. Monte uma query que gere um valor entre 15 e 20.

-- 5. Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.

-- 6. Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?

-- 7. Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?