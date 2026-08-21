window.EXERCISE_DATA = {
  title: "Reported Speech (Statements and Questions)",
  translation: "Estilo indirecto — afirmaciones y preguntas",
  level: "Nivel 5 · Intermedio Alto (B2)",

  vocabulary: [
    { en: "say", es: "decir" },
    { en: "tell", es: "decir (a alguien)" },
    { en: "ask", es: "preguntar" },
    { en: "reported speech", es: "estilo indirecto" },
    { en: "direct speech", es: "estilo directo" },
    { en: "according to", es: "según" },
    { en: "mention", es: "mencionar" },
    { en: "explain", es: "explicar" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["say", "decir"], ["tell", "decir (a alguien)"], ["ask", "preguntar"],
          ["reported speech", "estilo indirecto"], ["mention", "mencionar"], ["explain", "explicar"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>El estilo indirecto (reported speech) se usa para contar lo que alguien dijo, sin citar
    sus palabras exactas.</p>
    <table>
      <tr><th>Tipo</th><th>Estilo directo</th><th>Estilo indirecto</th></tr>
      <tr><td>Afirmación</td><td>"I am tired," she said.</td><td>She said (that) she was tired.</td></tr>
      <tr><td>Pregunta sí/no</td><td>"Are you okay?" he asked.</td><td>He asked if I was okay.</td></tr>
      <tr><td>Pregunta con Wh-</td><td>"Where do you live?" she asked.</td><td>She asked where I lived.</td></tr>
    </table>
    <p>Diferencia entre <strong>say</strong> y <strong>tell</strong>: "say" no necesita objeto
    (<em>She said that...</em>), mientras que "tell" siempre necesita a quién
    (<em>She told me that...</em>).</p>
    <p>En preguntas, el orden cambia a <strong>sujeto + verbo</strong> (como una cláusula sustantiva),
    y se usa <strong>if/whether</strong> para preguntas sí/no.</p>
    <p>Ejemplo: <strong>"Do you like coffee?" she asked.</strong> →
    <strong>She asked if I liked coffee.</strong> (nota el cambio de tiempo verbal, visto en el
    siguiente tema con más detalle.)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta en estilo indirecto.",
      type: "mc",
      questions: [
        { prompt: "\"I am tired,\" she said. → She said ___ she was tired.", options: ["that", "if", "what"], correct: 0,
          explanation: "'That' introduce el estilo indirecto de una afirmación." },
        { prompt: "\"Are you okay?\" he asked. → He asked ___ I was okay.", options: ["that", "if", "what"], correct: 1,
          explanation: "'If' introduce el estilo indirecto de una pregunta sí/no." },
        { prompt: "\"Where do you live?\" she asked. → She asked ___ I lived.", options: ["that", "if", "where"], correct: 2,
          explanation: "La palabra interrogativa se mantiene, sin auxiliar." },
        { prompt: "She ___ me that she was busy.", options: ["said", "told", "asked"], correct: 1,
          explanation: "'Tell' necesita objeto (me); 'say' no lo necesita." },
        { prompt: "He said ___ he liked pizza.", options: ["that", "if", "what"], correct: 0,
          explanation: "'That' introduce el estilo indirecto de una afirmación." },
        { prompt: "She asked ___ I had finished.", options: ["that", "if", "what"], correct: 1,
          explanation: "'If' introduce el estilo indirecto de una pregunta sí/no." },
        { prompt: "He asked what time ___ (was it/it was).", options: ["was it", "it was"], correct: 1,
          explanation: "Orden sujeto+verbo en el estilo indirecto." },
        { prompt: "She ___ that everything was fine.", options: ["said", "told", "asked"], correct: 0,
          explanation: "'Say' no necesita objeto directo." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa cada oración en estilo indirecto.",
      type: "fill",
      questions: [
        { prompt: "\"I'm happy,\" he said. → He said ___ he was happy.", correct: ["that"], explanation: "'That' para afirmaciones." },
        { prompt: "\"Do you like tea?\" she asked. → She asked ___ I liked tea.", correct: ["if", "whether"], explanation: "'If/whether' para preguntas sí/no." },
        { prompt: "\"Where is he?\" they asked. → They asked ___ he was.", correct: ["where"], explanation: "La palabra interrogativa se mantiene." },
        { prompt: "She ___ (tell) me that she was leaving.", correct: ["told"], explanation: "'Tell' necesita objeto." },
        { prompt: "He ___ (say) that he was tired.", correct: ["said"], explanation: "'Say' no necesita objeto." },
        { prompt: "\"Can you help me?\" he asked. → He asked ___ I could help him.", correct: ["if", "whether"], explanation: "'If/whether' para preguntas sí/no." },
        { prompt: "\"What time is it?\" she asked. → She asked what time ___ (be).", correct: ["it was"], explanation: "Orden sujeto+verbo." },
        { prompt: "They said ___ they were happy.", correct: ["that"], explanation: "'That' para afirmaciones." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración en estilo indirecto.",
      type: "order",
      questions: [
        { words: ["She", "said", "that", "she", "was", "tired", "."], translation: "Ella dijo que estaba cansada.",
          explanation: "'That' introduce la afirmación en estilo indirecto." },
        { words: ["He", "asked", "if", "I", "was", "okay", "."], translation: "Él preguntó si yo estaba bien.",
          explanation: "'If' introduce la pregunta sí/no en estilo indirecto." },
        { words: ["She", "asked", "where", "I", "lived", "."], translation: "Ella preguntó dónde vivía yo.",
          explanation: "La palabra interrogativa se mantiene, orden sujeto+verbo." },
        { words: ["He", "told", "me", "that", "he", "was", "busy", "."], translation: "Él me dijo que estaba ocupado.",
          explanation: "'Tell' + objeto + 'that' + cláusula." },
        { words: ["She", "asked", "what", "time", "it", "was", "."], translation: "Ella preguntó qué hora era.",
          explanation: "'What time' + orden sujeto+verbo." },
        { words: ["They", "said", "that", "everything", "was", "fine", "."], translation: "Ellos dijeron que todo estaba bien.",
          explanation: "'That' introduce la afirmación en estilo indirecto." },
        { words: ["He", "asked", "if", "I", "had", "finished", "."], translation: "Él preguntó si yo había terminado.",
          explanation: "'If' introduce la pregunta sí/no en estilo indirecto." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración directa con su versión en estilo indirecto.",
      type: "match",
      questions: [
        { pairs: [
            ["\"I am tired\"", "She said she was tired"], ["\"Are you okay?\"", "He asked if I was okay"],
            ["\"Where do you live?\"", "She asked where I lived"], ["say", "no necesita objeto"],
            ["tell", "necesita objeto"], ["reported speech", "estilo indirecto"], ["direct speech", "estilo directo"],
          ],
          explanation: "El estilo indirecto reporta lo dicho sin citar exactamente." }
      ]
    }
  ]
};
