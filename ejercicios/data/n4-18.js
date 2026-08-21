window.EXERCISE_DATA = {
  title: "Verbs Followed by Infinitive",
  translation: "Verbos seguidos de infinitivo",
  level: "Nivel 4 · Intermedio Bajo (B1)",

  vocabulary: [
    { en: "want", es: "querer" },
    { en: "need", es: "necesitar" },
    { en: "decide", es: "decidir" },
    { en: "hope", es: "esperar (deseo)" },
    { en: "plan", es: "planear" },
    { en: "promise", es: "prometer" },
    { en: "learn", es: "aprender" },
    { en: "refuse", es: "rehusarse / negarse" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["want", "querer"], ["need", "necesitar"], ["decide", "decidir"],
          ["hope", "esperar (deseo)"], ["plan", "planear"], ["refuse", "rehusarse"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Otros verbos, en cambio, siempre van seguidos de <strong>infinitivo</strong> (to + verbo base),
    nunca de gerundio.</p>
    <table>
      <tr><th>Verbo</th><th>Traducción</th><th>Ejemplo</th></tr>
      <tr><td>want</td><td>querer</td><td>I want to travel.</td></tr>
      <tr><td>need</td><td>necesitar</td><td>She needs to rest.</td></tr>
      <tr><td>decide</td><td>decidir</td><td>They decided to leave.</td></tr>
      <tr><td>hope</td><td>esperar (deseo)</td><td>I hope to see you soon.</td></tr>
      <tr><td>plan</td><td>planear</td><td>We plan to travel next year.</td></tr>
      <tr><td>promise</td><td>prometer</td><td>He promised to call.</td></tr>
      <tr><td>learn</td><td>aprender</td><td>She's learning to drive.</td></tr>
      <tr><td>refuse</td><td>rehusarse</td><td>He refused to answer.</td></tr>
      <tr><td>agree</td><td>estar de acuerdo</td><td>They agreed to help.</td></tr>
      <tr><td>expect</td><td>esperar (expectativa)</td><td>I expect to finish soon.</td></tr>
    </table>
    <p>Ejemplo: <strong>I want to learn English.</strong> (Quiero aprender inglés — no "want learning").</p>
    <p>Un truco para recordar algunos de estos verbos: <strong>want, need, decide, hope, plan,
    promise, learn, refuse, agree, expect</strong> son de los más comunes que
    <strong>siempre</strong> requieren infinitivo.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma correcta del verbo.",
      type: "mc",
      questions: [
        { prompt: "I want ___ (travel) to Europe.", options: ["travel", "traveling", "to travel"], correct: 2,
          explanation: "'Want' siempre va seguido de infinitivo." },
        { prompt: "She needs ___ (rest) today.", options: ["rest", "resting", "to rest"], correct: 2,
          explanation: "'Need' siempre va seguido de infinitivo." },
        { prompt: "They decided ___ (leave) early.", options: ["leave", "leaving", "to leave"], correct: 2,
          explanation: "'Decide' siempre va seguido de infinitivo." },
        { prompt: "I hope ___ (see) you soon.", options: ["see", "seeing", "to see"], correct: 2,
          explanation: "'Hope' siempre va seguido de infinitivo." },
        { prompt: "We plan ___ (travel) next year.", options: ["travel", "traveling", "to travel"], correct: 2,
          explanation: "'Plan' siempre va seguido de infinitivo." },
        { prompt: "He promised ___ (call) me.", options: ["call", "calling", "to call"], correct: 2,
          explanation: "'Promise' siempre va seguido de infinitivo." },
        { prompt: "She's learning ___ (drive).", options: ["drive", "driving", "to drive"], correct: 2,
          explanation: "'Learn' siempre va seguido de infinitivo." },
        { prompt: "He refused ___ (answer) the question.", options: ["answer", "answering", "to answer"], correct: 2,
          explanation: "'Refuse' siempre va seguido de infinitivo." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con el infinitivo del verbo entre paréntesis.",
      type: "fill",
      questions: [
        { prompt: "I want ___ (learn) English.", correct: ["to learn"], explanation: "want + infinitivo." },
        { prompt: "She needs ___ (study) more.", correct: ["to study"], explanation: "need + infinitivo." },
        { prompt: "They decided ___ (move) to Lima.", correct: ["to move"], explanation: "decide + infinitivo." },
        { prompt: "I hope ___ (visit) you soon.", correct: ["to visit"], explanation: "hope + infinitivo." },
        { prompt: "We plan ___ (start) the project soon.", correct: ["to start"], explanation: "plan + infinitivo." },
        { prompt: "He promised ___ (help) me.", correct: ["to help"], explanation: "promise + infinitivo." },
        { prompt: "She's learning ___ (cook).", correct: ["to cook"], explanation: "learn + infinitivo." },
        { prompt: "They agreed ___ (wait) for us.", correct: ["to wait"], explanation: "agree + infinitivo." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "want", "to", "travel", "to", "Europe", "."], translation: "Quiero viajar a Europa.",
          explanation: "'Want' + infinitivo como objeto." },
        { words: ["She", "needs", "to", "rest", "today", "."], translation: "Ella necesita descansar hoy.",
          explanation: "'Need' + infinitivo como objeto." },
        { words: ["They", "decided", "to", "leave", "early", "."], translation: "Ellos decidieron irse temprano.",
          explanation: "'Decide' + infinitivo como objeto." },
        { words: ["I", "hope", "to", "see", "you", "soon", "."], translation: "Espero verte pronto.",
          explanation: "'Hope' + infinitivo como objeto." },
        { words: ["We", "plan", "to", "travel", "next", "year", "."], translation: "Planeamos viajar el próximo año.",
          explanation: "'Plan' + infinitivo como objeto." },
        { words: ["He", "promised", "to", "call", "me", "."], translation: "Él prometió llamarme.",
          explanation: "'Promise' + infinitivo como objeto." },
        { words: ["She's", "learning", "to", "drive", "."], translation: "Ella está aprendiendo a manejar.",
          explanation: "'Learn' + infinitivo como objeto." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada verbo con su significado.",
      type: "match",
      questions: [
        { pairs: [
            ["want", "querer"], ["need", "necesitar"], ["decide", "decidir"], ["hope", "esperar (deseo)"],
            ["plan", "planear"], ["promise", "prometer"], ["refuse", "rehusarse"],
          ],
          explanation: "Todos estos verbos siempre van seguidos de infinitivo, nunca de gerundio." }
      ]
    }
  ]
};
