# Funções


1. #### Função <br>
Definição: São blocos de código que dentro dele temos na maioria das vezes resoluções para determinados problemas ou tarefas específicas, podendo ser chamado quantas vezes for  necessário.

2. #### Funções Anônimas <br>
Definição: São funções declaradas sem nome, mas sendo atreladas a uma variável, podendo ser retornadas através da variável.

3. #### Funções com return <br>
Definição: São funções que ao invés de apenas executar um bloco de código quando são chamadas, elas retornam através do **return** valores que foram processados anteriormente. Surgindo a possibilidade de atribuir os valores retornados pelo **return** em uma variável.

4. #### Escopo de Funções <br>
Definição: O escopo nas funções ocorre de forma **local**, ou seja toda variável declarada dentro de uma função só pode ser acessada e usada na função, diferente do **escopo global** que declara fora das funções e dos **escopos em bloco** -> {}, onde podemos declarar variáveis e acessar elas livremente. Assim não gerando conflitos entre elas.

5. #### Escopo Aninhado ou Nested Scopes <br>
Defiição: Dentro do escopo de uma função caso tenha outra função presente dentro dela, podemos declarar uma variável presente na **função pai** e chamá-la na **função filho**, mas o inverso não funciona. Podendo até mesmo declarar variáveis com nomes iguais que vai haver um funcionamento por conta que são diferentes **escopos**.

6. #### Arrow Function
Definição: Sendo uma forma mais curta de declarar funções, onde é caracterizado pelo **sinal de flecha =>** após os parâmetros. Percebendo que são parecidas com funções anônimas. Sendo introduzido no ES6(JavaScript Moderno).
**Alerta**: Elas não criam **this**, apenas herdam dentro do contexto. Funções declaradas no método normal podem criar **this**.

7. #### Parâmetros Opcionais
Definição: Quando temos parâmetros opcionais na nossa aplicação, podemos atrelar **valores default** para elas, assim caso tenha uma chamada da função e não for passada esse parâmetro, retornamos um **valor definido como padrão**.
**Alerta:** Sendo **valores obrigatórios primeiro** e **depois os opcionais**

8. #### Closure
Definição: É quando uma função interna consegue **guardar as variáveis** presentes no escopo externo da sua aplicação, mesmo este escopo externo ter o seu processamento finalizado.

9. #### Recursão
Definição: Quando uma **função chama a si mesma** dentro do seu escopo para resolver determinados problemas. Temos como estrutura uma condição para a parada e um loop (parecido com for e while), chamando a si mesma até a condição imposta for false.

10. #### Operador Rest
Definição: Coleta os argumentos passados para a funções e os retorna em **formato de array como parâmetros para a função**.