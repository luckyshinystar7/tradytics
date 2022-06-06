-- Desafio 4
-- Crie uma QUERY que deve mostrar as pessoas usuárias que estavam ativas no ano de 2021 se baseando na data mais recente no histórico de reprodução.

-- A primeira coluna deve possuir o alias "usuario" e exibir o nome da pessoa usuária.
-- A segunda coluna deve ter o alias "condicao_usuario" e exibir se a pessoa usuária está ativa ou inativa.
-- O resultado deve estar ordenado em ordem alfabética.

select u.usuario, (
SELECT IF(max(h.data_reproducao) like '2021%', 'Usuário ativo', 'Usuário inativo')
) as condicao_usuario
	from `user` as u
    join historico_reproducao as h
		on u.id = h.usuario_id
group by u.usuario
order by usuario;