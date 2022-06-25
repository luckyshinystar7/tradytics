// EXERCÍCIOS DE FIXAÇÃO
/*
Ex 01

Depois de criar a tabela Books no banco de dados model_example, faça as seguintes implementações.
1.1 - Crie um modelo Book e defina o método getAll para retornar a lista de todos os livros;
1.2 - Crie uma rota /books para trazer a lista de todos os livros;
1.3 - Crie um método getByAuthorId no modelo Book, para retornar apenas livros associados com um determinado author_id. Altere o middleware da rota books criado no passo  para receber uma query string com a chave author_id, e retornar apenas os livros associados.


Ex 02

2.1 - Crie uma rota /books/:id e retorne o livro de acordo com o id passado por parâmetro. Se não existir, retorne um json no seguinte formato { message: 'Not found' }.


Ex 03 

 Ainda usando a tabela books como referência crie uma rota books do tipo POST. Faça as seguintes validações:
   3.1 - Título não pode ser vazio;
   3.2 - Título precisa ter pelo menos três caracteres;
   3.3 - O campo author_id não pode ser vazio;
   3.4 - O campo author_id só é válido se existir uma pessoa autora com esse id;
Se algum dos requisitos anteriores não for atendido, retornar um json no formato abaixo, com status 400.
Copiar
{
	message: 'Dados inválidos'
}
   3.5 - Caso contrário, insira o livro na tabela books e retorne o json no formato abaixo, com o status 201.
Copiar
{
	message: 'Livro criado com sucesso!'
}
*/