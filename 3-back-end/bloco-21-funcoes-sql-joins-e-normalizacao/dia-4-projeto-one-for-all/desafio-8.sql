-- Desafio 8

-- Mostre uma relação dos álbuns produzidos por um artista específico, neste caso "Walter Phoenix". Para isto crie uma QUERY que o retorno deve exibir as seguintes colunas:
-- O nome da pessoa artista, com o alias "artista".
-- O nome do álbum, com o alias "album".
-- Os resultados devem ser ordenados pelo nome do álbum em ordem alfabética.

select ar.nome as artista, al.album 
	from album as al
    join artista as ar
		on al.artista_id = ar.id
	where ar.nome like 'Walter Phoenix'
    order by al.album;
