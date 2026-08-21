window.EXERCISE_DATA = {
  title: "Verbs + Gerund/Infinitive (same or different meaning)",
  translation: "Verbos que aceptan ambas formas",
  level: "Nivel 4 · Intermedio Bajo (B1)",

  vocabulary: [
    { en: "start", es: "empezar" },
    { en: "begin", es: "comenzar" },
    { en: "like", es: "gustar" },
    { en: "love", es: "amar / encantar" },
    { en: "stop", es: "parar / dejar de" },
    { en: "remember", es: "recordar" },
    { en: "forget", es: "olvidar" },
    { en: "try", es: "intentar / probar" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["start", "empezar"], ["like", "gustar"], ["stop", "parar / dejar de"],
          ["remember", "recordar"], ["forget", "olvidar"], ["try", "intentar / probar"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Algunos verbos aceptan <strong>ambas formas</strong> (gerundio e infinitivo), a veces con
    el mismo significado, y a veces con un significado <strong>diferente</strong>.</p>
    <p><strong>Mismo significado</strong> (no importa cuál uses): <strong>start, begin, like, love,
    hate, continue, prefer</strong>.</p>
    <table>
      <tr><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>It started raining. / It started to rain.</td><td>Empezó a llover. (mismo significado)</td></tr>
      <tr><td>I like swimming. / I like to swim.</td><td>Me gusta nadar. (mismo significado)</td></tr>
    </table>
    <p><strong>Significado diferente</strong>: <strong>stop, remember, forget, try</strong>.</p>
    <table>
      <tr><th>Verbo + gerundio</th><th>Verbo + infinitivo</th></tr>
      <tr><td>stop smoking (dejar de fumar)</td><td>stop to smoke (parar para fumar)</td></tr>
      <tr><td>remember calling (recordar que ya llamé)</td><td>remember to call (acordarse de llamar, aún no lo hice)</td></tr>
      <tr><td>forget meeting her (olvidar que la conocí)</td><td>forget to meet her (olvidarse de encontrarla)</td></tr>
      <tr><td>try opening the window (probar abrir, experimentar)</td><td>try to open the window (esforzarse por abrir, quizás no se pueda)</td></tr>
    </table>
    <p>Ejemplo clave: <strong>I stopped smoking</strong> (dejé de fumar, ya no fumo) vs.
    <strong>I stopped to smoke</strong> (paré [de hacer algo] para fumar — significados opuestos en la práctica).</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción que coincide con el significado indicado.",
      type: "mc",
      questions: [
        { prompt: "I stopped ___ (smoke). (dejé de fumar)", options: ["smoking", "to smoke"], correct: 0,
          explanation: "'Stop + gerundio' significa dejar el hábito." },
        { prompt: "He stopped ___ (rest) for a while. (paró para descansar)", options: ["resting", "to rest"], correct: 1,
          explanation: "'Stop + infinitivo' significa parar con el propósito de hacer algo." },
        { prompt: "Please remember ___ (call) me tomorrow. (acuérdate de llamar)", options: ["calling", "to call"], correct: 1,
          explanation: "'Remember + infinitivo' significa no olvidar hacer algo pendiente." },
        { prompt: "I remember ___ (visit) Paris as a child. (recuerdo haber visitado)", options: ["visiting", "to visit"], correct: 0,
          explanation: "'Remember + gerundio' significa recordar algo que ya pasó." },
        { prompt: "Don't forget ___ (buy) milk. (no olvides comprar)", options: ["buying", "to buy"], correct: 1,
          explanation: "'Forget + infinitivo' significa olvidarse de hacer algo pendiente." },
        { prompt: "I'll never forget ___ (meet) her. (nunca olvidaré haberla conocido)", options: ["meeting", "to meet"], correct: 0,
          explanation: "'Forget + gerundio' significa olvidar algo que ya pasó." },
        { prompt: "It started ___ (rain). (mismo significado con ambas)", options: ["raining", "to rain"], correct: 0,
          explanation: "'Start' acepta ambas formas con el mismo significado." },
        { prompt: "I like ___ (swim). (mismo significado con ambas)", options: ["swimming", "to swim"], correct: 0,
          explanation: "'Like' acepta ambas formas con el mismo significado." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con gerundio o infinitivo según el significado indicado.",
      type: "fill",
      questions: [
        { prompt: "I stopped ___ (smoke). (dejé el hábito)", correct: ["smoking"], explanation: "stop + gerundio: dejar el hábito." },
        { prompt: "We stopped ___ (eat) lunch. (paramos para comer)", correct: ["to eat"], explanation: "stop + infinitivo: parar con propósito." },
        { prompt: "Remember ___ (lock) the door before you leave.", correct: ["to lock"], explanation: "remember + infinitivo: no olvidar hacer algo." },
        { prompt: "I remember ___ (see) that movie years ago.", correct: ["seeing"], explanation: "remember + gerundio: recordar algo pasado." },
        { prompt: "Don't forget ___ (bring) your ID.", correct: ["to bring"], explanation: "forget + infinitivo: no olvidar hacer algo." },
        { prompt: "I'll never forget ___ (travel) to Japan.", correct: ["traveling"], explanation: "forget + gerundio: olvidar algo pasado." },
        { prompt: "She began ___ (study) medicine. (cualquiera de las dos)", correct: ["studying", "to study"], explanation: "begin acepta ambas formas." },
        { prompt: "He loves ___ (read). (cualquiera de las dos)", correct: ["reading", "to read"], explanation: "love acepta ambas formas." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "stopped", "smoking", "last", "year", "."], translation: "Dejé de fumar el año pasado.",
          explanation: "stop + gerundio: dejar el hábito." },
        { words: ["He", "stopped", "to", "rest", "for", "a", "while", "."], translation: "Él paró para descansar un rato.",
          explanation: "stop + infinitivo: parar con propósito." },
        { words: ["Remember", "to", "call", "me", "tomorrow", "."], translation: "Acuérdate de llamarme mañana.",
          explanation: "remember + infinitivo: no olvidar hacer algo." },
        { words: ["I", "remember", "visiting", "Paris", "as", "a", "child", "."], translation: "Recuerdo haber visitado París de niño.",
          explanation: "remember + gerundio: recordar algo pasado." },
        { words: ["Don't", "forget", "to", "buy", "milk", "."], translation: "No olvides comprar leche.",
          explanation: "forget + infinitivo: no olvidar hacer algo." },
        { words: ["It", "started", "raining", "suddenly", "."], translation: "De repente empezó a llover.",
          explanation: "start + gerundio (mismo significado que infinitivo)." },
        { words: ["I", "like", "swimming", "in", "the", "ocean", "."], translation: "Me gusta nadar en el océano.",
          explanation: "like + gerundio (mismo significado que infinitivo)." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada estructura con su significado.",
      type: "match",
      questions: [
        { pairs: [
            ["stop smoking", "dejar el hábito"], ["stop to smoke", "parar para hacer algo"],
            ["remember calling", "recordar algo pasado"], ["remember to call", "no olvidar hacerlo"],
            ["forget meeting her", "olvidar algo pasado"], ["forget to meet her", "olvidarse de hacerlo"], ["start raining", "empezar (mismo significado)"],
          ],
          explanation: "Stop, remember, forget y try cambian de significado según la forma que sigan." }
      ]
    }
  ]
};
