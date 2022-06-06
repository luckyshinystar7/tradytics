-- Desafio 10

-- Crie uma QUERY que exiba o nome e a quantidade de vezes que cada canção foi tocada por pessoas usuárias do plano gratuito ou pessoal de acordo com os detalhes a seguir:
-- A primeira coluna deve exibir o nome da canção, com o alias "nome";
-- A segunda coluna deve exibir a quantidade de pessoas que já escutaram aquela canção, com o alias "reproducoes";
-- Seus resultados devem estar agrupados pelo nome da canção e ordenados em ordem alfabética.

# select * from SpotifyClone.plano; plano_id 1 e 2 são os planos gratuito e pessoal

# select * from SpotifyClone.user  // Usuarios de id 1, 4 e 5 possuem os planos gratuito ou pessoal
# where plano_id in (1,2);

select m.musica as nome, c.reproducoes
from musica as m
join (
		select musica_id, count(*) as reproducoes
        from historico_reproducao
		where usuario_id in (1,4,5)
		group by musica_id
) as c
	on m.id = c.musica_id
order by m.musica;
