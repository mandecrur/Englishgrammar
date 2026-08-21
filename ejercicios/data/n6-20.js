window.EXERCISE_DATA = {
  title: "Subjunctive in Formal English",
  translation: "Subjuntivo en contextos formales y fijos",
  level: "Nivel 6 · Avanzado (C1)",

  vocabulary: [
    { en: "God bless you", es: "Dios te bendiga" },
    { en: "so be it", es: "que así sea" },
    { en: "if need be", es: "si es necesario" },
    { en: "come what may", es: "pase lo que pase" },
    { en: "long live", es: "que viva" },
    { en: "far be it from me", es: "lejos de mí" },
    { en: "fixed expression", es: "expresión fija" },
    { en: "archaic", es: "arcaico" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["God bless you", "Dios te bendiga"], ["so be it", "que así sea"], ["if need be", "si es necesario"],
          ["come what may", "pase lo que pase"], ["long live", "que viva"], ["fixed expression", "expresión fija"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>El subjuntivo también aparece en <strong>expresiones fijas</strong> muy formales o
    idiomáticas, que se han conservado del inglés más antiguo.</p>
    <table>
      <tr><th>Expresión</th><th>Traducción</th></tr>
      <tr><td>God bless you.</td><td>Dios te bendiga.</td></tr>
      <tr><td>Long live the king!</td><td>¡Que viva el rey!</td></tr>
      <tr><td>So be it.</td><td>Que así sea.</td></tr>
      <tr><td>If need be, we can leave early.</td><td>Si es necesario, podemos irnos temprano.</td></tr>
      <tr><td>Come what may, I will finish this.</td><td>Pase lo que pase, terminaré esto.</td></tr>
      <tr><td>Far be it from me to judge.</td><td>Lejos de mí juzgar.</td></tr>
      <tr><td>Suffice it to say...</td><td>Basta decir que...</td></tr>
    </table>
    <p>Estas expresiones usan el verbo en <strong>forma base</strong> (subjuntivo), incluso con
    sujetos en tercera persona: "bless" (no "blesses"), "live" (no "lives"), "be" (no "is").</p>
    <p>Se usan principalmente en contextos ceremoniales, literarios, religiosos o como frases
    hechas del habla formal.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma correcta del subjuntivo en la expresión fija.",
      type: "mc",
      questions: [
        { prompt: "God ___ you.", options: ["bless", "blesses"], correct: 0,
          explanation: "El subjuntivo usa la forma base 'bless', sin -s." },
        { prompt: "Long ___ the king!", options: ["live", "lives"], correct: 0,
          explanation: "El subjuntivo usa la forma base 'live', sin -s." },
        { prompt: "So ___ it.", options: ["be", "is"], correct: 0,
          explanation: "El subjuntivo del verbo to be es 'be'." },
        { prompt: "If need ___, we can leave early.", options: ["be", "is"], correct: 0,
          explanation: "'If need be' es una expresión fija con subjuntivo." },
        { prompt: "Come what ___, I will finish this.", options: ["may", "will"], correct: 0,
          explanation: "'Come what may' es la expresión fija correcta." },
        { prompt: "Far ___ it from me to judge.", options: ["be", "is"], correct: 0,
          explanation: "'Far be it from me' es la expresión fija correcta." },
        { prompt: "Suffice it ___ say, we succeeded.", options: ["to", "-"], correct: 0,
          explanation: "'Suffice it to say' es la expresión fija correcta." },
        { prompt: "___ it known that we disagree.", options: ["Be", "Is"], correct: 0,
          explanation: "El subjuntivo usa 'be' en esta expresión formal." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa cada expresión fija con la forma correcta.",
      type: "fill",
      questions: [
        { prompt: "God ___ (bless) you.", correct: ["bless"], explanation: "Forma base sin -s." },
        { prompt: "Long ___ (live) the queen!", correct: ["live"], explanation: "Forma base sin -s." },
        { prompt: "So ___ (be) it.", correct: ["be"], explanation: "Subjuntivo de 'to be': be." },
        { prompt: "If need ___ (be), we can call for help.", correct: ["be"], explanation: "'If need be' es expresión fija." },
        { prompt: "Come what ___ (may), we'll try.", correct: ["may"], explanation: "'Come what may' es expresión fija." },
        { prompt: "Far ___ (be) it from me to criticize.", correct: ["be"], explanation: "'Far be it from me' es expresión fija." },
        { prompt: "Suffice it to ___ (say), it was a success.", correct: ["say"], explanation: "'Suffice it to say' es expresión fija." },
        { prompt: "___ (be) that as it may, we must continue.", correct: ["be"], explanation: "'Be that as it may' es expresión fija." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la expresión.",
      type: "order",
      questions: [
        { words: ["God", "bless", "you", "."], translation: "Dios te bendiga.",
          explanation: "Expresión fija con subjuntivo." },
        { words: ["Long", "live", "the", "king", "!"], translation: "¡Que viva el rey!",
          explanation: "Expresión fija con subjuntivo." },
        { words: ["So", "be", "it", "."], translation: "Que así sea.",
          explanation: "Expresión fija con subjuntivo." },
        { words: ["If", "need", "be", ",", "we", "can", "leave", "early", "."], translation: "Si es necesario, podemos irnos temprano.",
          explanation: "'If need be' expresión fija." },
        { words: ["Come", "what", "may", ",", "I", "will", "finish", "this", "."], translation: "Pase lo que pase, terminaré esto.",
          explanation: "'Come what may' expresión fija." },
        { words: ["Far", "be", "it", "from", "me", "to", "judge", "."], translation: "Lejos de mí juzgar.",
          explanation: "'Far be it from me' expresión fija." },
        { words: ["Suffice", "it", "to", "say", ",", "we", "won", "."], translation: "Baste decir que ganamos.",
          explanation: "'Suffice it to say' expresión fija." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada expresión fija con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["God bless you", "Dios te bendiga"], ["Long live the king", "Que viva el rey"],
            ["So be it", "Que así sea"], ["If need be", "Si es necesario"],
            ["Come what may", "Pase lo que pase"], ["Far be it from me", "Lejos de mí"], ["archaic", "arcaico"],
          ],
          explanation: "Estas frases conservan el subjuntivo del inglés antiguo." }
      ]
    }
  ]
};
