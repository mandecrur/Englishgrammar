window.EXERCISE_DATA = {
  title: "Present Perfect (ever / never)",
  translation: "Presente perfecto — experiencias de vida",
  level: "Nivel 3 · Básico 2 (A2)",

  vocabulary: [
    { en: "ever", es: "alguna vez" },
    { en: "never", es: "nunca" },
    { en: "already", es: "ya" },
    { en: "yet", es: "todavía / ya (en preguntas/negativo)" },
    { en: "experience", es: "experiencia" },
    { en: "abroad", es: "en el extranjero" },
    { en: "travel", es: "viajar" },
    { en: "try", es: "intentar / probar" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["ever", "alguna vez"], ["never", "nunca"], ["already", "ya"],
          ["yet", "todavía / ya"], ["experience", "experiencia"], ["abroad", "en el extranjero"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>El presente perfecto se usa para hablar de <strong>experiencias de vida</strong>, sin importar
    cuándo ocurrieron exactamente. Se forma con <strong>have/has + participio pasado</strong>.</p>
    <table>
      <tr><th>Forma</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Afirmativa</td><td>I have visited Paris.</td><td>He visitado París.</td></tr>
      <tr><td>Negativa</td><td>She hasn't traveled abroad.</td><td>Ella no ha viajado al extranjero.</td></tr>
      <tr><td>Pregunta</td><td>Have you ever tried sushi?</td><td>¿Alguna vez has probado sushi?</td></tr>
    </table>
    <p><strong>Ever</strong> (alguna vez) se usa en preguntas: <strong>Have you ever been to Japan?</strong><br>
    <strong>Never</strong> (nunca) se usa en afirmativo con sentido negativo: <strong>I have never been to Japan.</strong></p>
    <p>Los verbos regulares forman el participio con -ed (igual que el pasado); los irregulares
    tienen una forma propia: <strong>go → gone</strong>, <strong>see → seen</strong>, <strong>eat → eaten</strong>.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "I ___ visited Paris.", options: ["have", "has", "am"], correct: 0,
          explanation: "Con 'I' se usa 'have'." },
        { prompt: "She ___ never traveled abroad.", options: ["have", "has", "is"], correct: 1,
          explanation: "Con 'she' se usa 'has'." },
        { prompt: "___ you ever tried sushi?", options: ["Have", "Has", "Did"], correct: 0,
          explanation: "Con 'you' se usa 'Have'." },
        { prompt: "He has ___ (see) that movie.", options: ["see", "saw", "seen"], correct: 2,
          explanation: "El participio de 'see' es 'seen'." },
        { prompt: "They ___ never been to Japan.", options: ["have", "has", "are"], correct: 0,
          explanation: "Con 'they' se usa 'have'." },
        { prompt: "I have ___ (eat) octopus before.", options: ["eat", "ate", "eaten"], correct: 2,
          explanation: "El participio de 'eat' es 'eaten'." },
        { prompt: "She has ___ (go) to Brazil twice.", options: ["go", "went", "gone"], correct: 2,
          explanation: "El participio de 'go' es 'gone'." },
        { prompt: "Have they ___ visited Cusco?", options: ["ever", "never", "already"], correct: 0,
          explanation: "'Ever' se usa en preguntas afirmativas." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con have/has + el participio correcto.",
      type: "fill",
      questions: [
        { prompt: "I ___ (visit) Machu Picchu.", correct: ["have visited"], explanation: "have + participio regular." },
        { prompt: "She ___ (never/try) Thai food.", correct: ["has never tried"], explanation: "has never + participio." },
        { prompt: "___ you ___ (see) that movie?", correct: ["have you seen"], explanation: "Pregunta: Have + sujeto + participio." },
        { prompt: "He ___ (go) to Europe twice.", correct: ["has gone"], explanation: "has + participio irregular 'gone'." },
        { prompt: "We ___ (not/travel) abroad.", correct: ["haven't traveled"], explanation: "Negación: haven't + participio." },
        { prompt: "I ___ (eat) sushi before.", correct: ["have eaten"], explanation: "have + participio irregular 'eaten'." },
        { prompt: "___ she ___ (be) to Japan?", correct: ["has she been"], explanation: "Pregunta: Has + sujeto + participio 'been'." },
        { prompt: "They ___ (never/see) snow.", correct: ["have never seen"], explanation: "have never + participio." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "have", "visited", "Paris", "."], translation: "He visitado París.",
          explanation: "Orden: sujeto + have + participio + complemento." },
        { words: ["Have", "you", "ever", "tried", "sushi", "?"], translation: "¿Alguna vez has probado sushi?",
          explanation: "Pregunta: Have + sujeto + ever + participio." },
        { words: ["She", "has", "never", "traveled", "abroad", "."], translation: "Ella nunca ha viajado al extranjero.",
          explanation: "Orden: sujeto + has + never + participio." },
        { words: ["We", "haven't", "seen", "that", "movie", "."], translation: "No hemos visto esa película.",
          explanation: "Negación: haven't + participio." },
        { words: ["He", "has", "gone", "to", "Brazil", "."], translation: "Él ha ido a Brasil.",
          explanation: "Orden: sujeto + has + participio + lugar." },
        { words: ["They", "have", "eaten", "octopus", "before", "."], translation: "Ellos han comido pulpo antes.",
          explanation: "Orden: sujeto + have + participio + objeto." },
        { words: ["Has", "she", "ever", "been", "to", "Japan", "?"], translation: "¿Ha estado ella alguna vez en Japón?",
          explanation: "Pregunta: Has + sujeto + ever + participio." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada verbo base con su participio pasado.",
      type: "match",
      questions: [
        { pairs: [
            ["see", "seen"], ["go", "gone"], ["eat", "eaten"], ["be", "been"],
            ["do", "done"], ["try", "tried"], ["visit", "visited"],
          ],
          explanation: "Practica los participios pasados regulares e irregulares." }
      ]
    }
  ]
};
