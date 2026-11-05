(function () {
  "use strict";

  const TOTAL_QUESTIONS = 6;
  const STORAGE = {
    active: "quizztock.active.v1",
    previous: "quizztock.previousQuestions.v1"
  };
  const LETTERS = ["A", "B", "C", "D"];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const PRIZES = {
    brownie: {
      key: "brownie", title: "Brownie", icon: "🍫",
      message: "Perfeito! Você dominou o QuiStock e conquistou o prêmio máximo.",
      speech: "SEIS DE SEIS! AÍ SIM! Você foi incrível!", mood: "perfect"
    },
    botton: {
      key: "botton", title: "Botton do QuiStock", icon: "✦",
      message: "Quase perfeito! Seu conhecimento vale um botton oficial do QuiStock.",
      speech: "BOAAAA! Você mandou muito!", mood: "happy"
    },
    pen_or_candle: {
      key: "pen_or_candle", title: "Escolha seu prêmio", icon: "↗",
      message: "Mandou bem! Agora escolha entre uma caneta e uma vela.",
      speech: "Muito bem! Você ganhou o direito de escolher!", mood: "happy",
      choices: [
        { key: "caneta", title: "Caneta", icon: "✎" },
        { key: "vela", title: "Vela", icon: "♢" }
      ]
    },
    sticker_or_candy: {
      key: "sticker_or_candy", title: "Escolha seu prêmio", icon: "✦",
      message: "Boa tentativa! Escolha um mimo e continue aprendendo com o Fefo.",
      speech: "Valeu o desafio! O importante é sair sabendo mais!", mood: "encouraging",
      choices: [
        { key: "adesivo", title: "Adesivo", icon: "◆" },
        { key: "bala", title: "Bala", icon: "●" }
      ]
    }
  };

  const SPEECH = {
    thinking: ["Hmm... pensa bem nessa!", "O estoque guarda pistas. Vai com calma!", "Essa vale um ponto precioso!", "Será que você lembra da apresentação?"],
    correct: ["BOAAAA! Você mandou muito!", "ACERTOU! O Fefo sabia!", "PONTO PRA VOCÊ!", "Aí sim! Resposta certeira!"],
    wrong: ["EITA! Não foi dessa vez!", "Quase! A próxima é sua!", "Opa... essa pegou, hein?", "Sem crise! Bora para a próxima!"]
  };

  const screens = Array.from(document.querySelectorAll(".screen"));
  const elements = {
    startButton: document.getElementById("startButton"),
    restartButton: document.getElementById("restartButton"),
    fullscreenButton: document.getElementById("fullscreenButton"),
    questionCounter: document.getElementById("questionCounter"),
    topicLabel: document.getElementById("topicLabel"),
    scoreValue: document.getElementById("scoreValue"),
    progressBar: document.getElementById("progressBar"),
    questionNumber: document.getElementById("questionNumber"),
    questionText: document.getElementById("questionText"),
    answers: document.getElementById("answers"),
    feedbackLine: document.getElementById("feedbackLine"),
    answerDots: document.getElementById("answerDots"),
    quizSpeech: document.getElementById("quizSpeech"),
    suspenseMessage: document.getElementById("suspenseMessage"),
    suspenseCountdown: document.getElementById("suspenseCountdown"),
    finalScore: document.getElementById("finalScore"),
    resultTitle: document.getElementById("resultTitle"),
    resultMessage: document.getElementById("resultMessage"),
    resultSpeech: document.getElementById("resultSpeech"),
    prizeArea: document.getElementById("prizeArea"),
    confettiLayer: document.getElementById("confettiLayer"),
    announcer: document.getElementById("announcer")
  };

  let state = createEmptyState();
  let transitionTimer = null;
  let suspenseTimers = [];
  let selectedChoice = null;

  function createEmptyState() {
    return {
      version: 1,
      status: "home",
      questions: [],
      currentIndex: 0,
      score: 0,
      answers: [],
      prizeKey: null,
      chosenPrize: null,
      startedAt: null
    };
  }

  function shuffle(input) {
    const list = input.slice();
    for (let index = list.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [list[index], list[swapIndex]] = [list[swapIndex], list[index]];
    }
    return list;
  }

  function pick(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function prizeForScore(score) {
    if (score === 6) return PRIZES.brownie;
    if (score === 5) return PRIZES.botton;
    if (score === 4) return PRIZES.pen_or_candle;
    return PRIZES.sticker_or_candy;
  }

  function chooseQuestions() {
    let previous = [];
    try { previous = JSON.parse(localStorage.getItem(STORAGE.previous) || "[]"); } catch (_) { previous = []; }

    const categories = shuffle([...new Set(window.QUIZZTOCK_QUESTIONS.map(question => question.category))]);
    let selected = [];
    categories.forEach(category => {
      if (selected.length >= TOTAL_QUESTIONS) return;
      const pool = window.QUIZZTOCK_QUESTIONS.filter(question => question.category === category && !selected.includes(question));
      if (pool.length) selected.push(pick(pool));
    });
    if (selected.length < TOTAL_QUESTIONS) {
      selected = selected.concat(shuffle(window.QUIZZTOCK_QUESTIONS.filter(question => !selected.includes(question))).slice(0, TOTAL_QUESTIONS - selected.length));
    }

    let attempts = 0;
    while (sameSet(selected.map(question => question.id), previous) && attempts < 20) {
      selected = shuffle(window.QUIZZTOCK_QUESTIONS).slice(0, TOTAL_QUESTIONS);
      attempts += 1;
    }

    const prepared = shuffle(selected).map(question => ({
      id: question.id,
      category: question.category,
      text: question.text,
      options: shuffle(question.options.map((option, sourceIndex) => ({
        id: `${question.id}-${sourceIndex}`,
        text: option.text,
        correct: option.correct
      })))
    }));

    localStorage.setItem(STORAGE.previous, JSON.stringify(prepared.map(question => question.id)));
    return prepared;
  }

  function sameSet(first, second) {
    return first.length === second.length && first.every(value => second.includes(value));
  }

  function saveState() {
    localStorage.setItem(STORAGE.active, JSON.stringify(state));
  }

  function clearActiveState() {
    localStorage.removeItem(STORAGE.active);
  }

  function restoreState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE.active) || "null");
      if (!saved || saved.version !== 1 || !Array.isArray(saved.questions) || saved.questions.length !== TOTAL_QUESTIONS) return false;
      state = saved;
      state.currentIndex = Math.min(state.answers.length, TOTAL_QUESTIONS);
      state.score = Math.min(Math.max(Number(state.score) || 0, 0), TOTAL_QUESTIONS);
      return true;
    } catch (_) {
      clearActiveState();
      return false;
    }
  }

  function showScreen(name) {
    screens.forEach(screen => {
      const active = screen.dataset.screen === name;
      screen.hidden = !active;
      screen.classList.toggle("active", active);
    });
    document.body.dataset.screen = name;
    window.scrollTo(0, 0);
  }

  function startGame() {
    clearTimeout(transitionTimer);
    clearSuspenseTimers();
    state = createEmptyState();
    state.status = "quiz";
    state.questions = chooseQuestions();
    state.startedAt = Date.now();
    saveState();
    showScreen("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    const question = state.questions[state.currentIndex];
    if (!question) {
      beginSuspense();
      return;
    }

    const questionPosition = state.currentIndex + 1;
    elements.questionCounter.textContent = `PERGUNTA ${questionPosition} DE ${TOTAL_QUESTIONS}`;
    elements.topicLabel.textContent = question.category.toUpperCase();
    elements.scoreValue.textContent = String(state.score);
    elements.progressBar.style.width = `${(questionPosition / TOTAL_QUESTIONS) * 100}%`;
    elements.questionNumber.textContent = String(questionPosition).padStart(2, "0");
    elements.questionText.textContent = question.text;
    elements.feedbackLine.textContent = "";
    elements.feedbackLine.className = "feedback-line";
    elements.quizSpeech.textContent = pick(SPEECH.thinking);
    elements.answers.innerHTML = "";

    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "answer-button";
      button.dataset.optionId = option.id;
      button.innerHTML = `<span class="answer-letter">${LETTERS[index]}</span><span class="answer-text"></span><span class="answer-state" aria-hidden="true">›</span>`;
      button.querySelector(".answer-text").textContent = option.text;
      button.addEventListener("click", () => submitAnswer(option, button), { once: true });
      elements.answers.appendChild(button);
    });

    renderDots();
    setMascotMood("thinking");
    requestAnimationFrame(() => {
      document.getElementById("quizScreen").classList.add("question-enter");
      setTimeout(() => document.getElementById("quizScreen").classList.remove("question-enter"), 480);
    });
    elements.questionText.focus({ preventScroll: true });
    announce(`Pergunta ${questionPosition} de ${TOTAL_QUESTIONS}. ${question.text}`);
  }

  function submitAnswer(option, selectedButton) {
    if (document.getElementById("quizScreen").classList.contains("answer-locked")) return;
    document.getElementById("quizScreen").classList.add("answer-locked");
    const isCorrect = Boolean(option.correct);

    Array.from(elements.answers.children).forEach(button => {
      button.disabled = true;
      button.setAttribute("aria-disabled", "true");
    });
    selectedButton.classList.add(isCorrect ? "correct" : "wrong");
    selectedButton.querySelector(".answer-state").textContent = isCorrect ? "✓" : "×";

    if (isCorrect) state.score = Math.min(state.score + 1, TOTAL_QUESTIONS);
    state.answers.push({ questionId: state.questions[state.currentIndex].id, optionId: option.id, correct: isCorrect });
    saveState();

    elements.scoreValue.textContent = String(state.score);
    elements.scoreValue.classList.add("score-pop");
    setTimeout(() => elements.scoreValue.classList.remove("score-pop"), 450);
    elements.quizSpeech.textContent = pick(isCorrect ? SPEECH.correct : SPEECH.wrong);
    elements.feedbackLine.textContent = isCorrect ? "RESPOSTA CERTA! +1 PONTO" : "NÃO FOI DESSA VEZ — BORA PRA PRÓXIMA!";
    elements.feedbackLine.classList.add(isCorrect ? "is-correct" : "is-wrong");
    setMascotMood(isCorrect ? "celebrate" : "oops");
    renderDots();
    if (isCorrect) burst(selectedButton, 8);
    announce(isCorrect ? "Resposta certa. Você ganhou um ponto." : "Resposta incorreta. Vamos para a próxima pergunta.");

    const delay = reducedMotion.matches ? 1900 : 2300;
    transitionTimer = setTimeout(() => {
      state.currentIndex = state.answers.length;
      saveState();
      document.getElementById("quizScreen").classList.remove("answer-locked");
      renderQuestion();
    }, delay);
  }

  function renderDots() {
    elements.answerDots.innerHTML = "";
    for (let index = 0; index < TOTAL_QUESTIONS; index += 1) {
      const dot = document.createElement("span");
      const answer = state.answers[index];
      dot.className = "answer-dot";
      if (answer) dot.classList.add(answer.correct ? "dot-correct" : "dot-wrong");
      else if (index === state.currentIndex) dot.classList.add("dot-current");
      dot.textContent = answer ? (answer.correct ? "✓" : "×") : String(index + 1);
      elements.answerDots.appendChild(dot);
    }
  }

  function beginSuspense() {
    clearSuspenseTimers();
    clearTimeout(transitionTimer);
    state.status = "suspense";
    state.currentIndex = TOTAL_QUESTIONS;
    state.prizeKey = prizeForScore(state.score).key;
    saveState();
    showScreen("suspense");
    elements.suspenseMessage.textContent = "Repassando as suas seis respostas...";
    elements.suspenseCountdown.textContent = "";
    announce("As seis perguntas terminaram. O resultado será revelado em instantes.");

    const stages = [
      [1500, "Conferindo cada ponto...", ""],
      [3000, "O Fefo já sabe qual é o seu prêmio...", ""],
      [4300, "Preparado para descobrir?", "3"],
      [4900, "Preparado para descobrir?", "2"],
      [5500, "Preparado para descobrir?", "1"]
    ];
    stages.forEach(([time, message, count]) => {
      suspenseTimers.push(setTimeout(() => {
        elements.suspenseMessage.textContent = message;
        elements.suspenseCountdown.textContent = count;
        if (count) {
          elements.suspenseCountdown.classList.remove("count-pop");
          void elements.suspenseCountdown.offsetWidth;
          elements.suspenseCountdown.classList.add("count-pop");
        }
      }, time));
    });
    transitionTimer = setTimeout(() => {
      clearSuspenseTimers();
      showResult();
    }, 6200);
  }

  function clearSuspenseTimers() {
    suspenseTimers.forEach(clearTimeout);
    suspenseTimers = [];
  }

  function showResult() {
    const prize = prizeForScore(state.score);
    state.status = "result";
    state.prizeKey = prize.key;
    saveState();
    showScreen("result");
    elements.finalScore.innerHTML = `${state.score}<span>/6</span>`;
    elements.resultMessage.textContent = prize.message;
    elements.resultSpeech.textContent = prize.speech;
    elements.resultTitle.textContent = state.score === 6 ? "Resultado perfeito!" : state.score >= 4 ? "Prêmio conquistado!" : "Desafio concluído!";
    setMascotMood(prize.mood);
    renderPrize(prize);
    if (state.score >= 5) createConfetti(state.score === 6 ? 34 : 18);
    announce(`Resultado final: ${state.score} de 6. ${prize.message}`);
  }

  function renderPrize(prize) {
    selectedChoice = state.chosenPrize;
    elements.prizeArea.innerHTML = "";
    if (!prize.choices) {
      const card = document.createElement("div");
      card.className = `prize-reveal ${prize.key}`;
      card.innerHTML = `<div class="prize-icon" aria-hidden="true">${prize.icon}</div><div><small>SEU PRÊMIO</small><strong>${prize.title}</strong><span>Conquista desbloqueada</span></div>`;
      elements.prizeArea.appendChild(card);
      return;
    }

    const prompt = document.createElement("p");
    prompt.className = "choice-prompt";
    prompt.textContent = state.chosenPrize ? "Prêmio escolhido:" : "Escolha uma opção:";
    elements.prizeArea.appendChild(prompt);

    if (state.chosenPrize) {
      const chosen = prize.choices.find(choice => choice.key === state.chosenPrize);
      const card = document.createElement("div");
      card.className = "prize-reveal chosen-prize";
      card.innerHTML = `<div class="prize-icon" aria-hidden="true">${chosen.icon}</div><div><small>ESCOLHA CONFIRMADA</small><strong>${chosen.title}</strong><span>Mostre esta tela à equipe</span></div>`;
      elements.prizeArea.appendChild(card);
      return;
    }

    const grid = document.createElement("div");
    grid.className = "choice-grid";
    prize.choices.forEach(choice => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice-card";
      button.dataset.choice = choice.key;
      button.innerHTML = `<span class="choice-icon" aria-hidden="true">${choice.icon}</span><strong>${choice.title}</strong><small>Selecionar</small>`;
      button.addEventListener("click", () => selectPrizeChoice(choice.key, grid, confirmButton));
      grid.appendChild(button);
    });
    elements.prizeArea.appendChild(grid);

    const confirmButton = document.createElement("button");
    confirmButton.type = "button";
    confirmButton.className = "confirm-choice";
    confirmButton.disabled = true;
    confirmButton.textContent = "CONFIRMAR ESCOLHA";
    confirmButton.addEventListener("click", () => confirmPrizeChoice(prize));
    elements.prizeArea.appendChild(confirmButton);
  }

  function selectPrizeChoice(choiceKey, grid, confirmButton) {
    selectedChoice = choiceKey;
    Array.from(grid.children).forEach(card => {
      const selected = card.dataset.choice === choiceKey;
      card.classList.toggle("selected", selected);
      card.setAttribute("aria-pressed", String(selected));
      card.querySelector("small").textContent = selected ? "Selecionado ✓" : "Selecionar";
    });
    confirmButton.disabled = false;
  }

  function confirmPrizeChoice(prize) {
    if (!selectedChoice || !prize.choices.some(choice => choice.key === selectedChoice)) return;
    state.chosenPrize = selectedChoice;
    saveState();
    renderPrize(prize);
    const chosen = prize.choices.find(choice => choice.key === selectedChoice);
    elements.resultSpeech.textContent = `${chosen.title}? Ótima escolha!`;
    createConfetti(12);
    announce(`Escolha confirmada: ${chosen.title}.`);
  }

  function restartGame() {
    clearTimeout(transitionTimer);
    clearSuspenseTimers();
    clearActiveState();
    state = createEmptyState();
    selectedChoice = null;
    elements.confettiLayer.innerHTML = "";
    showScreen("home");
    elements.startButton.focus({ preventScroll: true });
  }

  function resumeGame() {
    if (!restoreState()) {
      showScreen("home");
      return;
    }
    if (state.status === "quiz" && state.answers.length < TOTAL_QUESTIONS) {
      showScreen("quiz");
      renderQuestion();
    } else if (state.status === "result") {
      showResult();
    } else {
      beginSuspense();
    }
  }

  function setMascotMood(mood) {
    document.querySelectorAll(".mascot-wrap").forEach(wrapper => {
      if (wrapper.closest("[hidden]")) return;
      wrapper.dataset.mood = mood;
      const image = wrapper.querySelector(".mascot-art img");
      const imageForMood = {
        welcome: "fefo.png",
        thinking: "fefo-curioso-v2.png",
        anxious: "fefo-curioso-v2.png",
        celebrate: "fefo-feliz-v2.png",
        perfect: "fefo-feliz-v2.png",
        happy: "fefo-feliz-v2.png",
        oops: "fefo-surpreso-v2.png",
        encouraging: "fefo.png"
      };
      const nextSource = `assets/${imageForMood[mood] || "fefo.png"}`;
      if (image && image.getAttribute("src") !== nextSource) image.setAttribute("src", nextSource);
    });
  }

  function burst(origin, amount) {
    const rect = origin.getBoundingClientRect();
    for (let index = 0; index < amount; index += 1) {
      const particle = document.createElement("i");
      particle.className = "burst-particle";
      particle.style.left = `${rect.left + rect.width / 2}px`;
      particle.style.top = `${rect.top + rect.height / 2}px`;
      particle.style.setProperty("--x", `${(Math.random() - .5) * 170}px`);
      particle.style.setProperty("--y", `${(Math.random() - .5) * 110}px`);
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 750);
    }
  }

  function createConfetti(amount) {
    elements.confettiLayer.innerHTML = "";
    if (reducedMotion.matches) return;
    const colors = ["#E2FFBE", "#7F3AEF", "#AF36DF", "#ffffff", "#FFD86B"];
    for (let index = 0; index < amount; index += 1) {
      const piece = document.createElement("i");
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.background = colors[index % colors.length];
      piece.style.animationDelay = `${Math.random() * 1.2}s`;
      piece.style.animationDuration = `${2.4 + Math.random() * 1.6}s`;
      piece.style.transform = `rotate(${Math.random() * 180}deg)`;
      elements.confettiLayer.appendChild(piece);
    }
  }

  function announce(message) {
    elements.announcer.textContent = "";
    requestAnimationFrame(() => { elements.announcer.textContent = message; });
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  }

  function checkMascotAssets() {
    document.querySelectorAll(".mascot-art img").forEach(image => {
      const markUnavailable = () => image.closest(".mascot-art").classList.add("image-missing");
      image.addEventListener("error", markUnavailable, { once: true });
      if (image.complete && image.naturalWidth === 0) markUnavailable();
    });
  }

  elements.startButton.addEventListener("click", startGame);
  elements.restartButton.addEventListener("click", restartGame);
  elements.fullscreenButton.addEventListener("click", toggleFullscreen);
  document.addEventListener("fullscreenchange", () => {
    elements.fullscreenButton.classList.toggle("is-fullscreen", Boolean(document.fullscreenElement));
  });

  // Atalhos discretos para operação em estande.
  document.addEventListener("keydown", event => {
    if ((event.key === "Enter" || event.key === " ") && document.body.dataset.screen === "home" && document.activeElement === document.body) startGame();
    if (event.key.toLowerCase() === "f" && !/input|button|select|textarea/i.test(document.activeElement.tagName)) toggleFullscreen();
  });

  checkMascotAssets();
  resumeGame();

  // Diagnóstico local, sem alterar a interface: valida as regras centrais de premiação.
  window.QUIZZTOCK_DIAGNOSTICS = Object.freeze({
    questionCount: window.QUIZZTOCK_QUESTIONS.length,
    prizeForScore: score => prizeForScore(score).key,
    validateBank: () => window.QUIZZTOCK_QUESTIONS.every(question => question.options.length === 4 && question.options.filter(option => option.correct).length === 1)
  });
}());
