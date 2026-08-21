window.EXERCISE_DATA = {
  title: "Simple Future (be going to)",
  translation: "Futuro con 'ir a' — planes",
  level: "Nivel 2 · Básico 1 (A1)",

  vocabulary: [
    { en: "plan", es: "plan / planear" },
    { en: "intend", es: "tener la intención de" },
    { en: "trip", es: "viaje" },
    { en: "vacation", es: "vacaciones" },
    { en: "already", es: "ya" },
    { en: "decide", es: "decidir" },
    { en: "expect", es: "esperar (que ocurra)" },
    { en: "sky", es: "cielo" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["plan", "plan / planear"], ["trip", "viaje"], ["vacation", "vacaciones"],
          ["already", "ya"], ["decide", "decidir"], ["sky", "cielo"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p><strong>Be going to</strong> se usa para hablar de <strong>planes ya decididos</strong>
    y para predicciones basadas en evidencia visible.</p>
    <table>
      <tr><th>Forma</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Afirmativa</td><td>I am going to travel.</td><td>Voy a viajar.</td></tr>
      <tr><td>Negativa</td><td>She isn't going to come.</td><td>Ella no va a venir.</td></tr>
      <tr><td>Pregunta</td><td>Are you going to study?</td><td>¿Vas a estudiar?</td></tr>
    </table>
    <p>Se forma con el verbo <strong>to be</strong> (am/is/are) + <strong>going to</strong> + verbo base.</p>
    <p>Diferencia con "will": usamos <strong>be going to</strong> cuando el plan ya está decidido
    de antemano (<em>I'm going to visit my grandma this weekend</em> — ya lo decidí),
    y <strong>will</strong> para decisiones espontáneas del momento.</p>
    <p>También se usa para predicciones con evidencia visible: <strong>Look at those clouds!
    It's going to rain.</strong> (¡Mira esas nubes! Va a llover.)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "I ___ going to visit my grandma.", options: ["am", "is", "are"], correct: 0,
          explanation: "Con 'I' se usa 'am'." },
        { prompt: "She ___ going to study tonight.", options: ["am", "is", "are"], correct: 1,
          explanation: "Con 'she' se usa 'is'." },
        { prompt: "They ___ going to travel next month.", options: ["am", "is", "are"], correct: 2,
          explanation: "Con 'they' se usa 'are'." },
        { prompt: "Look at the sky! It ___ going to rain.", options: ["am", "is", "are"], correct: 1,
          explanation: "Con 'it' se usa 'is'. Se ve evidencia visible (nubes)." },
        { prompt: "We ___ not going to the party.", options: ["are", "is", "am"], correct: 0,
          explanation: "Con 'we' se usa 'are' incluso en negativo." },
        { prompt: "___ you going to call her?", options: ["Am", "Is", "Are"], correct: 2,
          explanation: "Con 'you' en preguntas se usa 'Are'." },
        { prompt: "He ___ going to buy a new car.", options: ["am", "is", "are"], correct: 1,
          explanation: "Con 'he' se usa 'is'." },
        { prompt: "I ___ not going to eat that.", options: ["am", "is", "are"], correct: 0,
          explanation: "Con 'I' se usa 'am' incluso en negativo." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con la forma correcta de be going to.",
      type: "fill",
      questions: [
        { prompt: "I ___ (going to/travel) next year.", correct: ["am going to travel"], explanation: "am + going to + verbo base." },
        { prompt: "She ___ (going to/study) medicine.", correct: ["is going to study"], explanation: "is + going to + verbo base." },
        { prompt: "We ___ (not/going to/go) to the beach.", correct: ["aren't going to go", "are not going to go"], explanation: "Negación: aren't + going to + verbo base." },
        { prompt: "___ you ___ (going to/help) me?", correct: ["are you going to help"], explanation: "Pregunta: Are + sujeto + going to + verbo base." },
        { prompt: "They ___ (going to/visit) us tomorrow.", correct: ["are going to visit"], explanation: "are + going to + verbo base." },
        { prompt: "It ___ (going to/be) a great day.", correct: ["is going to be"], explanation: "is + going to + verbo base." },
        { prompt: "He ___ (not/going to/come) tonight.", correct: ["isn't going to come", "is not going to come"], explanation: "Negación: isn't + going to + verbo base." },
        { prompt: "I ___ (going to/buy) a new phone.", correct: ["am going to buy"], explanation: "am + going to + verbo base." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "am", "going", "to", "travel", "next", "year", "."], translation: "Voy a viajar el próximo año.",
          explanation: "Orden: sujeto + am + going to + verbo base + tiempo." },
        { words: ["She", "is", "going", "to", "study", "tonight", "."], translation: "Ella va a estudiar esta noche.",
          explanation: "Orden: sujeto + is + going to + verbo base + tiempo." },
        { words: ["Are", "you", "going", "to", "help", "me", "?"], translation: "¿Vas a ayudarme?",
          explanation: "Pregunta: Are + sujeto + going to + verbo base." },
        { words: ["We", "aren't", "going", "to", "the", "party", "."], translation: "No vamos a ir a la fiesta.",
          explanation: "Negación: aren't antes de 'going to'." },
        { words: ["It", "is", "going", "to", "rain", "."], translation: "Va a llover.",
          explanation: "Predicción con evidencia visible." },
        { words: ["They", "are", "going", "to", "buy", "a", "house", "."], translation: "Ellos van a comprar una casa.",
          explanation: "Orden: sujeto + are + going to + verbo base + objeto." },
        { words: ["He", "isn't", "going", "to", "come", "tonight", "."], translation: "Él no va a venir esta noche.",
          explanation: "Negación: isn't antes de 'going to'." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["I'm going to travel", "Voy a viajar"], ["She's going to study", "Ella va a estudiar"],
            ["We're not going to go", "No vamos a ir"], ["It's going to rain", "Va a llover"],
            ["Are you going to help?", "¿Vas a ayudar?"], ["They're going to visit", "Ellos van a visitar"], ["a plan", "un plan"],
          ],
          explanation: "'Be going to' expresa planes ya decididos." }
      ]
    }
  ]
};
