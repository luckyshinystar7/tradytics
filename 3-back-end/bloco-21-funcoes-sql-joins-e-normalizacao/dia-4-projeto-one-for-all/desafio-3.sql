-- Desafio 3
-- Crie uma QUERY que deverá ter apenas três colunas:

-- A primeira coluna deve possuir o alias "usuario" e exibir o nome da pessoa usuária.
-- A segunda coluna deve possuir o alias "qtde_musicas_ouvidas" e exibir a quantidade de músicas ouvida pela pessoa com base no seu histórico de reprodução.
-- A terceira coluna deve possuir o alias "total_minutos" e exibir a soma dos minutos ouvidos pela pessoa usuária com base no seu histórico de reprodução.
-- Os resultados devem estar agrupados pelo nome da pessoa usuária e ordenados em ordem alfabética.

select 
	u.usuario,
    count(h.usuario_id) as qtde_musicas_ouvidas,
    round(sum(m.duracao_segundos)/60, 2) as total_minutos
	from historico_reproducao as h
	join `user` as u	
		on u.id = h.usuario_id
	join musica as m
		on m.id = h.musica_id
group by usuario_id
order by u.usuario;
    
    