-- Para realizar as tarefas abaixo, restaure o banco de dados Pixar no fim desse arquivo.

-- Tarefa 1: Insira as produções da Pixar na tabela Movies:
-- 	Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.
-- 	Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.
-- 	Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.
-- 	WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração.
	insert into Pixar.`Movies`(`title`, `director`, `year`, `length_minutes`)
    values ('Monstros SA', 'Pete Docter', 2001, 92),
		   ('Procurando Nemo','John Lasseter', 2003, 107),
           ('Os Incríveis','Brad Bird', 2004, 116),
           ('WALL-E','Pete Docter', 2008, 104);

-- Tarefa 2: O filme Procurando Nemo foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Insira as informações à tabela BoxOffice.
	insert into Pixar.`BoxOffice`(`movie_id`, `rating`, `domestic_sales`, `international_sales`)
	values (9, 6.8, 450000000, 370000000);

-- Tarefa 3: O nome do diretor do filme "Procurando Nemo" está incorreto, ele foi dirigido por Andrew Staton. Corrija esse dado utilizando o comando UPDATE.
	update Pixar.Movies
    set director = 'Andrew Staton'
    where title = 'Procurando Nemo';

-- Tarefa 4: O título do filme "Ratatouille" está incorreto na tabela Movies. Além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o comando UPDATE.
	update Pixar.Movies
    set title = 'Ratatouille', `year` = 2007
    where id = 3;
    
-- Tarefa 5: Insira as novas classificações abaixo na tabela BoxOffice, lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela Movies:
-- 	Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
-- 	Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.
-- 	WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.
	insert into Pixar.BoxOffice(movie_id, rating, domestic_sales, international_sales)
    values (8, 8.5, 300000000, 250000000),
		   (10, 7.4, 460000000, 510000000),
           (11, 9.9, 290000000, 280000000);

-- Tarefa 6: Exclua da tabela Movies o filme "WALL-E".
	delete from Pixar.BoxOffice
    where movie_id = 11;
    
    delete from Pixar.Movies
    where id = 11;

-- Tarefa 7: Exclua da tabela Movies todos os filmes dirigidos por "Andrew Staton".
	select * from Pixar.Movies
    where director like '%Andrew Staton%'; -- id 2, 9
    
    delete from Pixar.BoxOffice
    where movie_id in (2, 9);
    
    delete from Pixar.Movies
    where director like '%Andrew Staton%';
	
-- Tarefas BONUS --
-- Tarefa 8: Altere a classificação da tabela BoxOffice para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.
	update Pixar.BoxOffice
    set rating = 9
    where domestic_sales > 400000000;
    
-- Tarefa 9: Altere a classificação da tabela BoxOffice para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.
	update Pixar.BoxOffice
    set rating = 6
    where domestic_sales > 200000000 and
    international_sales < 300000000;

-- Tarefa 10: Exclua da tabela Movies todos os filmes com menos de 100 minutos de duração.
	select * from Pixar.Movies
    where length_minutes < 100; -- id 1, 6, 7, 8
    
    delete from Pixar.BoxOffice -- deleta as dependências
    where movie_id in (1, 6, 7, 8);
    
    delete from Pixar.Movies
	where length_minutes < 100;








-- DROP SCHEMA IF EXISTS Pixar;
-- CREATE SCHEMA Pixar;
-- USE Pixar;

-- CREATE TABLE Movies (
--   id INTEGER auto_increment PRIMARY KEY NOT NULL,
--   title VARCHAR(30) NOT NULL,
--   director VARCHAR(30) NULL,
--   year INT NOT NULL,
--   length_minutes INT NOT NULL
-- );

-- CREATE TABLE BoxOffice (
--   movie_id INTEGER,
--   FOREIGN KEY (movie_id) REFERENCES Movies (id),
--   rating DECIMAL(2,1) NOT NULL,
--   domestic_sales INT NOT NULL,
--   international_sales INT NOT NULL
-- );

-- INSERT INTO Movies(title, director, year, length_minutes)
--   VALUES ('Toy Story', 'John Lasseter', 1995, 81),
--          ('Vida de inseto', 'Andrew Staton', 1998, 95),
--          ('ratatui', 'Brad Bird', 2010, 115),
--          ('UP', 'Pete Docter', 2009, 101),
--          ('Carros', 'John Lasseter', 2006, 117),
--          ('Toy Story 2', 'John Lasseter', 1999, 93),
--          ('Valente', 'Brenda Chapman', 2012, 98);


-- INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
--   VALUES (1, 8.3, 190000000, 170000000),
--          (2, 7.2, 160000000, 200600000),
--          (3, 7.9, 245000000, 239000000),
--          (4, 6.1, 330000000, 540000000),
--          (5, 7.8, 140000000, 310000000),
--          (6, 5.8, 540000000, 600000000),
--          (7, 7.5, 250000000, 190000000);

