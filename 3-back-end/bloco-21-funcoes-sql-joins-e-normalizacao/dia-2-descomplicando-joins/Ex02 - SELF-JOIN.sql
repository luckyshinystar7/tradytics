-- Exercicio 2 Para fixar conceitos de SELF JOIN, tente encontrar as seguintes informações, utilizando o schema hr:

-- 1. Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos (department) são diferentes.
	SELECT 
		f.EMPLOYEE_ID,
        CONCAT(f.FIRST_NAME, ' ', f.LAST_NAME) AS EMPLOYEE_NAME,
        f.MANAGER_ID,
        f.DEPARTMENT_ID, 
        CONCAT(m.FIRST_NAME, ' ', m.LAST_NAME) AS MANAGER_NAME
    FROM hr.employees AS f
    LEFT JOIN hr.employees AS m
    ON f.MANAGER_ID = m.EMPLOYEE_ID
    WHERE f.DEPARTMENT_ID <> m.DEPARTMENT_ID;
    
    -- OR
    
    SELECT 
    f.EMPLOYEE_ID,
    CONCAT(f.FIRST_NAME, ' ', f.LAST_NAME) AS EMPLOYEE_NAME,
    f.MANAGER_ID,
    f.DEPARTMENT_ID,
    CONCAT(m.FIRST_NAME, ' ', m.LAST_NAME) AS MANAGER_NAME
FROM
    hr.employees AS f,
    hr.employees AS m
WHERE
    f.MANAGER_ID = m.EMPLOYEE_ID
        AND f.DEPARTMENT_ID <> m.DEPARTMENT_ID;
    
-- 2. Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.
	SELECT 
    CONCAT(m.FIRST_NAME, ' ', m.LAST_NAME) AS `MANAGER_NAME`,
    COUNT(f.EMPLOYEE_ID) AS TEAM_QUANTITY
FROM
    hr.employees AS f
        INNER JOIN
    hr.employees AS m ON f.MANAGER_ID = m.EMPLOYEE_ID
GROUP BY m.EMPLOYEE_ID;
    