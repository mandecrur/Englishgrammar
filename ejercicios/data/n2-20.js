window.EXERCISE_DATA = {
  title: "Basic Time Clauses (when, before, after)",
  translation: "Cláusulas de tiempo básicas",
  level: "Nivel 2 · Básico 1 (A1)",

  vocabulary: [
    { en: "when", es: "cuando" },
    { en: "before", es: "antes de" },
    { en: "after", es: "después de" },
    { en: "while", es: "mientras" },
    { en: "until", es: "hasta que" },
    { en: "as soon as", es: "tan pronto como" },
    { en: "then", es: "entonces / luego" },
    { en: "finish", es: "terminar" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["when", "cuando"], ["before", "antes de"], ["after", "después de"],
          ["while", "mientras"], ["until", "hasta que"], ["finish", "terminar"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Las cláusulas de tiempo conectan dos acciones indicando <strong>cuándo</strong> ocurren.
    Palabras clave: <strong>when</strong> (cuando), <strong>before</strong> (antes de),
    <strong>after</strong> (después de), <strong>while</strong> (mientras), <strong>until</strong> (hasta que).</p>
    <table>
      <tr><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>I eat breakfast before I go to work.</td><td>Desayuno antes de ir al trabajo.</td></tr>
      <tr><td>She calls me after she arrives.</td><td>Ella me llama después de llegar.</td></tr>
      <tr><td>Wait until I finish.</td><td>Espera hasta que termine.</td></tr>
      <tr><td>He listens to music while he studies.</td><td>Él escucha música mientras estudia.</td></tr>
    </table>
    <p>Importante: cuando la cláusula de tiempo habla del <strong>futuro</strong>, se usa el
    <strong>presente simple</strong>, no "will": <strong>I will call you when I arrive.</strong>
    (Te llamaré cuando llegue — no "when I will arrive").</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la palabra de conexión correcta.",
      type: "mc",
      questions: [
        { prompt: "I brush my teeth ___ I go to bed.", options: ["before", "after", "until"], correct: 0,
          explanation: "'Before' indica que una acción ocurre antes que otra." },
        { prompt: "She calls me ___ she arrives home.", options: ["before", "after", "while"], correct: 1,
          explanation: "'After' indica que una acción ocurre después de otra." },
        { prompt: "I will call you ___ I arrive. (presente, no will)", options: ["when", "while", "until"], correct: 0,
          explanation: "'When' con presente simple habla de una acción futura." },
        { prompt: "Wait ___ I finish my homework.", options: ["before", "until", "when"], correct: 1,
          explanation: "'Until' significa 'hasta que'." },
        { prompt: "He listens to music ___ he studies.", options: ["before", "while", "until"], correct: 1,
          explanation: "'While' indica dos acciones simultáneas." },
        { prompt: "I ___ (arrive) home, I will call you.", options: ["will arrive", "arrive", "arrived"], correct: 1,
          explanation: "Después de 'when' se usa presente simple, no 'will'." },
        { prompt: "She washes her hands ___ eating.", options: ["before", "after", "until"], correct: 0,
          explanation: "'Before eating' significa 'antes de comer'." },
        { prompt: "___ the movie starts, we should sit down.", options: ["When", "Until", "After"], correct: 0,
          explanation: "'When' indica el momento en que algo ocurre." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa cada oración con la palabra de conexión correcta.",
      type: "fill",
      questions: [
        { prompt: "I eat breakfast ___ I go to work. (antes de)", correct: ["before"], explanation: "'Before' significa 'antes de'." },
        { prompt: "She calls me ___ she arrives. (después de)", correct: ["after"], explanation: "'After' significa 'después de'." },
        { prompt: "Wait ___ I finish, please. (hasta que)", correct: ["until"], explanation: "'Until' significa 'hasta que'." },
        { prompt: "He studies ___ he listens to music. (mientras)", correct: ["while"], explanation: "'While' indica simultaneidad." },
        { prompt: "I will call you ___ I arrive. (cuando)", correct: ["when"], explanation: "'When' conecta dos eventos en el tiempo." },
        { prompt: "___ you finish, tell me. (tan pronto como)", correct: ["as soon as"], explanation: "'As soon as' significa 'tan pronto como'." },
        { prompt: "She washes her hands ___ eating. (antes de)", correct: ["before"], explanation: "'Before' significa 'antes de'." },
        { prompt: "We will talk ___ class ends. (cuando)", correct: ["when"], explanation: "'When' conecta dos eventos futuros." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "eat", "breakfast", "before", "work", "."], translation: "Desayuno antes del trabajo.",
          explanation: "Orden: sujeto + verbo + objeto + before + tiempo." },
        { words: ["She", "calls", "me", "after", "school", "."], translation: "Ella me llama después de la escuela.",
          explanation: "Orden: sujeto + verbo + objeto + after + tiempo." },
        { words: ["Wait", "until", "I", "finish", "."], translation: "Espera hasta que termine.",
          explanation: "Imperativo + until + sujeto + verbo." },
        { words: ["He", "studies", "while", "he", "listens", "to", "music", "."], translation: "Él estudia mientras escucha música.",
          explanation: "Orden: sujeto + verbo + while + sujeto + verbo + objeto." },
        { words: ["I", "will", "call", "you", "when", "I", "arrive", "."], translation: "Te llamaré cuando llegue.",
          explanation: "Después de 'when' se usa presente simple." },
        { words: ["She", "washes", "her", "hands", "before", "eating", "."], translation: "Ella se lava las manos antes de comer.",
          explanation: "Orden: sujeto + verbo + objeto + before + gerundio." },
        { words: ["We", "will", "talk", "when", "class", "ends", "."], translation: "Hablaremos cuando termine la clase.",
          explanation: "'When' + presente simple habla del futuro." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada conector de tiempo con su significado.",
      type: "match",
      questions: [
        { pairs: [
            ["when", "cuando"], ["before", "antes de"], ["after", "después de"],
            ["while", "mientras"], ["until", "hasta que"], ["as soon as", "tan pronto como"], ["then", "entonces / luego"],
          ],
          explanation: "Estos conectores unen dos acciones en el tiempo." }
      ]
    }
  ]
};
