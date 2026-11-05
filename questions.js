/* Banco do Quizztock: perguntas diretas sobre a explicação do estande. */
window.QUIZZTOCK_QUESTIONS = [
  { id: 1, category: "QuiStock", text: "Qual é o principal objetivo do QuiStock?", options: [
    { text: "Ajudar a reduzir perdas de produtos no estoque.", correct: true }, { text: "Substituir todos os funcionários da loja.", correct: false }, { text: "Fazer compras para os clientes finais.", correct: false }, { text: "Controlar somente o caixa da loja.", correct: false }
  ] },
  { id: 2, category: "Validade", text: "Quais informações o QuiStock cruza para encontrar risco de desperdício?", options: [
    { text: "Validade, quantidade em estoque e ritmo de vendas.", correct: true }, { text: "Somente o preço do produto.", correct: false }, { text: "Somente o nome do fornecedor.", correct: false }, { text: "Apenas o número de funcionários da loja.", correct: false }
  ] },
  { id: 3, category: "Validade", text: "Se um produto está perto de vencer e vende pouco, qual é o risco?", options: [
    { text: "Sobrar produto antes do vencimento.", correct: true }, { text: "O produto vender rápido demais.", correct: false }, { text: "O prazo de validade aumentar.", correct: false }, { text: "O estoque ficar automaticamente vazio.", correct: false }
  ] },
  { id: 4, category: "Vendas", text: "Se um produto vende bastante e o estoque está baixo, o que pode ser recomendado?", options: [
    { text: "Avaliar aumentar a próxima reposição.", correct: true }, { text: "Diminuir ainda mais o próximo pedido.", correct: false }, { text: "Colocar o produto em promoção por estar encalhado.", correct: false }, { text: "Ignorar as vendas do produto.", correct: false }
  ] },
  { id: 5, category: "Reposição", text: "Se um produto está sobrando e vendendo pouco, qual ação faz sentido?", options: [
    { text: "Avaliar reduzir o próximo pedido.", correct: true }, { text: "Comprar o dobro imediatamente.", correct: false }, { text: "Aumentar o preço sem analisar o estoque.", correct: false }, { text: "Apagar o produto do sistema.", correct: false }
  ] },
  { id: 6, category: "Promoções", text: "Quem deve aprovar uma solicitação de promoção?", options: [
    { text: "O gerente.", correct: true }, { text: "Qualquer cliente.", correct: false }, { text: "O fornecedor, sem consultar a loja.", correct: false }, { text: "O sistema, sem nenhuma avaliação.", correct: false }
  ] },
  { id: 7, category: "Promoções", text: "O que acontece depois que um funcionário encontra risco de perda e quer fazer uma promoção?", options: [
    { text: "Ele envia uma solicitação para o gerente avaliar.", correct: true }, { text: "A promoção é aplicada sem aprovação.", correct: false }, { text: "O produto é comprado novamente.", correct: false }, { text: "A validade do produto é alterada.", correct: false }
  ] },
  { id: 8, category: "ERP", text: "Por que o QuiStock usa dados do ERP?", options: [
    { text: "Para analisar o estoque e as vendas da loja.", correct: true }, { text: "Para trocar o ERP por um jogo.", correct: false }, { text: "Para vender produtos diretamente ao consumidor.", correct: false }, { text: "Para mudar a validade dos produtos.", correct: false }
  ] },
  { id: 9, category: "ERP", text: "O que a integração com o ERP ajuda o QuiStock a consultar?", options: [
    { text: "Dados que a loja já tem sobre produtos, vendas e estoque.", correct: true }, { text: "A senha pessoal de cada cliente.", correct: false }, { text: "A previsão do tempo da cidade.", correct: false }, { text: "Somente as cores da embalagem.", correct: false }
  ] },
  { id: 10, category: "Fefo", text: "O que é o Fefo dentro do Quizztock?", options: [
    { text: "O mascote e assistente do aplicativo.", correct: true }, { text: "O nome do sistema de caixa.", correct: false }, { text: "Um tipo de produto da loja.", correct: false }, { text: "O gerente responsável pelas compras.", correct: false }
  ] },
  { id: 11, category: "Decisões", text: "Qual é a vantagem de olhar vendas junto com a validade?", options: [
    { text: "Tomar decisões melhores para evitar sobras e perdas.", correct: true }, { text: "Garantir que todos os produtos tenham o mesmo preço.", correct: false }, { text: "Fazer todos os produtos vencerem no mesmo dia.", correct: false }, { text: "Eliminar a necessidade de conferir o estoque.", correct: false }
  ] },
  { id: 12, category: "Decisões", text: "O QuiStock toma sozinho a decisão final sobre uma promoção?", options: [
    { text: "Não. A solicitação precisa ser avaliada pelo gerente.", correct: true }, { text: "Sim. Nenhuma pessoa participa.", correct: false }, { text: "Sim. O cliente escolhe qualquer desconto.", correct: false }, { text: "Não. O fornecedor decide todas as promoções.", correct: false }
  ] },
  { id: 13, category: "Estoque", text: "Um estoque alto sempre significa que o produto está vendendo bem?", options: [
    { text: "Não. É preciso comparar o estoque com as vendas e a validade.", correct: true }, { text: "Sim, estoque alto sempre significa vendas altas.", correct: false }, { text: "Sim, porque a validade não importa.", correct: false }, { text: "Não, porque estoque não pode ser analisado.", correct: false }
  ] },
  { id: 14, category: "Estoque", text: "Se as vendas de um produto caem, mantendo a mesma validade, o risco de sobra tende a aumentar?", options: [
    { text: "Sim, porque o produto demora mais para sair.", correct: true }, { text: "Não, porque vendas mais lentas reduzem o estoque sozinhas.", correct: false }, { text: "Não, porque a validade aumenta automaticamente.", correct: false }, { text: "Sim, mas apenas se o preço for zero.", correct: false }
  ] },
  { id: 15, category: "Ações", text: "Qual ação pode ajudar quando há risco de um produto vencer?", options: [
    { text: "Avaliar uma promoção para aumentar as chances de venda.", correct: true }, { text: "Aumentar o próximo pedido sem analisar nada.", correct: false }, { text: "Esconder o produto do estoque.", correct: false }, { text: "Esperar o vencimento sem tomar decisão.", correct: false }
  ] },
  { id: 16, category: "Ações", text: "Depois de identificar uma sobra, qual decisão pode ser revista?", options: [
    { text: "A quantidade do próximo pedido.", correct: true }, { text: "O nome do cliente que comprou o produto.", correct: false }, { text: "A cor do logo do QuiStock.", correct: false }, { text: "O horário de funcionamento da loja.", correct: false }
  ] },
  { id: 17, category: "FEFO", text: "No contexto do QuiStock, por que a data de validade é importante?", options: [
    { text: "Porque ajuda a prever e evitar perdas por vencimento.", correct: true }, { text: "Porque define sozinha quantas unidades venderemos.", correct: false }, { text: "Porque substitui todas as informações de venda.", correct: false }, { text: "Porque serve apenas para organizar as embalagens.", correct: false }
  ] },
  { id: 18, category: "QuiStock", text: "Qual destes dados não é o foco da análise do QuiStock?", options: [
    { text: "A cor preferida do cliente.", correct: true }, { text: "A quantidade em estoque.", correct: false }, { text: "O ritmo de vendas.", correct: false }, { text: "A data de validade.", correct: false }
  ] },
  { id: 19, category: "ODS 12.3", text: "Como o QuiStock se relaciona com a redução do desperdício de alimentos?", options: [
    { text: "Ajuda a loja a agir antes que produtos sejam perdidos.", correct: true }, { text: "Faz a loja comprar sem considerar a demanda.", correct: false }, { text: "Impede qualquer promoção de produtos.", correct: false }, { text: "Substitui a venda por doações automáticas.", correct: false }
  ] },
  { id: 20, category: "Resumo", text: "Em uma frase, qual é a ideia central do QuiStock?", options: [
    { text: "Usar dados de estoque, vendas e validade para apoiar decisões.", correct: true }, { text: "Comprar sempre a mesma quantidade de cada produto.", correct: false }, { text: "Aplicar desconto em tudo que está na loja.", correct: false }, { text: "Cuidar apenas dos produtos que já venceram.", correct: false }
  ] }
];
