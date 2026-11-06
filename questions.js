/* Banco do Quizztock: promoção, ruptura, reposição, estoque e validade. */
window.QUIZZTOCK_QUESTIONS = [
  { id: 1, category: "Análise", text: "Quais dados o QuiStock cruza para avaliar o risco de perda de um produto?", options: [
    { text: "Estoque disponível, ritmo de vendas e prazo de validade.", correct: true },
    { text: "Preço de venda, fornecedor e tamanho da embalagem.", correct: false },
    { text: "Estoque disponível, margem de lucro e número de funcionários.", correct: false },
    { text: "Prazo de validade, preço e localização da loja.", correct: false }
  ] },
  { id: 2, category: "Análise", text: "Um produto tem 60 unidades, vende 5 por dia e vence em 6 dias. Qual risco o sistema identifica?", options: [
    { text: "Risco de sobra, pois o ritmo atual venderia cerca de 30 unidades.", correct: true },
    { text: "Risco de ruptura, pois as 60 unidades acabam antes de seis dias.", correct: false },
    { text: "Nenhum risco, pois seis dias são suficientes para qualquer estoque.", correct: false },
    { text: "Risco de falta, pois a validade reduz a quantidade disponível.", correct: false }
  ] },
  { id: 3, category: "Análise", text: "Dois itens têm o mesmo estoque e vencem no mesmo dia. Qual apresenta maior risco de perda?", options: [
    { text: "O item com menor ritmo de vendas.", correct: true },
    { text: "O item com maior ritmo de vendas.", correct: false },
    { text: "Os dois sempre apresentam exatamente o mesmo risco.", correct: false },
    { text: "O item que foi cadastrado primeiro no sistema.", correct: false }
  ] },
  { id: 4, category: "Ruptura", text: "No contexto do estoque, o que significa risco de ruptura?", options: [
    { text: "A possibilidade de o produto acabar antes da próxima reposição.", correct: true },
    { text: "A possibilidade de o produto vencer antes de ser vendido.", correct: false },
    { text: "A necessidade de aplicar uma promoção por excesso de estoque.", correct: false },
    { text: "A existência de produtos com datas de validade diferentes.", correct: false }
  ] },
  { id: 5, category: "Ruptura", text: "Há 12 unidades de um item, a venda média é de 8 por dia e o novo pedido chega em 4 dias. O que tende a acontecer?", options: [
    { text: "O produto pode acabar antes de o novo pedido chegar.", correct: true },
    { text: "O produto deve sobrar, pois 12 unidades duram quatro dias.", correct: false },
    { text: "O estoque ficará estável até a entrega do pedido.", correct: false },
    { text: "A validade do produto será o único risco relevante.", correct: false }
  ] },
  { id: 6, category: "Ruptura", text: "Quando o sistema prevê ruptura de um produto com vendas altas, qual ação pode ser recomendada?", options: [
    { text: "Rever a quantidade ou antecipar a próxima reposição.", correct: true },
    { text: "Solicitar uma promoção para acelerar ainda mais as vendas.", correct: false },
    { text: "Reduzir o próximo pedido para evitar excesso.", correct: false },
    { text: "Aguardar o estoque zerar antes de analisar a demanda.", correct: false }
  ] },
  { id: 7, category: "Promoções", text: "Um funcionário identifica um item com risco de vencer. Qual é o próximo passo para propor uma promoção?", options: [
    { text: "Enviar uma solicitação para o gerente avaliar.", correct: true },
    { text: "Aplicar o desconto imediatamente e registrar depois.", correct: false },
    { text: "Excluir o item do estoque antes da aprovação.", correct: false },
    { text: "Aumentar o próximo pedido para compensar a promoção.", correct: false }
  ] },
  { id: 8, category: "Promoções", text: "Uma solicitação de promoção ainda está pendente. O que isso significa?", options: [
    { text: "O gerente ainda precisa aprovar ou recusar a solicitação.", correct: true },
    { text: "O desconto já está ativo para todos os clientes.", correct: false },
    { text: "O sistema aprovou a promoção automaticamente.", correct: false },
    { text: "O produto foi removido da análise de estoque.", correct: false }
  ] },
  { id: 9, category: "Promoções", text: "Por que a promoção não é aplicada automaticamente ao detectar risco de perda?", options: [
    { text: "Porque o gerente deve avaliar e validar a decisão.", correct: true },
    { text: "Porque o funcionário precisa alterar a validade primeiro.", correct: false },
    { text: "Porque toda promoção depende diretamente do fornecedor.", correct: false },
    { text: "Porque o sistema só permite promoções após o vencimento.", correct: false }
  ] },
  { id: 10, category: "Reposição", text: "Estoque alto, vendas baixas e validade curta indicam qual ajuste para o próximo pedido?", options: [
    { text: "Avaliar a redução da quantidade comprada.", correct: true },
    { text: "Aumentar a quantidade para manter o estoque alto.", correct: false },
    { text: "Repetir o pedido anterior sem considerar as vendas.", correct: false },
    { text: "Antecipar o pedido para evitar uma ruptura.", correct: false }
  ] },
  { id: 11, category: "Reposição", text: "Um produto vende rapidamente e costuma acabar antes da reposição. Qual ajuste pode fazer sentido?", options: [
    { text: "Aumentar a quantidade ou antecipar o próximo pedido.", correct: true },
    { text: "Diminuir a quantidade para reduzir o movimento do estoque.", correct: false },
    { text: "Solicitar uma promoção por risco de sobra.", correct: false },
    { text: "Manter o pedido atual, mesmo com faltas frequentes.", correct: false }
  ] },
  { id: 12, category: "Reposição", text: "Por que o QuiStock pode recomendar pedidos diferentes para produtos da mesma categoria?", options: [
    { text: "Porque cada produto pode ter estoque, vendas e validade diferentes.", correct: true },
    { text: "Porque produtos da mesma categoria devem ter preços diferentes.", correct: false },
    { text: "Porque o sistema escolhe quantidades de forma aleatória.", correct: false },
    { text: "Porque a categoria determina sozinha a quantidade comprada.", correct: false }
  ] },
  { id: 13, category: "ERP", text: "Qual é a função da integração do QuiStock com o ERP da loja?", options: [
    { text: "Obter dados de produtos, estoque e vendas para realizar análises.", correct: true },
    { text: "Substituir todas as funções de compra e venda do ERP.", correct: false },
    { text: "Aplicar descontos diretamente no caixa sem aprovação.", correct: false },
    { text: "Cadastrar clientes para enviar ofertas automáticas.", correct: false }
  ] },
  { id: 14, category: "ERP", text: "Como o QuiStock usa os dados recebidos do ERP?", options: [
    { text: "Transforma os dados em alertas e recomendações para a equipe.", correct: true },
    { text: "Altera automaticamente todos os pedidos da loja.", correct: false },
    { text: "Descarta o histórico e considera somente o estoque atual.", correct: false },
    { text: "Substitui a aprovação do gerente nas promoções.", correct: false }
  ] },
  { id: 15, category: "Papéis", text: "Qual alternativa diferencia corretamente os papéis do funcionário e do gerente?", options: [
    { text: "O funcionário solicita a promoção; o gerente avalia a solicitação.", correct: true },
    { text: "O gerente solicita a promoção; o funcionário define o desconto final.", correct: false },
    { text: "O funcionário aplica a promoção; o gerente apenas recebe um aviso.", correct: false },
    { text: "Os dois podem aplicar promoções sem nenhuma validação.", correct: false }
  ] },
  { id: 16, category: "Validade", text: "Por que observar somente a data de validade não basta para prever uma perda?", options: [
    { text: "Porque também é necessário comparar o estoque com o ritmo de vendas.", correct: true },
    { text: "Porque a validade só importa depois que o produto vence.", correct: false },
    { text: "Porque todos os produtos vendem na mesma velocidade.", correct: false },
    { text: "Porque apenas o valor do produto define o risco.", correct: false }
  ] },
  { id: 17, category: "Validade", text: "Dois produtos têm o mesmo estoque e vendem no mesmo ritmo. Um vence em 3 dias e o outro em 20. Qual exige mais atenção?", options: [
    { text: "O que vence em 3 dias, pois há menos tempo para vender o estoque.", correct: true },
    { text: "O que vence em 20 dias, pois ficará mais tempo na loja.", correct: false },
    { text: "Os dois apresentam o mesmo risco porque vendem no mesmo ritmo.", correct: false },
    { text: "Nenhum, pois a quantidade em estoque é igual.", correct: false }
  ] },
  { id: 18, category: "Decisões", text: "Um produto está perto de vencer, tem estoque alto e vende pouco. Qual conjunto de ações é mais coerente?", options: [
    { text: "Solicitar promoção e avaliar a redução do próximo pedido.", correct: true },
    { text: "Aumentar o próximo pedido e manter o preço atual.", correct: false },
    { text: "Antecipar a reposição e aguardar as vendas aumentarem.", correct: false },
    { text: "Aplicar desconto sem aprovação e repetir a mesma compra.", correct: false }
  ] },
  { id: 19, category: "Decisões", text: "Um produto vende rápido, tem estoque baixo e validade longa. Qual recomendação combina com esse cenário?", options: [
    { text: "Avaliar uma reposição maior ou mais rápida para evitar ruptura.", correct: true },
    { text: "Solicitar promoção para reduzir ainda mais o estoque.", correct: false },
    { text: "Diminuir o próximo pedido por risco de vencimento.", correct: false },
    { text: "Aguardar o estoque acabar antes de tomar qualquer ação.", correct: false }
  ] },
  { id: 20, category: "Decisões", text: "Qual sequência representa melhor o funcionamento do QuiStock?", options: [
    { text: "Receber dados, identificar riscos e apoiar promoções ou reposições.", correct: true },
    { text: "Aplicar descontos, alterar validades e depois consultar o estoque.", correct: false },
    { text: "Esperar faltar produto, registrar a ruptura e repetir o pedido.", correct: false },
    { text: "Substituir o ERP, eliminar aprovações e automatizar todas as compras.", correct: false }
  ] }
];
