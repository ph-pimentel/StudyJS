# Programação Assíncrona
Definição:Consiste em quando temos tarefas que não sabemos quanto tempo pode levar, porque não estão no nosso controle pois são externas, como chamadas em Banco de Dados e API externas.
Em casos assim utilizamos a **programação assíncrona** para não parar o funcionamento do código enquanto estamos esperando a resposta do meio externo.
Por outro lado se o código fosse síncrono o código travaria, pois ele não espera a resposta do meio externo ele roda linha por linha.

1. #### Callbacks
Definição: São funções **passadas como parâmetro dentro de uma função**, que são **definidas dentro de outra função** onde podemos personalizar o retorno que ela vai gerar dentro daquela função anterior.

