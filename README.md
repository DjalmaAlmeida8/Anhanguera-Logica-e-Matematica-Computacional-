# Anhanguera-Logica-e-Matematica-Computacional-


Título da Apresentação
_____________________________________________________________________________
Simulador de Fatura de Cartão de Crédito

Descrição do Projeto:
Este projeto foi solicitado pela professora Maiara Sacramento do 2° Semestre da faculdade Unime Anhanguera do polo Paralela - Salvador Bahia.
Foi abordado a possibilidade de criar em três métodos #SouDev, #SouData e #SouSolver.
#SouDev: Implemente um programa que simule a lógica do cartão de crédito, conforme o cenário descrito. O código pode ser feito em qualquer linguagem de programação.
#SouData: Crie um esquema de Banco de Dados que registre as informações sobre as compras, o valor da fatura e a data de pagamento.
#SouSolver: Crie um fluxograma ou diagrama de processos que represente o funcionamento da lógica do pagamento e da cobrança de juros. Isso ajudará os analistas e front-end developers a visualizar o processo.

Sendo assim, para realizar meu projeto optei em realizar como dev fron-end, no meu projeto consiste no desenvolvimento de uma aplicação web que simula a lógica de cálculo de uma fatura de cartão de crédito.

O sistema permite que o usuário registre múltiplas compras, confira o valor acumulado, defina o dia de pagamento e calcule possíveis juros em caso de atraso no pagamento da fatura que é dia 25.

Este simulador foi implementado usando HTML, CSS e JavaScript, com foco em criar uma interface amigável e interativa que facilite a compreensão de conceitos de cálculo de juros e controle de despesas.

Objetivo

Desenvolver uma aplicação prática que simule a lógica do cálculo de uma fatura de cartão de crédito com juros. O projeto visa a compreensão e prática de conceitos como:


1. Acumulação de valores para controle de despesas.
2. Aplicação de juros com base em um prazo de pagamento.
3. Manipulação de entradas de dados e exibição dinâmica de resultados.
4. Criação de uma interface amigável para simulação de um cenário real.

Procedimentos realizados 

1. Registro de Compras: Solicitar o valor de cada compra do usuário, acumulando esses valores na fatura.
2. Pagamento e Cálculo de Juros: Perguntar o dia do pagamento da fatura e:
Caso o pagamento seja até o dia 25, não aplicar juros.
Caso o pagamento seja após o dia 25, aplicar uma taxa de 3% sobre o valor total da fatura e mais 1% adicional por dia de atraso após o dia 25.
3. Exibição de Total Acumulado: Mostrar o valor total acumulado das compras para o usuário.
4. Opção de Limpeza de Dados: Adicionar uma opção para limpar todos os dados de compras e reiniciar o processo.

Implementação

A aplicação foi construída usando HTML, CSS e JavaScript, com os seguintes componentes:

1. HTML (Estrutura)
Campos de entrada para o valor de cada compra, pergunta de "última compra" e dia de pagamento.
Botões para adicionar compras, calcular fatura e limpar dados.
Área de exibição para o valor acumulado e o resultado final, que exibe o valor da fatura com ou sem juros.

2. CSS (Estilização)
Layout centralizado e estilizado para facilitar a interação.
Uso de cores e efeitos visuais nos botões para indicar diferentes ações, como cálculo da fatura e limpeza de dados.
Criação de uma interface limpa e organizada para uma experiência de usuário agradável.


3. JavaScript (Lógica de Funcionalidade)
Adição de Compras: Cada compra é registrada em um array compras. O usuário é perguntado se é a última compra. Caso seja, os campos de entrada de compras são desativados.
Cálculo do Total Acumulado: A função atualizarTotal() calcula e exibe o valor acumulado das compras no campo de "Total Acumulado".
Cálculo de Fatura: A função calcularFatura() soma todas as compras e aplica juros, se o pagamento for após o dia 25:
Aplica uma taxa fixa de 3% sobre o total.
Adiciona 1% ao total para cada dia de atraso após o dia 25.
Limpeza dos Dados: A função limparDados() redefine o array compras, limpa os campos de entrada, e redefine o total acumulado para permitir uma nova simulação.

Demonstração do Funcionamento

1. Adição de Compras:
O usuário insere o valor de cada compra, que é registrado e acumulado.
Ao indicar "sim" para a última compra, o sistema desativa a entrada de compras, indicando que o processo pode seguir para o pagamento.

2. Exibição do Total Acumulado:
A cada nova compra, o valor total acumulado é atualizado e exibido automaticamente para o usuário.

3. Cálculo da Fatura:
O usuário insere o dia de pagamento.
Caso o pagamento ocorra até o dia 25, o sistema exibe o valor final da fatura sem juros.
Se o pagamento ocorrer após o dia 25, o sistema aplica os juros conforme as regras estabelecidas e exibe o valor final da fatura com juros.

4. Limpeza dos Dados:
Ao clicar em "Limpar Dados", todos os valores e campos de entrada são resetados, permitindo uma nova simulação.




Conclusão e Benefícios

Este simulador de fatura de cartão de crédito é um exemplo prático de como conceitos de programação podem ser aplicados para criar uma solução interativa e funcional. A aplicação permite que o usuário compreenda como o atraso no pagamento impacta os juros de uma fatura de cartão de crédito, servindo como uma ferramenta de aprendizado e conscientização sobre a importância do controle financeiro e pagamento em dia.

Essa prática abrange conceitos de programação, estrutura de dados (array de compras), manipulação de DOM, e cálculos financeiros, preparando os desenvolvedores para enfrentar problemas práticos e de relevância cotidiana.
