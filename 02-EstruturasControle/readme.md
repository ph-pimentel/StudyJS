# Estruturas de Controle

## Estruturas de Decisão
#### Definição -> Controlando blocos de códigos através de condicionais.
1. #### IF <br>
Definição: Sendo uma estruturas de controle, nos possibilita gerenciar o fluxo do código por meio de uma condição, se a condição for **true** ela retorna o bloco de código, mas se ela for **false** não retorna o bloco de código o 'segurando' até a condição ser verdadeira.

2. #### Else <br>
Definição: Retorna um bloco de código caso a condição do IF for constada como **false**, sendo uma forma de 'escape' para caso a condição não seja **true**.

3. #### Else If <br>
Definição: Sendo uma estruturas de controle que utiliza tanto o if e else, possibilitando criar fluxos de códigos com mais controle, tendo a opção de enviar um certo bloco de código caso a condição seja **true** e tendo a opção de enviar outro bloco de código caso ela seja **false**.

4. #### Switch <br>
Definição: Sendo uma estrutura de controle mais simples e organizada em comparação ao realizar múltiplos if e else if, tendo como valor a ser comparado uma (**expressão**) ou melhor dizendo um valor fixo que vai ser comparado com várias outras possíbilidades (**cases**) de valores que poderiam ser aquela (expressão) que retornam bloco de código expecíficos para cada uma.
Necessitando do **break** em cada (**cases**) por conta que o Switch executa todos os cases mesmo a (**expressão**) sendo igual ao (**case**).
Possível acrescentamento do **default** que caso não tenha nenhum **case** igual a **expressão** estabelecida ele executa um retorno padrão.


## Estruturas de Repetição
#### Definição -> Executa um bloco de código determinadas vezes até a condição continuar **true**
1. #### While <br>
Definição: Sendo uma estrutura de controle, que através da condição passada ela faz uma repetição do bloco de código, se a condição for **true** ela repete o bloco de código até a condição ficar **false**, havendo a verificação da condição no começo.

2. #### Do While <br>
Definição: Sendo uma estrutura de controle bem parecida com while, mas tendo o diferencial que não ocorre a verificação da condição primeiro e sim a execução de um bloco de código, posteriormente ocorre a verificação da condição.

3. #### For <br>
Definição: Sendo uma estrutura de controle presente na categoria de estrutura de repetição mais completa, onde em uma única linha adicionamos uma:
1. **Declaração** do incrementador.
2. **Condição** daquele loop.
3. **Progressão** do loop após cada repetição.

## Estruturas de controle de desvio
#### Definição -> Alteram o fluxo do código, o **interrompendo** ou **pulando** partes do código.
1. #### Break <br>
Definição: Utilizado principalmente em **estruturas de repetição** para interromper o loop do código caso a condição determinada para que ocorra o **break** seja **true**.

2. #### Continue <br>
Definição: Utilizado para 'pular' ou **continuar** o loop em estruturas de repetição quando a condição for **false**, ou seja se a condição for true ele retorna, caso contrário ele **continua** o loop.
