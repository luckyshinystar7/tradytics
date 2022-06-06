-- Desafio 2
-- Crie uma QUERY que exiba três colunas:

-- A primeira coluna deve exibir a quantidade total de canções. Dê a essa coluna o alias "cancoes".
-- A segunda coluna deve exibir a quantidade total de artistas e deverá ter o alias "artistas".
-- A terceira coluna deve exibir a quantidade de álbuns e deverá ter o alias "albuns".
use SpotifyClone;
select 	(select count(id) from musica) as cancoes,
		(select count(id) from artista) as artistas,
        (select count(id) from album) as albuns;
