window.EXERCISE_DATA = {
  title: "Passive with Get",
  translation: "Voz pasiva informal con 'get'",
  level: "Nivel 5 · Intermedio Alto (B2)",

  vocabulary: [
    { en: "get hurt", es: "lastimarse" },
    { en: "get married", es: "casarse" },
    { en: "get lost", es: "perderse" },
    { en: "get fired", es: "ser despedido" },
    { en: "get promoted", es: "ser ascendido" },
    { en: "get injured", es: "lesionarse" },
    { en: "get robbed", es: "ser robado" },
    { en: "get caught", es: "ser atrapado" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["get hurt", "lastimarse"], ["get married", "casarse"], ["get lost", "perderse"],
          ["get fired", "ser despedido"], ["get promoted", "ser ascendido"], ["get caught", "ser atrapado"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>En el habla <strong>informal</strong>, se usa <strong>get</strong> en lugar de "be" para
    formar la voz pasiva, especialmente con eventos repentinos, accidentes o cambios.</p>
    <table>
      <tr><th>Con "be" (formal)</th><th>Con "get" (informal)</th></tr>
      <tr><td>I was hurt.</td><td>I got hurt.</td></tr>
      <tr><td>She was promoted.</td><td>She got promoted.</td></tr>
      <tr><td>They were married last year.</td><td>They got married last year.</td></tr>
    </table>
    <p>Se usa mucho para <strong>accidentes o eventos inesperados</strong>: <strong>He got injured
    playing soccer.</strong> (Se lesionó jugando fútbol.) —
    <strong>My car got stolen.</strong> (Me robaron el carro.)</p>
    <p>Estructura: <strong>get + participio pasado</strong>, con "get" conjugado según el tiempo
    verbal (get/got/gotten, is getting, etc.).</p>
    <p>Aunque es informal, es extremadamente común en el habla cotidiana en inglés, especialmente
    en inglés americano. Se recomienda entenderlo bien aunque en contextos formales se prefiera "be".</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "He ___ hurt playing soccer.", options: ["got", "gets", "getting"], correct: 0,
          explanation: "Pasado de 'get': got + participio." },
        { prompt: "My car ___ stolen last week.", options: ["got", "gets", "getting"], correct: 0,
          explanation: "Pasado de 'get': got + participio." },
        { prompt: "They ___ married last summer.", options: ["got", "gets", "getting"], correct: 0,
          explanation: "Pasado de 'get': got + participio." },
        { prompt: "She ___ (get) promoted last month.", options: ["get", "got", "getting"], correct: 1,
          explanation: "Pasado de 'get': got + participio." },
        { prompt: "I ___ lost on my way here.", options: ["got", "gets", "getting"], correct: 0,
          explanation: "Pasado de 'get': got + participio." },
        { prompt: "He ___ fired from his job yesterday.", options: ["got", "gets", "getting"], correct: 0,
          explanation: "Pasado de 'get': got + participio." },
        { prompt: "The thief ___ caught by the police.", options: ["got", "gets", "getting"], correct: 0,
          explanation: "Pasado de 'get': got + participio." },
        { prompt: "We ___ (get) robbed while on vacation.", options: ["get", "got", "getting"], correct: 1,
          explanation: "Pasado de 'get': got + participio." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con got + el participio correcto.",
      type: "fill",
      questions: [
        { prompt: "He ___ (hurt) playing basketball.", correct: ["got hurt"], explanation: "got + participio." },
        { prompt: "My phone ___ (steal) yesterday.", correct: ["got stolen"], explanation: "got + participio." },
        { prompt: "They ___ (marry) two years ago.", correct: ["got married"], explanation: "got + participio." },
        { prompt: "She ___ (promote) last month.", correct: ["got promoted"], explanation: "got + participio." },
        { prompt: "I ___ (lose) in the city yesterday.", correct: ["got lost"], explanation: "got + participio." },
        { prompt: "He ___ (fire) from his job.", correct: ["got fired"], explanation: "got + participio." },
        { prompt: "The criminal ___ (catch) by the police.", correct: ["got caught"], explanation: "got + participio." },
        { prompt: "We ___ (rob) on our trip.", correct: ["got robbed"], explanation: "got + participio." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["He", "got", "hurt", "playing", "soccer", "."], translation: "Él se lastimó jugando fútbol.",
          explanation: "got + participio + gerundio explicando cómo." },
        { words: ["My", "car", "got", "stolen", "last", "week", "."], translation: "Me robaron el carro la semana pasada.",
          explanation: "got + participio + tiempo." },
        { words: ["They", "got", "married", "last", "summer", "."], translation: "Se casaron el verano pasado.",
          explanation: "got + participio + tiempo." },
        { words: ["She", "got", "promoted", "last", "month", "."], translation: "Ella fue ascendida el mes pasado.",
          explanation: "got + participio + tiempo." },
        { words: ["I", "got", "lost", "on", "my", "way", "here", "."], translation: "Me perdí en el camino hacia aquí.",
          explanation: "got + participio + complemento." },
        { words: ["He", "got", "fired", "from", "his", "job", "."], translation: "Lo despidieron de su trabajo.",
          explanation: "got + participio + complemento." },
        { words: ["The", "thief", "got", "caught", "by", "the", "police", "."], translation: "El ladrón fue atrapado por la policía.",
          explanation: "got + participio + by + agente." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada expresión con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["got hurt", "se lastimó"], ["got married", "se casó"], ["got lost", "se perdió"],
            ["got fired", "fue despedido"], ["got promoted", "fue ascendido"], ["got caught", "fue atrapado"], ["got robbed", "fue robado"],
          ],
          explanation: "'Get + participio' es la forma informal y muy común de la voz pasiva." }
      ]
    }
  ]
};
