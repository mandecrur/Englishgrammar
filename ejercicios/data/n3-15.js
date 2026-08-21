window.EXERCISE_DATA = {
  title: "Articles (a/an, the, ø)",
  translation: "Artículos: a/an, the, o ninguno",
  level: "Nivel 3 · Básico 2 (A2)",

  vocabulary: [
    { en: "specific", es: "específico" },
    { en: "general", es: "general" },
    { en: "unique", es: "único" },
    { en: "mention", es: "mencionar" },
    { en: "first time", es: "primera vez" },
    { en: "already known", es: "ya conocido" },
    { en: "moon", es: "luna" },
    { en: "sun", es: "sol" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["specific", "específico"], ["general", "general"], ["unique", "único"],
          ["mention", "mencionar"], ["moon", "luna"], ["sun", "sol"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>En inglés hay tres opciones de artículo: <strong>a/an</strong> (indefinido), <strong>the</strong>
    (definido), o <strong>ningún artículo</strong>.</p>
    <table>
      <tr><th>Uso</th><th>Ejemplo</th></tr>
      <tr><td>a/an: mencionar algo por primera vez</td><td>I saw a dog. (no se sabe cuál)</td></tr>
      <tr><td>the: algo específico, ya mencionado o único</td><td>The dog was brown. (ya sabemos cuál) / The sun is bright.</td></tr>
      <tr><td>sin artículo: generalizaciones, plurales generales</td><td>Dogs are loyal. (los perros en general)</td></tr>
    </table>
    <p>Regla clave: la primera vez que mencionas algo usas <strong>a/an</strong>; la segunda vez que
    lo mencionas (ya es específico) usas <strong>the</strong>:
    <strong>I saw a cat. The cat was black.</strong></p>
    <p><strong>The</strong> también se usa con cosas únicas: <strong>the sun</strong>, <strong>the moon</strong>,
    <strong>the internet</strong>. No se usa artículo con nombres propios, países (mayoría), o
    generalizaciones en plural: <strong>Cats are independent.</strong> (no "The cats").</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige el artículo correcto.",
      type: "mc",
      questions: [
        { prompt: "I saw ___ dog in the park. (primera mención)", options: ["a", "the", "-"], correct: 0,
          explanation: "Primera mención: se usa 'a'." },
        { prompt: "___ dog was very friendly. (ya mencionado)", options: ["A", "The", "-"], correct: 1,
          explanation: "Segunda mención, ya específico: se usa 'the'." },
        { prompt: "___ sun is very bright today. (único)", options: ["A", "The", "-"], correct: 1,
          explanation: "'The sun' porque es algo único." },
        { prompt: "___ cats are independent animals. (generalización)", options: ["A", "The", "-"], correct: 2,
          explanation: "Generalización en plural: sin artículo." },
        { prompt: "She is ___ engineer. (profesión, primera mención)", options: ["a", "an", "the"], correct: 1,
          explanation: "'Engineer' empieza con sonido vocal: 'an'." },
        { prompt: "___ Peru is a beautiful country. (nombre de país)", options: ["A", "The", "-"], correct: 2,
          explanation: "La mayoría de países no llevan artículo." },
        { prompt: "Can you close ___ door, please? (específica, ya sabida)", options: ["a", "the", "-"], correct: 1,
          explanation: "Puerta específica y conocida por ambos: 'the'." },
        { prompt: "___ water is essential for life. (generalización)", options: ["A", "The", "-"], correct: 2,
          explanation: "Generalización de sustantivo incontable: sin artículo." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con a, an, the, o deja en blanco (-) según corresponda.",
      type: "fill",
      questions: [
        { prompt: "I bought ___ book yesterday. (a/the/-)", correct: ["a"], explanation: "Primera mención: 'a'." },
        { prompt: "___ book was really interesting. (a/the/-)", correct: ["the"], explanation: "Ya mencionado: 'the'." },
        { prompt: "___ moon orbits the Earth. (a/the/-)", correct: ["the"], explanation: "Cosa única: 'the'." },
        { prompt: "Dogs are ___ (a/the/-) loyal animals. (generalización)", correct: ["-"], explanation: "Generalización: sin artículo." },
        { prompt: "She works as ___ teacher. (a/an/the)", correct: ["a"], explanation: "'Teacher' empieza en consonante: 'a'." },
        { prompt: "He is ___ (a/an/the) architect.", correct: ["an"], explanation: "'Architect' empieza en sonido vocal: 'an'." },
        { prompt: "Can you open ___ window, please? (específica)", correct: ["the"], explanation: "Ventana específica conocida: 'the'." },
        { prompt: "___ (A/The/-) Japan is in Asia. (país)", correct: ["-"], explanation: "Países normalmente sin artículo." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "saw", "a", "cat", "yesterday", "."], translation: "Vi un gato ayer.",
          explanation: "Primera mención con 'a'." },
        { words: ["The", "cat", "was", "very", "small", "."], translation: "El gato era muy pequeño.",
          explanation: "Segunda mención, ya específico: 'the'." },
        { words: ["The", "sun", "rises", "in", "the", "east", "."], translation: "El sol sale por el este.",
          explanation: "'The sun' es algo único." },
        { words: ["Cats", "are", "independent", "animals", "."], translation: "Los gatos son animales independientes.",
          explanation: "Generalización en plural: sin artículo." },
        { words: ["She", "is", "an", "excellent", "doctor", "."], translation: "Ella es una excelente doctora.",
          explanation: "'An' antes de sonido vocal (excellent)." },
        { words: ["Can", "you", "close", "the", "door", "?"], translation: "¿Puedes cerrar la puerta?",
          explanation: "Puerta específica y conocida: 'the'." },
        { words: ["Water", "is", "essential", "for", "life", "."], translation: "El agua es esencial para la vida.",
          explanation: "Generalización de incontable: sin artículo." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada situación con el artículo correcto.",
      type: "match",
      questions: [
        { pairs: [
            ["first mention", "a/an"], ["already mentioned", "the"], ["unique thing (sun)", "the"],
            ["general plural", "sin artículo"], ["most country names", "sin artículo"], ["specific known object", "the"], ["general uncountable", "sin artículo"],
          ],
          explanation: "El uso del artículo depende de si algo es específico, único o general." }
      ]
    }
  ]
};
