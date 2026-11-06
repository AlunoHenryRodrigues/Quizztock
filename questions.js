/* Banco do Quizztock: perguntas sobre os pontos apresentados no estande. */
window.QUIZZTOCK_QUESTIONS = [
  { id: 1, category: "QuiStock", text: "Qual alternativa resume melhor a proposta do QuiStock?", options: [
    { text: "Cruzar dados do estoque para antecipar perdas e apoiar decisões.", correct: true },
    { text: "Registrar produtos vencidos depois que a perda já aconteceu.", correct: false },
    { text: "Automatizar compras sem considerar a demanda de cada item.", correct: false },
    { text: "Substituir o sistema de gestão usado pela loja.", correct: false }
  ] },
  { id: 2, category: "Análise", text: "Para estimar se um produto pode sobrar antes de vencer, quais dados devem ser analisados juntos?", options: [
    { text: "Quantidade em estoque, ritmo de vendas e prazo de validade.", correct: true },
    { text: "Preço de venda, fornecedor e tamanho da embalagem.", correct: false },
    { text: "Quantidade em estoque, preço e número de funcionários.", correct: false },
    { text: "Prazo de validade, margem de lucro e localização da loja.", correct: false }
  ] },
  { id: 3, category: "Risco de perda", text: "Um produto tem 60 unidades, vende 5 por dia e vence em 6 dias. O que o QuiStock indicaria?", options: [
    { text: "Há risco de sobra, pois cerca de 30 unidades seriam vendidas nesse período.", correct: true },
    { text: "Não há risco, pois qualquer produto com seis dias de validade vende a tempo.", correct: false },
    { text: "O estoque deve acabar em três dias, antes do vencimento.", correct: false },
    { text: "A próxima compra deve aumentar para manter as vendas.", correct: false }
  ] },
  { id: 4, category: "Reposição", text: "Um item tem 20 unidades, vende 8 por dia e ainda possui 10 dias de validade. Qual recomendação pode fazer sentido?", options: [
    { text: "Avaliar aumentar a próxima reposição, se a demanda continuar.", correct: true },
    { text: "Reduzir a próxima reposição porque há dez dias de validade.", correct: false },
    { text: "Solicitar promoção porque o produto está vendendo rápido.", correct: false },
    { text: "Manter sempre a mesma compra, sem considerar as vendas.", correct: false }
  ] },
  { id: 5, category: "Análise", text: "Dois produtos vencem no mesmo dia e têm o mesmo estoque. Qual tende a apresentar maior risco de perda?", options: [
    { text: "O que possui menor ritmo de vendas.", correct: true },
    { text: "O que possui maior ritmo de vendas.", correct: false },
    { text: "Os dois sempre apresentam exatamente o mesmo risco.", correct: false },
    { text: "Apenas o produto com maior preço.", correct: false }
  ] },
  { id: 6, category: "Promoções", text: "Um funcionário encontra um produto com risco de vencer. Qual é o fluxo correto para uma promoção?", options: [
    { text: "O funcionário solicita a promoção e o gerente avalia a decisão.", correct: true },
    { text: "O funcionário aplica qualquer desconto e avisa o gerente depois.", correct: false },
    { text: "O QuiStock altera o preço automaticamente, sem aprovação.", correct: false },
    { text: "O fornecedor escolhe a promoção dentro do aplicativo.", correct: false }
  ] },
  { id: 7, category: "Promoções", text: "Enquanto uma solicitação de promoção aguarda o gerente, o que pode ser concluído?", options: [
    { text: "A promoção ainda não foi aprovada nem aplicada.", correct: true },
    { text: "O desconto já está valendo para os clientes.", correct: false },
    { text: "O produto deixou de fazer parte do estoque.", correct: false },
    { text: "A próxima compra já foi reduzida automaticamente.", correct: false }
  ] },
  { id: 8, category: "Promoções", text: "Por que a avaliação do gerente faz parte do processo de promoção?", options: [
    { text: "Para validar a solicitação antes que o desconto seja aplicado.", correct: true },
    { text: "Para substituir os dados de estoque usados pelo sistema.", correct: false },
    { text: "Para alterar a data de validade cadastrada no ERP.", correct: false },
    { text: "Para impedir que o funcionário identifique riscos.", correct: false }
  ] },
  { id: 9, category: "ERP", text: "Qual é o papel da integração do QuiStock com o ERP?", options: [
    { text: "Fornecer dados de estoque e vendas para as análises.", correct: true },
    { text: "Permitir que o QuiStock substitua todas as funções do ERP.", correct: false },
    { text: "Enviar promoções diretamente aos clientes da loja.", correct: false },
    { text: "Definir sozinho os preços e as compras futuras.", correct: false }
  ] },
  { id: 10, category: "ERP", text: "Por que o QuiStock não precisa substituir o ERP da loja?", options: [
    { text: "Porque ele usa os dados do ERP e acrescenta análises para apoiar decisões.", correct: true },
    { text: "Porque o ERP já prevê sozinho todo risco de desperdício.", correct: false },
    { text: "Porque o QuiStock funciona apenas como cadastro de produtos.", correct: false },
    { text: "Porque os dois sistemas não compartilham nenhuma informação.", correct: false }
  ] },
  { id: 11, category: "FEFO", text: "O que diferencia a análise do QuiStock de olhar somente a ordem de validade?", options: [
    { text: "Ela também considera o ritmo de vendas e a quantidade disponível.", correct: true },
    { text: "Ela ignora a validade e considera somente o preço.", correct: false },
    { text: "Ela recomenda promoção para todo item próximo do vencimento.", correct: false },
    { text: "Ela mantém a mesma reposição para todos os produtos.", correct: false }
  ] },
  { id: 12, category: "Fefo", text: "Qual é o papel do Fefo dentro do aplicativo?", options: [
    { text: "Atuar como mascote e assistente virtual do QuiStock.", correct: true },
    { text: "Aprovar as promoções no lugar do gerente.", correct: false },
    { text: "Controlar o caixa e registrar todas as vendas.", correct: false },
    { text: "Alterar automaticamente os pedidos da loja.", correct: false }
  ] },
  { id: 13, category: "Risco de perda", text: "Se o ritmo de vendas de um produto cai e os outros dados não mudam, o que tende a acontecer?", options: [
    { text: "O risco de sobrar produto antes do vencimento aumenta.", correct: true },
    { text: "O prazo de validade do produto aumenta no sistema.", correct: false },
    { text: "O estoque passa a acabar mais rapidamente.", correct: false },
    { text: "O risco de perda desaparece por haver menos vendas.", correct: false }
  ] },
  { id: 14, category: "Ações preventivas", text: "Estoque alto, vendas baixas e validade curta formam qual cenário?", options: [
    { text: "Alto risco de perda, que pode justificar promoção e revisão da reposição.", correct: true },
    { text: "Baixo risco de perda, pois ainda existem muitas unidades.", correct: false },
    { text: "Sinal de falta imediata, que exige aumentar a compra.", correct: false },
    { text: "Situação normal, que dispensa qualquer acompanhamento.", correct: false }
  ] },
  { id: 15, category: "Reposição", text: "Quando faz sentido sugerir uma quantidade menor no próximo pedido?", options: [
    { text: "Quando a análise indica que pode sobrar produto antes de vencer.", correct: true },
    { text: "Quando as vendas estão altas e o produto costuma faltar.", correct: false },
    { text: "Quando a demanda supera rapidamente o estoque disponível.", correct: false },
    { text: "Sempre que o produto possui prazo de validade longo.", correct: false }
  ] },
  { id: 16, category: "Reposição", text: "Quando uma reposição maior pode ser considerada?", options: [
    { text: "Quando o produto vende rápido e tende a acabar antes da próxima reposição.", correct: true },
    { text: "Quando há muitas unidades paradas perto do vencimento.", correct: false },
    { text: "Quando o ritmo de vendas cai e o estoque continua alto.", correct: false },
    { text: "Quando uma promoção ainda aguarda aprovação.", correct: false }
  ] },
  { id: 17, category: "Validade", text: "Por que a data de validade, sozinha, não determina o risco de perda?", options: [
    { text: "Porque o risco depende também do estoque e do ritmo de vendas.", correct: true },
    { text: "Porque a validade só importa depois que o produto vence.", correct: false },
    { text: "Porque todo produto vende no mesmo ritmo.", correct: false },
    { text: "Porque apenas o preço determina se haverá sobra.", correct: false }
  ] },
  { id: 18, category: "Decisões", text: "Qual decisão está mais alinhada à proposta do QuiStock?", options: [
    { text: "Usar vendas, estoque e validade para orientar promoções e reposições.", correct: true },
    { text: "Repetir sempre o último pedido para manter um padrão.", correct: false },
    { text: "Aplicar o mesmo desconto em todos os itens de uma categoria.", correct: false },
    { text: "Esperar o vencimento para então registrar a perda.", correct: false }
  ] },
  { id: 19, category: "ODS 12.3", text: "De que forma o QuiStock contribui para a meta 12.3 dos ODS?", options: [
    { text: "Ajudando a prevenir perdas e o desperdício de alimentos.", correct: true },
    { text: "Aumentando a quantidade comprada de todos os produtos.", correct: false },
    { text: "Retirando a avaliação humana das decisões da loja.", correct: false },
    { text: "Reduzindo promoções para manter os preços originais.", correct: false }
  ] },
  { id: 20, category: "Resumo", text: "Qual sequência representa melhor o funcionamento apresentado do QuiStock?", options: [
    { text: "Coletar dados, identificar riscos e apoiar ações antes da perda.", correct: true },
    { text: "Esperar o vencimento, registrar a perda e repetir a compra.", correct: false },
    { text: "Escolher um desconto, ignorar as vendas e alterar a validade.", correct: false },
    { text: "Substituir o ERP, automatizar preços e eliminar aprovações.", correct: false }
  ] }
];
