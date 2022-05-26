-- Para consolidar esse conhecimento tente encontrar as seguintes informações:

-- 1. Mostre todos os detalhes dos filmes que contêm a palavra ace no nome.
	# use sakila;
	select * from sakila.film
    where title like '%ace%';

-- 2. Mostre todos os detalhes dos filmes cujas descrições finalizam com china.
	# use sakila;
    select * from film
    where description like '%china';

-- 3. Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl e o título finaliza com a palavra lord.
	select * from film
    where description like '%girl%'
    and title like '%lord';

-- 4. Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra gon.
	select * from film
    where title like '___gon%';

-- 5. Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra gon e a descrição contém a palavra Documentary.
	select * from film
    where title like '___gon%'
    and description like '%documentary%';
 
-- 6. Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito.
	select * from film
    where title like '%academy'
    or title like 'mosquito%';
    
-- 7. Mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições.
	select * from film
    where description like '%monkey%'
    and description like '%sumo%';