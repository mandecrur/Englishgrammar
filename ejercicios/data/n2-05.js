window.EXERCISE_DATA = {
  title: "Simple Past (Irregular Verbs)",
  translation: "Pasado simple — verbos irregulares",
  level: "Nivel 2 · Básico 1 (A1)",

  vocabulary: [
    { en: "go → went", es: "ir → fui" },
    { en: "eat → ate", es: "comer → comí" },
    { en: "see → saw", es: "ver → vi" },
    { en: "have → had", es: "tener → tuve" },
    { en: "do → did", es: "hacer → hice" },
    { en: "make → made", es: "hacer/fabricar → hice" },
    { en: "come → came", es: "venir → vine" },
    { en: "take → took", es: "tomar → tomé" },
  ],

  vocabExercise: {
    title: "Relaciona cada verbo base con su pasado",
    instructions: "Une cada verbo con su forma en pasado.",
    type: "match",
    questions: [
      { pairs: [
          ["go", "went"], ["eat", "ate"], ["see", "saw"],
          ["have", "had"], ["do", "did"], ["come", "came"],
        ],
        explanation: "Vocabulario de verbos irregulares que usaremos en este tema." }
    ]
  },

  theory: `
    <p>Muchos verbos comunes en inglés son <strong>irregulares</strong>: no siguen la regla del "-ed",
    tienen una forma de pasado propia que hay que memorizar.</p>
    <table>
      <tr><th>Presente</th><th>Pasado</th><th>Traducción</th></tr>
      <tr><td>go</td><td>went</td><td>ir → fui</td></tr>
      <tr><td>eat</td><td>ate</td><td>comer → comí</td></tr>
      <tr><td>see</td><td>saw</td><td>ver → vi</td></tr>
      <tr><td>have</td><td>had</td><td>tener → tuve</td></tr>
      <tr><td>do</td><td>did</td><td>hacer → hice</td></tr>
      <tr><td>make</td><td>made</td><td>hacer/fabricar → hice</td></tr>
      <tr><td>come</td><td>came</td><td>venir → vine</td></tr>
      <tr><td>take</td><td>took</td><td>tomar → tomé</td></tr>
    </table>
    <p>Al igual que los regulares, el pasado <strong>no cambia</strong> según el pronombre.
    Y en negativo y preguntas se usa <strong>didn't</strong> / <strong>Did</strong> + verbo BASE (no la forma irregular).</p>
    <p>Ejemplo: <strong>I went to the park.</strong> (Fui al parque.) —
    <strong>She didn't go to school.</strong> (Ella no fue a la escuela — no "didn't went".) —
    <strong>Did you eat breakfast?</strong> (¿Desayunaste?)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma correcta del pasado.",
      type: "mc",
      questions: [
        { prompt: "I ___ to the park yesterday.", options: ["go", "went", "goed"], correct: 1,
          explanation: "El pasado de 'go' es 'went'." },
        { prompt: "She ___ breakfast this morning.", options: ["eat", "ate", "eated"], correct: 1,
          explanation: "El pasado de 'eat' es 'ate'." },
        { prompt: "We ___ a great movie last night.", options: ["see", "saw", "seed"], correct: 1,
          explanation: "El pasado de 'see' es 'saw'." },
        { prompt: "He ___ a headache yesterday.", options: ["have", "had", "haved"], correct: 1,
          explanation: "El pasado de 'have' es 'had'." },
        { prompt: "She didn't ___ her homework.", options: ["do", "did", "does"], correct: 0,
          explanation: "En negativo se usa el verbo BASE: 'do', no 'did'." },
        { prompt: "___ you come to the party?", options: ["Do", "Did", "Does"], correct: 1,
          explanation: "Pregunta en pasado: 'Did' + verbo base." },
        { prompt: "They ___ a cake for the party.", options: ["make", "made", "maked"], correct: 1,
          explanation: "El pasado de 'make' es 'made'." },
        { prompt: "I ___ the bus this morning.", options: ["take", "took", "taked"], correct: 1,
          explanation: "El pasado de 'take' es 'took'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Escribe la forma correcta del pasado.",
      type: "fill",
      questions: [
        { prompt: "I ___ (go) to the store yesterday.", correct: ["went"], explanation: "El pasado de 'go' es 'went'." },
        { prompt: "She ___ (eat) pizza last night.", correct: ["ate"], explanation: "El pasado de 'eat' es 'ate'." },
        { prompt: "We ___ (see) them at the mall.", correct: ["saw"], explanation: "El pasado de 'see' es 'saw'." },
        { prompt: "He ___ (have) a great time.", correct: ["had"], explanation: "El pasado de 'have' es 'had'." },
        { prompt: "___ you ___ (do) your homework?", correct: ["did you do"], explanation: "Pregunta: Did + sujeto + verbo base 'do'." },
        { prompt: "They ___ (come) to visit us.", correct: ["came"], explanation: "El pasado de 'come' es 'came'." },
        { prompt: "I ___ (not/go) to the party.", correct: ["didn't go"], explanation: "Negación: didn't + verbo base 'go'." },
        { prompt: "She ___ (make) a delicious cake.", correct: ["made"], explanation: "El pasado de 'make' es 'made'." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "went", "to", "the", "park", "."], translation: "Fui al parque.",
          explanation: "Orden: sujeto + went + preposición + lugar." },
        { words: ["She", "ate", "breakfast", "at", "eight", "."], translation: "Ella desayunó a las ocho.",
          explanation: "Orden: sujeto + ate + objeto + hora." },
        { words: ["Did", "you", "see", "the", "movie", "?"], translation: "¿Viste la película?",
          explanation: "Pregunta: Did + sujeto + verbo base 'see'." },
        { words: ["We", "didn't", "go", "to", "school", "."], translation: "No fuimos a la escuela.",
          explanation: "Negación: didn't + verbo base 'go'." },
        { words: ["He", "had", "a", "good", "day", "."], translation: "Él tuvo un buen día.",
          explanation: "Orden: sujeto + had + artículo + adjetivo + sustantivo." },
        { words: ["They", "came", "to", "my", "house", "."], translation: "Ellos vinieron a mi casa.",
          explanation: "Orden: sujeto + came + preposición + lugar." },
        { words: ["I", "took", "the", "bus", "yesterday", "."], translation: "Tomé el autobús ayer.",
          explanation: "Orden: sujeto + took + objeto + tiempo." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada verbo base con su forma correcta en pasado.",
      type: "match",
      questions: [
        { pairs: [
            ["go", "went"], ["eat", "ate"], ["see", "saw"], ["have", "had"],
            ["do", "did"], ["make", "made"], ["take", "took"],
          ],
          explanation: "Estos son algunos de los verbos irregulares más frecuentes." }
      ]
    }
  ]
};
