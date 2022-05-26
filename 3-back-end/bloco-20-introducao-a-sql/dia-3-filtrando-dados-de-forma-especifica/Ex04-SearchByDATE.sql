-- Exercício 04 - Search by DATE
-- 1. Quantos pagamentos temos com a data de retorno 2005-05-25? Há múltiplas maneiras possíveis de encontrar a resposta.
	# use sakila;
    select count(*) as 'pagamentos com data de retorno igual a 2005-05-25' from rental
    where date(return_date) = '2005-05-25'; -- QC 1624.75 (query cost)
    select count(*) as 'pagamentos com data de retorno igual a 2005-05-25' from rental
    where return_date like '2005-05-25%'; -- QC 1632.85
    select count(*) as 'pagamentos com data de retorno igual a 2005-05-25' from rental
    where return_date between '2005-05-25 00:00:00' and '2005-05-25 23:59:59'; -- QC 1632.85
	
-- 2. Quantos pagamentos foram feitos entre 01/07/2005 e 22/08/2005?
	select count(*) as 'pagtos de 01/07/2005 a 22/08/2005' from payment
    where payment_date between '2005-07-01' and '2005-08-22';
	
-- 3. Usando a tabela rental, extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330. Utilize a coluna rental_date para extrair as informações.
	select 
		date(rental_date) as date,
        year(rental_date) as year,
        month(rental_date) as month,
        day(rental_date) as day,
        hour(rental_date) as hour,
        minute(rental_date) as minute,
        second(rental_date) as second
        from rental
    where rental_id = 10330;
    
-- 4. Monte uma query que retorne todos os dados do pagamento feito no dia 28/07/2005 a partir das 22 horas.
	select * from payment
    where payment_date between '2005-07-28 22:00:00' and '2005-07-28 23:59:59';
