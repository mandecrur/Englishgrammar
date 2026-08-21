window.EXERCISE_DATA = {
  title: "Wishes with Would",
  translation: "Deseos de cambio — molestia por el comportamiento de otros",
  level: "Nivel 6 · Avanzado (C1)",

  vocabulary: [
    { en: "wish", es: "desear" },
    { en: "annoying", es: "molesto" },
    { en: "habit", es: "hábito" },
    { en: "stop doing", es: "dejar de hacer" },
    { en: "complain", es: "quejarse" },
    { en: "irritating", es: "irritante" },
    { en: "behavior", es: "comportamiento" },
    { en: "frustrated", es: "frustrado" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["wish", "desear"], ["annoying", "molesto"], ["habit", "hábito"],
          ["complain", "quejarse"], ["irritating", "irritante"], ["frustrated", "frustrado"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p><strong>Wish + would</strong> se usa para expresar <strong>molestia o queja</strong> sobre
    el comportamiento de otra persona (o de una situación) que quieres que cambie.</p>
    <table>
      <tr><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>I wish you would stop interrupting me.</td><td>Ojalá dejaras de interrumpirme (me molesta que lo hagas).</td></tr>
      <tr><td>I wish he would call more often.</td><td>Ojalá llamara más seguido (me molesta que no lo haga).</td></tr>
      <tr><td>I wish it would stop raining.</td><td>Ojalá dejara de llover.</td></tr>
    </table>
    <p>Importante: <strong>no se puede usar "wish...would" con el mismo sujeto</strong>
    (no se dice "I wish I would..."). Para deseos sobre uno mismo se usa "wish + pasado simple",
    visto en el tema siguiente.</p>
    <p>Esta estructura implica <strong>irritación o impaciencia</strong> con un comportamiento
    repetitivo que no cambia. Es diferente de simplemente desear que algo sea diferente (eso
    usa "wish + pasado simple").</p>
    <p>Ejemplo de matiz: <strong>I wish she were here</strong> (deseo neutral, sin molestia)
    vs. <strong>I wish she would call me back</strong> (molestia porque no llama, aunque podría).</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "I wish you ___ stop interrupting me.", options: ["would", "will"], correct: 0,
          explanation: "'Wish + would' expresa molestia por un comportamiento." },
        { prompt: "I wish he ___ call more often.", options: ["would", "will"], correct: 0,
          explanation: "'Wish + would' expresa deseo de cambio en el comportamiento de otro." },
        { prompt: "I wish it ___ stop raining.", options: ["would", "will"], correct: 0,
          explanation: "'Wish + would' también funciona con situaciones, no solo personas." },
        { prompt: "I wish they ___ (stop) making so much noise.", options: ["stop", "would stop"], correct: 1,
          explanation: "'Would' + verbo base después de wish." },
        { prompt: "I wish my neighbor ___ (turn) down the music.", options: ["turns", "would turn"], correct: 1,
          explanation: "'Would' + verbo base después de wish." },
        { prompt: "I wish she ___ (be) more careful. (deseo neutral, no molestia)", options: ["were", "would be"], correct: 0,
          explanation: "Deseo neutral usa pasado simple, no 'would'." },
        { prompt: "I wish he ___ (answer) his phone.", options: ["answers", "would answer"], correct: 1,
          explanation: "'Would' expresa molestia por su comportamiento repetido." },
        { prompt: "I wish you ___ (listen) to me for once.", options: ["listen", "would listen"], correct: 1,
          explanation: "'Would' + verbo base expresa molestia." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con wish + would + el verbo correcto.",
      type: "fill",
      questions: [
        { prompt: "I wish you ___ (stop) complaining.", correct: ["would stop"], explanation: "wish + would + verbo base." },
        { prompt: "I wish she ___ (call) me back.", correct: ["would call"], explanation: "wish + would + verbo base." },
        { prompt: "I wish they ___ (be) quieter.", correct: ["would be"], explanation: "wish + would + verbo base." },
        { prompt: "I wish it ___ (stop) snowing.", correct: ["would stop"], explanation: "wish + would + verbo base." },
        { prompt: "I wish he ___ (help) more around the house.", correct: ["would help"], explanation: "wish + would + verbo base." },
        { prompt: "I wish my brother ___ (clean) his room.", correct: ["would clean"], explanation: "wish + would + verbo base." },
        { prompt: "I wish you ___ (arrive) on time for once.", correct: ["would arrive"], explanation: "wish + would + verbo base." },
        { prompt: "I wish they ___ (turn) down the volume.", correct: ["would turn"], explanation: "wish + would + verbo base." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "wish", "you", "would", "stop", "interrupting", "me", "."], translation: "Ojalá dejaras de interrumpirme.",
          explanation: "wish + would + verbo base expresa molestia." },
        { words: ["I", "wish", "he", "would", "call", "more", "often", "."], translation: "Ojalá él llamara más seguido.",
          explanation: "wish + would + verbo base." },
        { words: ["I", "wish", "it", "would", "stop", "raining", "."], translation: "Ojalá dejara de llover.",
          explanation: "wish + would también funciona con el clima." },
        { words: ["I", "wish", "they", "would", "be", "quieter", "."], translation: "Ojalá fueran más silenciosos.",
          explanation: "wish + would + verbo base." },
        { words: ["I", "wish", "my", "neighbor", "would", "turn", "down", "the", "music", "."], translation: "Ojalá mi vecino bajara el volumen de la música.",
          explanation: "wish + would + verbo base." },
        { words: ["I", "wish", "you", "would", "listen", "to", "me", "."], translation: "Ojalá me escucharas.",
          explanation: "wish + would + verbo base." },
        { words: ["I", "wish", "he", "would", "answer", "his", "phone", "."], translation: "Ojalá él contestara su teléfono.",
          explanation: "wish + would + verbo base." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["I wish you would stop", "Ojalá dejaras de hacerlo"], ["I wish he would call", "Ojalá él llamara"],
            ["I wish it would stop raining", "Ojalá dejara de llover"], ["annoying", "molesto"],
            ["irritating", "irritante"], ["complain", "quejarse"], ["habit", "hábito"],
          ],
          explanation: "'Wish + would' expresa molestia por un comportamiento repetido de otros." }
      ]
    }
  ]
};
