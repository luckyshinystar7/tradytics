-- Desafio 9

-- Crie uma QUERY que exibe a quantidade de músicas que estão presentes atualmente no histórico de reprodução de uma pessoa usuária específica. Para este caso queremos saber quantas músicas estão no histórico do usuário "Bill" e a consulta deve retornar a seguinte coluna:
-- O valor da quantidade, com o alias "quantidade_musicas_no_historico".

select count(*) as quantidade_musicas_no_historico
from historico_reproducao
where usuario_id = (
					select id from `user`
					where usuario = 'Bill')
group by usuario_id;