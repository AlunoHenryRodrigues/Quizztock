/*
 * Banco oficial do Quizztock.
 * Para editar: altere o texto e as opções mantendo exatamente uma opção com correct: true.
 * As categorias ajudam o sorteio a compor partidas variadas.
 */
window.QUIZZTOCK_QUESTIONS = [
  {
    id: 1, category: "Análise de estoque",
    text: "Um produto possui 100 unidades em estoque, vende em média 8 unidades por dia e vencerá em 5 dias. Qual seria a principal preocupação apontada pelo QuiStock?",
    options: [
      { text: "As 100 unidades devem acabar antes do vencimento.", correct: false },
      { text: "Pode sobrar estoque até o vencimento.", correct: true },
      { text: "A data de validade, sozinha, indica vendas suficientes.", correct: false },
      { text: "O próximo pedido deve manter a quantidade atual de compra.", correct: false }
    ]
  },
  {
    id: 2, category: "Reposição",
    text: "Um produto possui 30 unidades em estoque, vende cerca de 10 unidades diariamente e ainda tem 12 dias de validade. Qual recomendação pode fazer sentido para a próxima reposição, considerando que a demanda continue estável?",
    options: [
      { text: "Reduzir o pedido, pois ainda há 12 dias de validade.", correct: false },
      { text: "Pedir promoção, pois as 30 unidades ficarão paradas.", correct: false },
      { text: "Avaliar aumentar o próximo pedido.", correct: true },
      { text: "Manter o pedido atual sem considerar a demanda diária.", correct: false }
    ]
  },
  {
    id: 3, category: "Análise de estoque",
    text: "Por que analisar apenas a data de validade não é suficiente para identificar possíveis desperdícios?",
    options: [
      { text: "Porque é preciso cruzar validade, quantidade em estoque e ritmo de vendas do produto.", correct: true },
      { text: "Porque o preço define sozinho o risco de desperdício.", correct: false },
      { text: "Porque a validade só importa depois que o produto vence.", correct: false },
      { text: "Porque a quantidade vendida é igual para todo produto.", correct: false }
    ]
  },
  {
    id: 4, category: "Integração ERP",
    text: "Qual é a importância da integração do QuiStock com o ERP?",
    options: [
      { text: "Substituir o ERP nas operações de compra e caixa.", correct: false },
      { text: "Permitir compras diretas dos clientes no QuiStock.", correct: false },
      { text: "Enviar promoções aprovadas diretamente aos consumidores.", correct: false },
      { text: "Usar dados do ERP para analisar estoque e vendas.", correct: true }
    ]
  },
  {
    id: 5, category: "Promoções",
    text: "Um funcionário identifica um produto com risco de vencer antes de ser vendido e deseja aplicar uma promoção. Qual fluxo representa o funcionamento apresentado do QuiStock?",
    options: [
      { text: "O funcionário aplica o desconto ao encontrar o risco.", correct: false },
      { text: "O funcionário pede a promoção ao gerente.", correct: true },
      { text: "O aplicativo retira o produto do estoque para evitar perdas.", correct: false },
      { text: "O sistema aumenta a próxima compra antes da aprovação.", correct: false }
    ]
  },
  {
    id: 6, category: "Promoções",
    text: "Por que a aprovação do gerente é importante no processo de solicitação de promoções?",
    options: [
      { text: "Para o cliente decidir qual promoção será aplicada.", correct: false },
      { text: "Para o gerente registrar a validade após a promoção.", correct: false },
      { text: "Para que o gerente avalie e valide a solicitação antes de qualquer promoção ser aplicada.", correct: true },
      { text: "Para impedir que o estoque seja analisado sem desconto.", correct: false }
    ]
  },
  {
    id: 7, category: "Risco de perda",
    text: "Dois produtos possuem 60 unidades no estoque e vencem em 6 dias. O produto A vende 15 unidades por dia, enquanto o B vende 5. Qual está mais exposto ao risco de sobrar antes da validade?",
    options: [
      { text: "Produto B: suas vendas podem não esgotar o estoque.", correct: true },
      { text: "Produto A: seu ritmo de vendas esgota o estoque antes.", correct: false },
      { text: "Os dois: ter a mesma validade implica o mesmo risco.", correct: false },
      { text: "Nenhum: seis dias bastam para ambos venderem tudo.", correct: false }
    ]
  },
  {
    id: 8, category: "Ações preventivas",
    text: "Um produto apresenta estoque elevado, vendas muito baixas e prazo de validade curto. Qual conjunto de ações é mais coerente com o QuiStock?",
    options: [
      { text: "Aumentar o pedido e acompanhar as vendas até vencer.", correct: false },
      { text: "Manter o pedido e aguardar a validade se aproximar.", correct: false },
      { text: "Retirar o item do estoque e repetir a compra atual.", correct: false },
      { text: "Avaliar promoção e reduzir o pedido seguinte do item.", correct: true }
    ]
  },
  {
    id: 9, category: "Fluxos",
    text: "O QuiStock organiza produtos em diferentes fluxos. Qual informação é fundamental nessa classificação?",
    options: [
      { text: "A distância entre loja e fornecedor do produto.", correct: false },
      { text: "A relação entre vendas e validade.", correct: true },
      { text: "O preço de compra e a margem praticada na loja.", correct: false },
      { text: "O número de funcionários disponíveis no estoque.", correct: false }
    ]
  },
  {
    id: 10, category: "Análise de estoque",
    text: "Um produto tem 80 unidades, média de vendas de 20 unidades por dia e validade de 10 dias. O que a análise sugere, se o ritmo atual continuar?",
    options: [
      { text: "Dez dias são insuficientes para vender as 80 unidades.", correct: false },
      { text: "A validade curta já justifica solicitar promoção.", correct: false },
      { text: "As 80 unidades tendem a acabar em cerca de quatro dias, antes do vencimento.", correct: true },
      { text: "O ritmo de vendas exige reduzir o pedido seguinte.", correct: false }
    ]
  },
  {
    id: 11, category: "FEFO",
    text: "Qual é a principal diferença entre usar somente o FEFO tradicional e aplicar a análise proposta pelo QuiStock?",
    options: [
      { text: "Além da validade, considera vendas para prever perdas futuras.", correct: true },
      { text: "Passa a priorizar apenas os produtos com maior valor de compra.", correct: false },
      { text: "Usa a validade para recomendar a mesma compra em toda reposição.", correct: false },
      { text: "Troca a análise de estoque pela ordem de chegada dos produtos.", correct: false }
    ]
  },
  {
    id: 12, category: "Promoções",
    text: "Um funcionário envia uma solicitação de promoção, mas o gerente ainda não tomou uma decisão. O que pode ser concluído?",
    options: [
      { text: "O desconto já pode entrar em vigor na loja.", correct: false },
      { text: "O item deixa de participar da análise de estoque.", correct: false },
      { text: "A próxima compra será reduzida automaticamente.", correct: false },
      { text: "A solicitação aguarda a decisão do gerente.", correct: true }
    ]
  },
  {
    id: 13, category: "Reposição",
    text: "Qual situação pode justificar uma recomendação para diminuir a quantidade do próximo pedido de determinado produto?",
    options: [
      { text: "As vendas atuais superam o estoque disponível.", correct: false },
      { text: "Pode sobrar produto antes de vencer.", correct: true },
      { text: "A procura cresce e o produto começa a faltar.", correct: false },
      { text: "A loja pretende manter a quantidade atual em todas as compras.", correct: false }
    ]
  },
  {
    id: 14, category: "Risco de perda",
    text: "Um produto costumava vender rapidamente, mas sua média de vendas diminuiu bastante. Qual é o impacto esperado na análise do QuiStock, caso os demais fatores permaneçam iguais?",
    options: [
      { text: "Com as vendas mais lentas e a mesma validade, pode sobrar mais produto antes de vencer.", correct: true },
      { text: "O prazo de validade fica menor no cadastro do ERP.", correct: false },
      { text: "O pedido seguinte deve aumentar para recuperar as vendas.", correct: false },
      { text: "O risco de perda cai, pois há menos saídas do estoque.", correct: false }
    ]
  },
  {
    id: 15, category: "Fefo",
    text: "Qual das alternativas descreve corretamente o papel do Fefo dentro do aplicativo?",
    options: [
      { text: "Decidir sozinho quais promoções entram em vigor.", correct: false },
      { text: "Controlar o estoque no lugar do sistema de gestão.", correct: false },
      { text: "Responder dúvidas como assistente virtual do app.", correct: true },
      { text: "Atualizar a validade informada para cada produto.", correct: false }
    ]
  },
  {
    id: 16, category: "Decisões",
    text: "Qual alternativa apresenta uma decisão coerente com a proposta do QuiStock?",
    options: [
      { text: "Repetir o pedido anterior para manter o estoque estável.", correct: false },
      { text: "Promover os itens que vendem mais, sem consultar a validade.", correct: false },
      { text: "Ordenar ações pelo preço unitário de cada produto.", correct: false },
      { text: "Usar vendas e validade para orientar decisões de estoque.", correct: true }
    ]
  },
  {
    id: 17, category: "ODS 12.3",
    text: "O QuiStock contribui para a meta 12.3 dos Objetivos de Desenvolvimento Sustentável. Qual resultado está mais relacionado a essa contribuição?",
    options: [
      { text: "Comprar mais itens para ampliar a oferta em todas as lojas.", correct: false },
      { text: "Reduzir perdas de alimentos com uma gestão eficiente.", correct: true },
      { text: "Automatizar decisões para dispensar a avaliação humana.", correct: false },
      { text: "Diminuir promoções para preservar os preços de venda.", correct: false }
    ]
  },
  {
    id: 18, category: "Validade",
    text: "Considere dois produtos com a mesma média de vendas e a mesma quantidade em estoque. Um vence em 3 dias e o outro em 20 dias. Qual conclusão é mais coerente?",
    options: [
      { text: "O item com apenas três dias restantes pode ter maior risco de sobra até o vencimento.", correct: true },
      { text: "Os dois têm o mesmo risco, pois vendem no mesmo ritmo.", correct: false },
      { text: "O que vence em 20 dias precisa de promoção primeiro.", correct: false },
      { text: "O que vence em 3 dias tem menor risco por sair antes.", correct: false }
    ]
  },
  {
    id: 19, category: "Reposição",
    text: "Por que o QuiStock pode sugerir aumentar a compra de determinados produtos e diminuir a de outros?",
    options: [
      { text: "Porque a loja define pedidos pelo preço de cada item.", correct: false },
      { text: "Porque o estoque ideal deve ser igual para todo item.", correct: false },
      { text: "Porque vendas e estoque indicam reposições distintas.", correct: true },
      { text: "Porque a validade curta indica sempre uma compra maior.", correct: false }
    ]
  },
  {
    id: 20, category: "Decisões",
    text: "Uma loja percebe que alguns produtos estão próximos de vencer e outros estão sendo vendidos rapidamente. Qual alternativa representa melhor a contribuição do QuiStock para essa situação?",
    options: [
      { text: "Classificar os itens apenas pela data de vencimento.", correct: false },
      { text: "Aplicar descontos em toda categoria com estoque alto.", correct: false },
      { text: "Suspender a reposição até acabar o estoque atual.", correct: false },
      { text: "Apontar riscos e orientar promoções e novos pedidos.", correct: true }
    ]
  }
];
