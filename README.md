# Quizztock — QuiStock ExpoTech

Quiz interativo e totalmente offline para uso presencial no estande do QuiStock.

## Como abrir

1. Abra a pasta `quizztock`.
2. Dê dois cliques em `index.html`.
3. Para uma experiência mais imersiva, use o botão de tela cheia no canto superior direito.

Não é necessário instalar programas, iniciar servidor ou ter conexão com a internet.

## Arquivos

- `index.html`: estrutura das telas.
- `styles.css`: identidade visual, responsividade e animações.
- `questions.js`: banco oficial com as 20 perguntas.
- `app.js`: sorteio, pontuação, prêmios, reinício e persistência.
- `assets/fefo*.png`: Fefo oficial e três novas variações discretas de expressão.
- `assets/fefo-referencia.jpeg`: imagem original enviada para comparação futura.
- `assets/quistock-logo.svg`: logo oficial do QuiStock usado como referência visual.

## Fefo

A arte oficial enviada foi recortada para fundo transparente. As novas variações `fefo-curioso-v2.png`, `fefo-feliz-v2.png` e `fefo-surpreso-v2.png` mantêm a silhueta, cores e proporções do personagem, mudando sobretudo o rosto. Os arquivos ficam todos locais para funcionamento offline.

Após cada resposta, o feedback permanece por cerca de 2,3 segundos. A revelação final dura cerca de 6,2 segundos e termina com uma contagem regressiva.

## Editar perguntas

Abra `questions.js`. Cada pergunta possui:

- `id`: número único;
- `category`: tema usado para variar o sorteio;
- `text`: enunciado;
- `options`: quatro alternativas.

Exatamente uma alternativa deve manter `correct: true`; as outras três devem usar `correct: false`. A ordem das alternativas é embaralhada automaticamente a cada partida.

## Editar regras de premiação

Abra `app.js` e procure a função `prizeForScore`. A regra atual é:

- 8 acertos: vela;
- 6 ou 7 acertos: brownie;
- 4 ou 5 acertos: brigadeiro;
- 3 acertos ou menos: escolha entre adesivo ou bala.

Os textos e opções de prêmio ficam centralizados no objeto `PRIZES`, no início do mesmo arquivo.

## Operação no estande

- O botão **Voltar ao início** encerra totalmente a sessão do visitante.
- A partida em andamento é preservada se a página for atualizada por acidente.
- A combinação anterior de oito perguntas é lembrada para reduzir repetições na partida seguinte.
- Pressione `F` para alternar a tela cheia quando o foco não estiver em um botão.

## Compatibilidade

Recomendado: versões atuais de Chrome, Edge ou Firefox em notebook, tablet ou smartphone. O site não carrega fontes, bibliotecas, APIs ou imagens externas.
