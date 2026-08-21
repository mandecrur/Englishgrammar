window.EXERCISE_DATA = {
  title: "This / That / These / Those",
  translation: "Demostrativos: este, ese, estos, esos",
  level: "Nivel 1 · Beginners",

  vocabulary: [
    { en: "pencil", es: "lápiz" },
    { en: "shoes", es: "zapatos" },
    { en: "keys", es: "llaves" },
    { en: "over there", es: "allá / por allá" },
    { en: "here", es: "aquí" },
    { en: "umbrella", es: "paraguas" },
    { en: "glasses", es: "lentes / gafas" },
    { en: "bicycle", es: "bicicleta" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["pencil", "lápiz"], ["shoes", "zapatos"], ["keys", "llaves"],
          ["here", "aquí"], ["umbrella", "paraguas"], ["glasses", "lentes"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Los demostrativos combinan <strong>distancia</strong> (cerca/lejos) y <strong>número</strong> (singular/plural).</p>
    <table>
      <tr><th></th><th>Cerca</th><th>Lejos</th></tr>
      <tr><td>Singular</td><td><strong>this</strong> (este/esta)</td><td><strong>that</strong> (ese/aquel)</td></tr>
      <tr><td>Plural</td><td><strong>these</strong> (estos/estas)</td><td><strong>those</strong> (esos/aquellos)</td></tr>
    </table>
    <p><strong>This is my book.</strong> (Este es mi libro — aquí.)<br>
    <strong>That is your car.</strong> (Ese es tu carro — allá.)<br>
    <strong>These are my shoes.</strong> (Estos son mis zapatos — aquí, plural.)<br>
    <strong>Those are your keys.</strong> (Esas son tus llaves — allá, plural.)</p>
    <p>También se pueden usar antes de un sustantivo, como adjetivos: <strong>this book</strong>,
    <strong>those shoes</strong>.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta según la distancia y el número.",
      type: "mc",
      questions: [
        { prompt: "___ is my pencil (aquí, cerca).", options: ["This", "That", "These"], correct: 0,
          explanation: "'This' se usa para algo singular y cercano." },
        { prompt: "___ are my friends (allá, lejos, plural).", options: ["This", "That", "Those"], correct: 2,
          explanation: "'Those' se usa para algo plural y lejano." },
        { prompt: "___ book is very interesting (este, cerca).", options: ["This", "These", "Those"], correct: 0,
          explanation: "'This' funciona como adjetivo antes de 'book' (singular, cerca)." },
        { prompt: "___ shoes are new (estos, cerca, plural).", options: ["This", "These", "That"], correct: 1,
          explanation: "'These' se usa para plural y cercano." },
        { prompt: "Is ___ your umbrella (eso, allá)?", options: ["this", "that", "these"], correct: 1,
          explanation: "'That' se usa para singular y lejano." },
        { prompt: "___ glasses are mine (esos, allá, plural).", options: ["This", "That", "Those"], correct: 2,
          explanation: "'Those' se usa para plural y lejano." },
        { prompt: "___ is a nice bicycle (esa, allá).", options: ["This", "That", "These"], correct: 1,
          explanation: "'That' se usa para singular y lejano." },
        { prompt: "___ are delicious apples (estas, cerca, plural).", options: ["This", "These", "That"], correct: 1,
          explanation: "'These' se usa para plural y cercano." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con this, that, these o those.",
      type: "fill",
      questions: [
        { prompt: "___ is my house (aquí).", correct: ["this"], explanation: "'This' para singular cercano." },
        { prompt: "___ are my parents (allá, plural).", correct: ["those"], explanation: "'Those' para plural lejano." },
        { prompt: "___ car over there is expensive (ese).", correct: ["that"], explanation: "'That' para singular lejano." },
        { prompt: "___ shoes are new (estos, cerca).", correct: ["these"], explanation: "'These' para plural cercano." },
        { prompt: "Is ___ your phone (aquí)?", correct: ["this"], explanation: "'This' para singular cercano." },
        { prompt: "___ keys on the table are mine (estas).", correct: ["these"], explanation: "'These' para plural cercano." },
        { prompt: "___ house over there is beautiful (esa).", correct: ["that"], explanation: "'That' para singular lejano." },
        { prompt: "___ are my favorite books (estos).", correct: ["these"], explanation: "'These' para plural cercano." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["This", "is", "my", "pencil", "."], translation: "Este es mi lápiz.",
          explanation: "Estructura simple con 'this' + 'is'." },
        { words: ["Those", "are", "my", "keys", "."], translation: "Esas son mis llaves.",
          explanation: "Estructura plural con 'those' + 'are'." },
        { words: ["Is", "that", "your", "car", "?"], translation: "¿Es ese tu carro?",
          explanation: "Pregunta: verbo 'is' antes del demostrativo 'that'." },
        { words: ["These", "shoes", "are", "very", "comfortable", "."], translation: "Estos zapatos son muy cómodos.",
          explanation: "'These' funciona como adjetivo antes de 'shoes'." },
        { words: ["That", "is", "not", "my", "umbrella", "."], translation: "Ese no es mi paraguas.",
          explanation: "Negación con 'not' después de 'is'." },
        { words: ["Are", "these", "your", "glasses", "?"], translation: "¿Son estos tus lentes?",
          explanation: "Pregunta: verbo 'are' antes del demostrativo 'these'." },
        { words: ["This", "bicycle", "is", "mine", "."], translation: "Esta bicicleta es mía.",
          explanation: "'This' como adjetivo antes de 'bicycle'." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada demostrativo con su significado.",
      type: "match",
      questions: [
        { pairs: [
            ["this", "este (cerca, singular)"], ["that", "ese (lejos, singular)"],
            ["these", "estos (cerca, plural)"], ["those", "esos (lejos, plural)"],
            ["here", "aquí"], ["over there", "allá"], ["umbrella", "paraguas"],
          ],
          explanation: "Los cuatro demostrativos combinan distancia y número." }
      ]
    }
  ]
};
