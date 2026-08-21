window.EXERCISE_DATA = {
  title: "Simple Present (All Forms)",
  translation: "Presente simple — repaso completo",
  level: "Nivel 2 · Básico 1 (A1)",

  vocabulary: [
    { en: "usually", es: "usualmente" },
    { en: "often", es: "frecuentemente" },
    { en: "always", es: "siempre" },
    { en: "never", es: "nunca" },
    { en: "sometimes", es: "a veces" },
    { en: "habit", es: "hábito / costumbre" },
    { en: "routine", es: "rutina" },
    { en: "usually", es: "usualmente" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["usually", "usualmente"], ["often", "frecuentemente"], ["always", "siempre"],
          ["never", "nunca"], ["sometimes", "a veces"], ["routine", "rutina"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>El presente simple se usa para <strong>hábitos, rutinas y hechos generales</strong>.
    Repasemos todas sus formas juntas:</p>
    <table>
      <tr><th>Forma</th><th>I/You/We/They</th><th>He/She/It</th></tr>
      <tr><td>Afirmativa</td><td>I work.</td><td>She works.</td></tr>
      <tr><td>Negativa</td><td>I don't work.</td><td>She doesn't work.</td></tr>
      <tr><td>Pregunta</td><td>Do I work?</td><td>Does she work?</td></tr>
    </table>
    <p>Se usa frecuentemente con adverbios de frecuencia: <strong>always</strong> (siempre),
    <strong>usually</strong> (usualmente), <strong>often</strong> (frecuentemente),
    <strong>sometimes</strong> (a veces), <strong>never</strong> (nunca). Estos adverbios van
    <strong>antes</strong> del verbo principal: <strong>She always arrives on time.</strong>
    (Ella siempre llega a tiempo.)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "She ___ to work every day.", options: ["drive", "drives", "driving"], correct: 1,
          explanation: "Con 'she' se añade '-s': drives." },
        { prompt: "I ___ not like tea.", options: ["do", "does", "am"], correct: 0,
          explanation: "Con 'I' la negación usa 'do not' (don't)." },
        { prompt: "___ he play the guitar?", options: ["Do", "Does", "Is"], correct: 1,
          explanation: "Con 'he' en preguntas se usa 'Does'." },
        { prompt: "They ___ always happy.", options: ["is", "are", "am"], correct: 1,
          explanation: "Con 'they' se usa 'are' del verbo to be." },
        { prompt: "She ___ usually late.", options: ["is", "are", "do"], correct: 0,
          explanation: "Con 'she' se usa 'is' del verbo to be." },
        { prompt: "We ___ never eat meat.", options: ["do", "does", "is"], correct: 0,
          explanation: "Con 'we' se usa 'do' como auxiliar." },
        { prompt: "He ___ often reads before bed.", options: ["is", "does", "-"], correct: 2,
          explanation: "En afirmativo no se necesita auxiliar, solo el verbo: 'He often reads'." },
        { prompt: "___ they speak French?", options: ["Do", "Does", "Are"], correct: 0,
          explanation: "Con 'they' en preguntas se usa 'Do'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Escribe la forma correcta del verbo.",
      type: "fill",
      questions: [
        { prompt: "She ___ (not/eat) meat.", correct: ["doesn't eat"], explanation: "Negación con he/she/it: doesn't + verbo base." },
        { prompt: "I ___ (usually/wake up) at 6 AM.", correct: ["usually wake up"], explanation: "El adverbio va antes del verbo." },
        { prompt: "___ you ___ (like) pizza?", correct: ["do you like"], explanation: "Pregunta con you: Do + sujeto + verbo base." },
        { prompt: "He ___ (always/arrive) late.", correct: ["always arrives"], explanation: "Con he/she/it se añade -s, adverbio antes del verbo." },
        { prompt: "We ___ (not/have) class on Sundays.", correct: ["don't have"], explanation: "Negación con we: don't + verbo base." },
        { prompt: "___ she ___ (work) here?", correct: ["does she work"], explanation: "Pregunta con she: Does + sujeto + verbo base." },
        { prompt: "They ___ (never/watch) horror movies.", correct: ["never watch"], explanation: "Con they no se añade -s, adverbio antes del verbo." },
        { prompt: "It ___ (rain) a lot in April.", correct: ["rains"], explanation: "Con 'it' se añade -s." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["She", "always", "arrives", "on", "time", "."], translation: "Ella siempre llega a tiempo.",
          explanation: "Adverbio 'always' antes del verbo." },
        { words: ["I", "don't", "drink", "coffee", "."], translation: "Yo no bebo café.",
          explanation: "Negación con don't antes del verbo base." },
        { words: ["Does", "he", "play", "football", "?"], translation: "¿Juega él fútbol?",
          explanation: "Pregunta con Does + sujeto + verbo base." },
        { words: ["We", "usually", "eat", "breakfast", "at", "home", "."], translation: "Usualmente desayunamos en casa.",
          explanation: "Adverbio 'usually' antes del verbo." },
        { words: ["She", "doesn't", "like", "spicy", "food", "."], translation: "A ella no le gusta la comida picante.",
          explanation: "Negación con doesn't + verbo base." },
        { words: ["They", "never", "arrive", "early", "."], translation: "Ellos nunca llegan temprano.",
          explanation: "Adverbio 'never' antes del verbo." },
        { words: ["Do", "you", "study", "every", "day", "?"], translation: "¿Estudias todos los días?",
          explanation: "Pregunta con Do + sujeto + verbo base." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada adverbio de frecuencia con su significado.",
      type: "match",
      questions: [
        { pairs: [
            ["always", "siempre"], ["usually", "usualmente"], ["often", "frecuentemente"],
            ["sometimes", "a veces"], ["rarely", "raramente"], ["never", "nunca"], ["every day", "todos los días"],
          ],
          explanation: "Estos adverbios se ordenan de mayor a menor frecuencia." }
      ]
    }
  ]
};
