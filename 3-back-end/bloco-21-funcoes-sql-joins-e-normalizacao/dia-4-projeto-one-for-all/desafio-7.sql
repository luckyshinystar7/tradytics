-- Desafio 7
-- Mostre uma relação de todos os álbuns produzidos por cada pessoa artista, com a quantidade de seguidores que ela possui, de acordo com os detalhes a seguir. Para tal, crie uma QUERY com as seguintes colunas:

-- A primeira coluna deve exibir o nome da pessoa artista, com o alias "artista".
-- A segunda coluna deve exibir o nome do álbum, com o alias "album".
-- A terceira coluna deve exibir a quantidade de pessoas seguidoras que aquela pessoa artista possui e deve possuir o alias "seguidores".
-- Seus resultados devem estar ordenados de forma decrescente, baseando-se no número de pessoas seguidoras. Em caso de empate no número de pessoas, ordene os resultados pelo nome da pessoa artista em ordem alfabética e caso há artistas com o mesmo nome, ordene os resultados pelo nome do álbum alfabeticamente.

select ar.nome as artista, al.album, s.seguidores
	from album as al
    join artista as ar
		on al.artista_id = ar.id
	join 	(select 
				artista_id,
                count(artista_id) as seguidores
			from seguindo as s
			group by artista_id) as s
		on al.artista_id = s.artista_id
order by s.seguidores desc, ar.nome asc, al.album asc;