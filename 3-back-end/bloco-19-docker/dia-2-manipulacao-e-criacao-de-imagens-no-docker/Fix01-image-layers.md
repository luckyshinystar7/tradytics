 # Exercício de fixação 1 
 ## Camadas de uma imagem

1. Faça esse experimento! Rode no terminal o comando:
~~~
docker run --name meu_container -it ubuntu
~~~

2. No terminal do contêiner criado, rode o seguinte comando para criar um arquivo de texto, já com um conteúdo dentro:
~~~
echo "Teste container" > ola_mundo.txt
~~~

3. Verifique se o arquivo foi criado, consultando seu conteúdo com o comando cat:
~~~
cat ola_mundo.txt
~~~

4. Assim que o terminal imprimir a mensagem Teste container, encerre o terminal com o comando exit;
Esse comando deve inativar o contêiner, que estava ativo por conta dessa interação;

5. Até aqui, entendemos que houve escrita na área reservada para isso no contêiner. Portanto, se iniciarmos o contêiner novamente:
~~~
docker start -ai meu_container
~~~

## Aqui passamos o parâmetro `-ai` ao comando `start`,
## para dizer que queremos acoplar ao container (`a`, de 'attach'),
## de modo interativo (`i`, de 'interactive').

E rodarmos novamente o comando cat no terminal interativo para imprimir o conteúdo do nosso arquivo:
~~~
cat ola_mundo.txt
~~~

Você verá que a mensagem Teste container apareceu novamente. Logo, o arquivo ola_mundo.txt persistiu mesmo ao reiniciarmos o contêiner.