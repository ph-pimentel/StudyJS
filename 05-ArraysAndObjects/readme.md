# Arrays

Definição: Na linguagem JavaScript, são um tipo de objeto que armazenam valores dentro de uma variável somente. Sendo o seu índice começado em 0. Podendo armazenar vários tipos de valores dentro de apenas um array.

1. #### Propriedades
Definição:São atributos que descrevem um array ou armazenam informações como seu comprimento ou protótipo.

2. #### Métodos em Arrays
Definição: São funções que pertencem a um objeto, que têm como funão manipular, interagir ou transformar dados dentro de arrays e objetos.

4. #### Rest Operator
Definição: Coleta os argumentos passados para a funções e os retorna em **formato de array como parâmetros para a função**.

5. #### Spread Operator
Definição: Tem a sintaxe parecida com o operador rest, mas possui funções diferentes, enquanto o operador rest agrupo argumentos para serem passados para um parâmetro, o spread **copia, combina ou passa os elementos** de arrays, objetos ou strings de forma mais simples.

6. #### For...Of
Definição: Usado para percorrer valores interáveis (valores como array e string), repetindo a função até completar de percorrer todos os valores.

7. #### Destructuring Array
Definição: Consiste na **extração de valores** de arrays ou propriedades de objetos para **atribuição em variáveis** de forma mais simples.

# Objetos

Definição: Um objeto é uma coleção de propriedades, onde em cada propriedade temos uma chave(nome) atrelada de um valor, podendo conter métodos. Aceitando vários tipos de dados nos valores.

1. #### Object Literal
Definição: Forma de escrever objetos de **uma forma mais curta e direta**, sendo ideal para objetos com propriedades fixas que não vão precisar ser reutilizáveis. **Melhor aplicação quando tem dados estáticos.**

4. #### Mutação de Objetos
Definição: Consiste em atrelar uma referência no mesmo local na memória onde contém um objeto, através de uma variável, não criando uma cópia e sim uma referência, se uma for alterada  a outra vai ser também.

 #####  4.1 - Object.freeze()
 Definição: Congela o objeto impedindo dele ser alterado, deletado, mas se possuir objetos aninhados a ele podem ser alterador. Fazendo um **shallow freeze**

 ##### 4.2 - Deep Freeze
 Definição: Congela todo objeto em si, não podendo faze alteração nenhuma chamado **deep freeze**

5. #### For..In
Definição: **Percorre os indíces ou chaves** de um **objeto** ou array. Recomendado não utilizar em array, pois pode gerar problemas de criação de chaves extras.

6. #### Destructuring
Definição: Consiste na **extração de valores** de arrays ou propriedades de objetos para **atribuição em variáveis** de forma mais simples. Podendo inserir valor default e atribuir um nome para o valor na chave do objeto.

