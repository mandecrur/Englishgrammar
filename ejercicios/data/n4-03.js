window.EXERCISE_DATA = {
  title: "Past Perfect vs Simple Past",
  translation: "Pluscuamperfecto vs pasado simple",
  level: "Nivel 4 · Intermedio Bajo (B1)",

  vocabulary: [
    { en: "sequence", es: "secuencia" },
    { en: "first", es: "primero" },
    { en: "then", es: "luego / entonces" },
    { en: "order of events", es: "orden de los eventos" },
    { en: "earlier", es: "antes / más temprano" },
    { en: "later", es: "después / más tarde" },
    { en: "meanwhile", es: "mientras tanto" },
    { en: "at that point", es: "en ese punto" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["sequence", "secuencia"], ["first", "primero"], ["then", "luego / entonces"],
          ["earlier", "antes"], ["later", "después"], ["meanwhile", "mientras tanto"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Cuando dos acciones ocurren en el pasado, se usa <strong>pasado perfecto</strong> para la que
    ocurrió <strong>primero</strong>, y <strong>pasado simple</strong> para la que ocurrió
    <strong>después</strong>.</p>
    <table>
      <tr><th>Orden</th><th>Tiempo verbal</th><th>Ejemplo</th></tr>
      <tr><td>1° (más antigua)</td><td>Pasado perfecto (had + participio)</td><td>had eaten</td></tr>
      <tr><td>2° (más reciente)</td><td>Pasado simple</td><td>arrived</td></tr>
    </table>
    <p>Ejemplo completo: <strong>When she arrived, I had already eaten.</strong>
    (Cuando ella llegó, yo ya había comido — primero comí, después ella llegó.)</p>
    <p>Si las dos acciones ocurren <strong>al mismo tiempo</strong> o en el orden en que se cuentan,
    simplemente se usa pasado simple para ambas: <strong>I ate breakfast and then I went to work.</strong>
    (Desayuné y luego fui a trabajar — orden cronológico normal, no hace falta pasado perfecto.)</p>
    <p>El pasado perfecto solo es necesario cuando se necesita aclarar que algo pasó <strong>antes</strong>
    de lo que se está contando, especialmente si el orden no es obvio.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige el tiempo verbal correcto según el orden de los eventos.",
      type: "mc",
      questions: [
        { prompt: "When she ___ (arrive), I had already left.", options: ["arrived", "had arrived", "arrives"], correct: 0,
          explanation: "La acción más reciente (llegar) va en pasado simple." },
        { prompt: "I ___ (eat) breakfast and then went to work. (orden cronológico simple)", options: ["ate", "had eaten", "eat"], correct: 0,
          explanation: "Sin necesidad de pasado perfecto, se cuenta en orden: pasado simple." },
        { prompt: "By the time we arrived, the movie ___ (start).", options: ["started", "had started", "starts"], correct: 1,
          explanation: "La acción anterior (empezar) va en pasado perfecto." },
        { prompt: "She was tired because she ___ (work) all day.", options: ["worked", "had worked", "works"], correct: 1,
          explanation: "La razón (trabajar) ocurrió antes de sentirse cansada: pasado perfecto." },
        { prompt: "He ___ (call) me, and then I called him back.", options: ["called", "had called", "calls"], correct: 0,
          explanation: "Orden cronológico simple: pasado simple para ambas." },
        { prompt: "I couldn't get in because I ___ (forget) my keys.", options: ["forgot", "had forgotten", "forget"], correct: 1,
          explanation: "Olvidar las llaves ocurrió antes: pasado perfecto." },
        { prompt: "After she ___ (finish) her homework, she watched TV.", options: ["finished", "had finished", "finishes"], correct: 1,
          explanation: "'After' + pasado perfecto para la acción completada primero." },
        { prompt: "We ___ (eat) dinner and then went for a walk.", options: ["ate", "had eaten", "eat"], correct: 0,
          explanation: "Orden cronológico simple: pasado simple." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con la forma correcta (pasado simple o pasado perfecto).",
      type: "fill",
      questions: [
        { prompt: "When I arrived, she ___ (leave) already.", correct: ["had left"], explanation: "Acción anterior: pasado perfecto." },
        { prompt: "I ___ (wake up), and then I made breakfast.", correct: ["woke up"], explanation: "Orden cronológico simple: pasado simple." },
        { prompt: "By the time he called, I ___ (finish) my work.", correct: ["had finished"], explanation: "Acción anterior: pasado perfecto." },
        { prompt: "She was sad because her dog ___ (die).", correct: ["had died"], explanation: "Causa anterior al sentimiento: pasado perfecto." },
        { prompt: "We ___ (watch) a movie and then went to bed.", correct: ["watched"], explanation: "Orden cronológico simple: pasado simple." },
        { prompt: "I couldn't recognize him because he ___ (change) so much.", correct: ["had changed"], explanation: "Acción anterior: pasado perfecto." },
        { prompt: "After the rain ___ (stop), we went outside.", correct: ["had stopped"], explanation: "'After' + pasado perfecto para lo que terminó primero." },
        { prompt: "He ___ (open) the door and walked in.", correct: ["opened"], explanation: "Orden cronológico simple: pasado simple." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["When", "she", "arrived", ",", "I", "had", "already", "eaten", "."], translation: "Cuando ella llegó, ya había comido.",
          explanation: "Pasado simple para lo reciente, pasado perfecto para lo anterior." },
        { words: ["I", "ate", "breakfast", "and", "went", "to", "work", "."], translation: "Desayuné y fui a trabajar.",
          explanation: "Orden cronológico simple: solo pasado simple." },
        { words: ["By", "the", "time", "we", "arrived", ",", "they", "had", "left", "."], translation: "Para cuando llegamos, ellos ya se habían ido.",
          explanation: "'By the time' + pasado simple, con pasado perfecto para lo anterior." },
        { words: ["She", "was", "tired", "because", "she", "had", "worked", "all", "day", "."], translation: "Ella estaba cansada porque había trabajado todo el día.",
          explanation: "Causa anterior en pasado perfecto." },
        { words: ["After", "the", "rain", "had", "stopped", ",", "we", "left", "."], translation: "Después de que dejó de llover, nos fuimos.",
          explanation: "'After' + pasado perfecto para lo que terminó primero." },
        { words: ["I", "couldn't", "find", "my", "keys", "because", "I", "had", "lost", "them", "."], translation: "No pude encontrar mis llaves porque las había perdido.",
          explanation: "Causa anterior en pasado perfecto." },
        { words: ["He", "opened", "the", "door", "and", "walked", "in", "."], translation: "Él abrió la puerta y entró.",
          explanation: "Orden cronológico simple: solo pasado simple." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada situación con el tiempo verbal correcto.",
      type: "match",
      questions: [
        { pairs: [
            ["action that happened first", "pasado perfecto"], ["most recent action", "pasado simple"],
            ["simple chronological order", "pasado simple para ambas"], ["cause before effect", "pasado perfecto para la causa"],
            ["after + completed action", "pasado perfecto"], ["by the time", "pasado perfecto"], ["and then", "pasado simple"],
          ],
          explanation: "El pasado perfecto marca qué ocurrió primero cuando hay dos momentos en el pasado." }
      ]
    }
  ]
};
