window.EXERCISE_DATA = {
  title: "Simple Future (will)",
  translation: "Futuro simple con WILL",
  level: "Nivel 2 · Básico 1 (A1)",

  vocabulary: [
    { en: "tomorrow", es: "mañana (día siguiente)" },
    { en: "next week", es: "la próxima semana" },
    { en: "next year", es: "el próximo año" },
    { en: "soon", es: "pronto" },
    { en: "future", es: "futuro" },
    { en: "promise", es: "promesa / prometer" },
    { en: "predict", es: "predecir" },
    { en: "probably", es: "probablemente" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["tomorrow", "mañana"], ["next week", "la próxima semana"], ["soon", "pronto"],
          ["future", "futuro"], ["promise", "promesa / prometer"], ["probably", "probablemente"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p><strong>Will</strong> se usa para hablar de decisiones espontáneas, predicciones y promesas
    sobre el futuro. Se forma con <strong>will</strong> + verbo base (igual para todos los pronombres).</p>
    <table>
      <tr><th>Forma</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Afirmativa</td><td>I will help you.</td><td>Te ayudaré.</td></tr>
      <tr><td>Negativa</td><td>She won't come.</td><td>Ella no vendrá.</td></tr>
      <tr><td>Pregunta</td><td>Will you call me?</td><td>¿Me llamarás?</td></tr>
    </table>
    <p><strong>Won't</strong> es la contracción de <em>will not</em>.</p>
    <p>Se usa frecuentemente con: <strong>tomorrow</strong> (mañana), <strong>next week/year</strong>
    (la próxima semana/año), <strong>soon</strong> (pronto), <strong>probably</strong> (probablemente).</p>
    <p>Ejemplos: <strong>It will rain tomorrow.</strong> (Lloverá mañana — predicción.) —
    <strong>I will call you later.</strong> (Te llamaré luego — decisión espontánea/promesa.)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "I ___ help you with your homework.", options: ["will", "am", "do"], correct: 0,
          explanation: "'Will' + verbo base expresa una promesa/decisión." },
        { prompt: "It ___ rain tomorrow.", options: ["will", "is", "does"], correct: 0,
          explanation: "'Will' se usa para predicciones sobre el futuro." },
        { prompt: "She ___ not come to the party.", options: ["will", "is", "does"], correct: 0,
          explanation: "'Will not' (won't) niega una acción futura." },
        { prompt: "___ you call me later?", options: ["Will", "Are", "Do"], correct: 0,
          explanation: "Pregunta con 'Will' + sujeto + verbo base." },
        { prompt: "They ___ probably win the game.", options: ["will", "are", "do"], correct: 0,
          explanation: "'Will' se usa con adverbios como 'probably' para predicciones." },
        { prompt: "We ___ visit you next week.", options: ["will", "are", "do"], correct: 0,
          explanation: "'Will' expresa un plan futuro simple." },
        { prompt: "He ___ not be at school tomorrow.", options: ["will", "is", "does"], correct: 0,
          explanation: "'Will not' (won't) es la forma negativa." },
        { prompt: "I think it ___ be a good year.", options: ["will", "is", "does"], correct: 0,
          explanation: "'Will' se usa después de 'I think' para predicciones." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa cada oración con will, won't o will la forma correcta.",
      type: "fill",
      questions: [
        { prompt: "I ___ (help) you tomorrow.", correct: ["will help"], explanation: "will + verbo base." },
        { prompt: "She ___ (not/come) to the meeting.", correct: ["won't come"], explanation: "Negación: won't + verbo base." },
        { prompt: "___ they ___ (arrive) on time?", correct: ["will they arrive"], explanation: "Pregunta: Will + sujeto + verbo base." },
        { prompt: "We ___ (travel) next summer.", correct: ["will travel"], explanation: "will + verbo base." },
        { prompt: "It ___ (probably/rain) tomorrow.", correct: ["will probably rain"], explanation: "'Probably' va después de 'will'." },
        { prompt: "I ___ (not/forget) your birthday.", correct: ["won't forget"], explanation: "Negación: won't + verbo base." },
        { prompt: "___ you ___ (call) me later?", correct: ["will you call"], explanation: "Pregunta: Will + sujeto + verbo base." },
        { prompt: "He ___ (be) a great doctor someday.", correct: ["will be"], explanation: "will + verbo base 'be'." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "will", "help", "you", "."], translation: "Te ayudaré.",
          explanation: "Orden: sujeto + will + verbo base + objeto." },
        { words: ["It", "will", "rain", "tomorrow", "."], translation: "Lloverá mañana.",
          explanation: "Orden: sujeto + will + verbo base + tiempo." },
        { words: ["She", "won't", "come", "to", "the", "party", "."], translation: "Ella no vendrá a la fiesta.",
          explanation: "Negación: won't antes del verbo base." },
        { words: ["Will", "you", "call", "me", "later", "?"], translation: "¿Me llamarás luego?",
          explanation: "Pregunta: Will antes del sujeto." },
        { words: ["We", "will", "travel", "next", "year", "."], translation: "Viajaremos el próximo año.",
          explanation: "Orden: sujeto + will + verbo base + tiempo." },
        { words: ["They", "will", "probably", "win", "."], translation: "Ellos probablemente ganarán.",
          explanation: "'Probably' se coloca entre 'will' y el verbo." },
        { words: ["I", "won't", "forget", "this", "day", "."], translation: "No olvidaré este día.",
          explanation: "Negación: won't antes del verbo base." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["I will help", "Yo ayudaré"], ["She won't come", "Ella no vendrá"],
            ["Will you call?", "¿Llamarás?"], ["It will rain", "Lloverá"],
            ["We will travel", "Viajaremos"], ["They will win", "Ellos ganarán"], ["I promise", "Yo prometo"],
          ],
          explanation: "'Will' se usa igual para todos los pronombres." }
      ]
    }
  ]
};
