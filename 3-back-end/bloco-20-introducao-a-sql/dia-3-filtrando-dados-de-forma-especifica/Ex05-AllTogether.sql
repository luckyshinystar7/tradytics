-- Ex05 - All together 

-- 1. Vamos lá! Faça uma consulta que retorne todas as peças que começam com as letras GR.
	# use PecasFornecedores
    select * from Pecas
    where name like 'GR%';

-- 2. Agora, escreva uma query para mostrar todos os fornecimentos que contenham a peça com code 2. Organize o resultado por ordem alfabética de fornecedor.
	select * from Fornecimentos
    where peca = 2
    order by Fornecedor;
    
-- 3. Em seguida, faça uma consulta para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N.
	select peca, Preco, Fornecedor from Fornecimentos
    where Fornecedor like '%N%';
    
-- 4. Avante, falta pouco! Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene esses resultados em ordem alfabética decrescente.
	select * from Fornecedores
    where name like '%LTDA%'
    order by name desc;

-- 5. Agora, faça uma consulta para exibir o número de empresas (fornecedores) que contém a letra F no código.
	select count(*) as 'Fornecedores com codigo contendo "F"' from Fornecedores
    where code like '%f%';
    
-- 6. Quase lá! Agora escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00. Ordene os resultados por ordem crescente.
	select * from Fornecimentos
    where Preco between 15.00 and 40.00
    order by Preco asc;
    
-- 7. Ufa! Por fim, faça uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019.
	select * from Vendas
    where date(order_date) between '2018-04-15 00:00:00' and '2019-07-30 23:59:59';