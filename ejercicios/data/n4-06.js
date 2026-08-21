window.EXERCISE_DATA = {
  title: "Used To",
  translation: "Solía — hábitos pasados que ya no ocurren",
  level: "Nivel 4 · Intermedio Bajo (B1)",

  vocabulary: [
    { en: "habit", es: "hábito" },
    { en: "in the past", es: "en el pasado" },
    { en: "not anymore", es: "ya no" },
    { en: "when I was young", es: "cuando era joven" },
    { en: "routine", es: "rutina" },
    { en: "change", es: "cambiar" },
    { en: "no longer", es: "ya no" },
    { en: "used to be", es: "solía ser" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["habit", "hábito"], ["in the past", "en el pasado"], ["not anymore", "ya no"],
          ["when I was young", "cuando era joven"], ["change", "cambiar"], ["no longer", "ya no"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p><strong>Used to</strong> se usa para hablar de hábitos o situaciones del pasado que
    <strong>ya no ocurren</strong> en el presente. Se forma con <strong>used to + verbo base</strong>,
    igual para todos los pronombres.</p>
    <table>
      <tr><th>Forma</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Afirmativa</td><td>I used to play soccer.</td><td>Solía jugar fútbol (ya no juego).</td></tr>
      <tr><td>Negativa</td><td>She didn't use to like coffee.</td><td>Ella no solía tomar café (ahora sí).</td></tr>
      <tr><td>Pregunta</td><td>Did you use to live here?</td><td>¿Solías vivir aquí?</td></tr>
    </table>
    <p>Nota importante: en negativo y preguntas, se usa <strong>didn't use to</strong> /
    <strong>Did...use to</strong> (sin la "d" final, porque "did" ya marca el pasado).</p>
    <p>No confundir con <strong>be used to</strong> (estar acostumbrado a), que es un tema distinto.
    <strong>Used to</strong> (sin "be") siempre habla de hábitos pasados que cambiaron.</p>
    <p>Ejemplo: <strong>I used to live in Cusco, but now I live in Lima.</strong>
    (Solía vivir en Cusco, pero ahora vivo en Lima.)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "I ___ to play soccer when I was young.", options: ["used", "use", "using"], correct: 0,
          explanation: "'Used to' + verbo base." },
        { prompt: "She didn't ___ to like vegetables.", options: ["used", "use", "using"], correct: 1,
          explanation: "En negativo se usa 'use' sin 'd' (didn't use to)." },
        { prompt: "___ you use to live in Peru?", options: ["Did", "Used", "Do"], correct: 0,
          explanation: "Pregunta: 'Did' + sujeto + use to." },
        { prompt: "He ___ to smoke, but he quit.", options: ["used", "use", "using"], correct: 0,
          explanation: "Afirmativo: 'used to' + verbo base." },
        { prompt: "We ___ to go to the beach every summer.", options: ["used", "use", "using"], correct: 0,
          explanation: "Afirmativo: 'used to' + verbo base." },
        { prompt: "They didn't use to ___ (travel) much.", options: ["travel", "traveled", "traveling"], correct: 0,
          explanation: "Después de 'use to' siempre va el verbo base." },
        { prompt: "___ she use to work here?", options: ["Did", "Used", "Do"], correct: 0,
          explanation: "Pregunta: 'Did' + sujeto + use to." },
        { prompt: "I ___ to be afraid of dogs.", options: ["used", "use", "using"], correct: 0,
          explanation: "Afirmativo: 'used to' + verbo base." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con used to o didn't use to.",
      type: "fill",
      questions: [
        { prompt: "I ___ (play) soccer as a kid.", correct: ["used to play"], explanation: "used to + verbo base." },
        { prompt: "She ___ (not/like) spicy food.", correct: ["didn't use to like"], explanation: "Negación: didn't use to." },
        { prompt: "___ you ___ (live) here before?", correct: ["did you use to live"], explanation: "Pregunta: Did + sujeto + use to." },
        { prompt: "He ___ (have) long hair.", correct: ["used to have"], explanation: "used to + verbo base." },
        { prompt: "We ___ (not/travel) much when we were young.", correct: ["didn't use to travel"], explanation: "Negación: didn't use to." },
        { prompt: "They ___ (go) camping every year.", correct: ["used to go"], explanation: "used to + verbo base." },
        { prompt: "I ___ (be) afraid of the dark.", correct: ["used to be"], explanation: "used to + verbo base 'be'." },
        { prompt: "___ she ___ (work) at that company?", correct: ["did she use to work"], explanation: "Pregunta: Did + sujeto + use to." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "used", "to", "play", "soccer", "."], translation: "Solía jugar fútbol.",
          explanation: "Orden: sujeto + used to + verbo base + complemento." },
        { words: ["She", "didn't", "use", "to", "like", "coffee", "."], translation: "Ella no solía tomar café.",
          explanation: "Negación: didn't use to + verbo base." },
        { words: ["Did", "you", "use", "to", "live", "here", "?"], translation: "¿Solías vivir aquí?",
          explanation: "Pregunta: Did + sujeto + use to + verbo base." },
        { words: ["He", "used", "to", "smoke", "."], translation: "Él solía fumar.",
          explanation: "Orden: sujeto + used to + verbo base." },
        { words: ["We", "used", "to", "go", "to", "the", "beach", "."], translation: "Solíamos ir a la playa.",
          explanation: "Orden: sujeto + used to + verbo base + complemento." },
        { words: ["They", "didn't", "use", "to", "travel", "much", "."], translation: "No solían viajar mucho.",
          explanation: "Negación: didn't use to + verbo base." },
        { words: ["I", "used", "to", "be", "afraid", "of", "dogs", "."], translation: "Solía tenerle miedo a los perros.",
          explanation: "Orden: sujeto + used to + verbo base + complemento." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["I used to play soccer", "Solía jugar fútbol"], ["She didn't use to like it", "Ella no solía gustarle"],
            ["Did you use to live here?", "¿Solías vivir aquí?"], ["He used to smoke", "Él solía fumar"],
            ["when I was young", "cuando era joven"], ["not anymore", "ya no"], ["in the past", "en el pasado"],
          ],
          explanation: "'Used to' describe hábitos pasados que ya cambiaron." }
      ]
    }
  ]
};
