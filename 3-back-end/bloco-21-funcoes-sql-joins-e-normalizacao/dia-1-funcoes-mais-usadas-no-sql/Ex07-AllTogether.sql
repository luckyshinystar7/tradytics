-- Exercicios - All Together
-- Usando a tabela Employees do banco hr:

-- 1. Escreva uma query que exiba o maior salário da tabela.
	SELECT MAX(SALARY) AS 'Highest Salary' FROM hr.employees;

-- 2. 🚀 Escreva uma query que exiba a diferença entre o maior e o menor salário.
	SELECT MAX(SALARY) - MIN(SALARY) AS 'Salary Gap'
    FROM hr.employees;

-- 3. 🚀 Escreva uma query que exiba a média salarial de cada JOB_ID, ordenando pela média salarial em ordem decrescente.
	SELECT JOB_ID, AVG(SALARY) AS AVG_SALARY
    FROM hr.employees
    GROUP BY JOB_ID
    ORDER BY AVG(SALARY) DESC;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
	SELECT SUM(SALARY) AS SUM_SALARY FROM hr.employees;

-- 5. 🚀 Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
	SELECT
		MAX(SALARY),
        MIN(SALARY),
        SUM(SALARY),
        ROUND(AVG(SALARY), 2) AS AVG_SALARY
    FROM hr.employees;

-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (IT_PROG).
	SELECT COUNT(*) AS 'NUMBER OF IT_PROG'
	FROM hr.employees
    WHERE JOB_ID = 'IT_PROG';

-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (JOB_ID).
	SELECT JOB_ID, SUM(SALARY) AS TOTAL_SALARY
    FROM hr.employees
    group by JOB_ID
    ORDER BY TOTAL_SALARY DESC;

-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (IT_PROG).
	SELECT JOB_ID, SUM(SALARY) AS SUM_SALARY
    FROM hr.employees
    GROUP BY JOB_ID
    HAVING JOB_ID = 'IT_PROG';

-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (IT_PROG).
	SELECT JOB_ID, AVG(SALARY) AS AVG_SALARY
    FROM hr.employees
    GROUP BY JOB_ID
    HAVING JOB_ID <> 'IT_PROG'
    ORDER BY AVG_SALARY DESC;

-- 10. 🚀 Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo DEPARTMENT_ID.
	SELECT 
		DEPARTMENT_ID,
		AVG(SALARY) AS AVG_SALARY,
        COUNT(*) AS NUMBER_OF_EMPLOYEES
    FROM hr.employees
    GROUP BY DEPARTMENT_ID
    HAVING NUMBER_OF_EMPLOYEES > 10;

-- 11. 🚀 Escreva uma query que atualize a coluna PHONE_NUMBER, de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.


-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.


-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e ano no qual foi contratado (exiba somente o ano).


-- 14. 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).


-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e mês no qual foi contratado (exiba somente o mês).


-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.


-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.


-- 18: 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa (em dias).