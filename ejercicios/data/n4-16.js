window.EXERCISE_DATA = {
  title: "Infinitives of Purpose",
  translation: "Infinitivos de propósito — para qué",
  level: "Nivel 4 · Intermedio Bajo (B1)",

  vocabulary: [
    { en: "purpose", es: "propósito" },
    { en: "in order to", es: "con el fin de" },
    { en: "so as to", es: "para / con el fin de" },
    { en: "reason", es: "razón" },
    { en: "goal", es: "meta / objetivo" },
    { en: "improve", es: "mejorar" },
    { en: "achieve", es: "lograr" },
    { en: "save money", es: "ahorrar dinero" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["purpose", "propósito"], ["in order to", "con el fin de"], ["reason", "razón"],
          ["goal", "meta / objetivo"], ["improve", "mejorar"], ["achieve", "lograr"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>El infinitivo (<strong>to + verbo base</strong>) se usa para expresar el <strong>propósito</strong>
    de una acción — para qué se hace algo.</p>
    <table>
      <tr><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>I study English to get a better job.</td><td>Estudio inglés para conseguir un mejor trabajo.</td></tr>
      <tr><td>She went to the store to buy milk.</td><td>Ella fue a la tienda para comprar leche.</td></tr>
      <tr><td>He exercises to stay healthy.</td><td>Él hace ejercicio para mantenerse saludable.</td></tr>
    </table>
    <p>Para dar más énfasis o en un registro más formal, se puede usar <strong>in order to</strong>
    o <strong>so as to</strong> en lugar de solo "to":
    <strong>I saved money in order to buy a car.</strong>
    (Ahorré dinero con el fin de comprar un carro.)</p>
    <p>Pregunta común: <strong>Why did you do that?</strong> (¿Por qué hiciste eso?) se puede
    responder con infinitivo de propósito: <strong>To help you.</strong> (Para ayudarte.)</p>
    <p>Nota: no se usa "for" + verbo para expresar propósito (error común de hispanohablantes).
    Se dice <strong>I called to ask a question</strong>, no "I called for ask a question".</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "I study English ___ get a better job.", options: ["to", "for", "in"], correct: 0,
          explanation: "'To' + verbo base expresa propósito." },
        { prompt: "She went to the store ___ buy milk.", options: ["to", "for", "in"], correct: 0,
          explanation: "'To' + verbo base expresa propósito." },
        { prompt: "He exercises ___ stay healthy.", options: ["to", "for", "in"], correct: 0,
          explanation: "'To' + verbo base expresa propósito." },
        { prompt: "I called ___ ask a question. (no 'for')", options: ["to", "for", "in"], correct: 0,
          explanation: "Se usa 'to', no 'for', para propósito con verbo." },
        { prompt: "We saved money ___ order to buy a house.", options: ["in", "for", "at"], correct: 0,
          explanation: "'In order to' es una forma más formal de expresar propósito." },
        { prompt: "Why did you call? — ___ help you.", options: ["To", "For", "In"], correct: 0,
          explanation: "Respuesta con infinitivo de propósito." },
        { prompt: "She works hard ___ achieve her goals.", options: ["to", "for", "in"], correct: 0,
          explanation: "'To' + verbo base expresa propósito." },
        { prompt: "I turned on the light ___ see better.", options: ["to", "for", "in"], correct: 0,
          explanation: "'To' + verbo base expresa propósito." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa cada oración con el infinitivo de propósito correcto.",
      type: "fill",
      questions: [
        { prompt: "I study ___ (get) a better job.", correct: ["to get"], explanation: "to + verbo base." },
        { prompt: "She went to the store ___ (buy) bread.", correct: ["to buy"], explanation: "to + verbo base." },
        { prompt: "He exercises ___ (stay) healthy.", correct: ["to stay"], explanation: "to + verbo base." },
        { prompt: "I called you ___ (ask) something.", correct: ["to ask"], explanation: "to + verbo base." },
        { prompt: "We worked hard ___ (achieve) our goals.", correct: ["to achieve"], explanation: "to + verbo base." },
        { prompt: "She turned on the TV ___ (watch) the news.", correct: ["to watch"], explanation: "to + verbo base." },
        { prompt: "I saved money ___ (buy) a new phone.", correct: ["to buy"], explanation: "to + verbo base." },
        { prompt: "They came here ___ (learn) English.", correct: ["to learn"], explanation: "to + verbo base." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "study", "English", "to", "get", "a", "better", "job", "."], translation: "Estudio inglés para conseguir un mejor trabajo.",
          explanation: "Infinitivo de propósito al final de la oración." },
        { words: ["She", "went", "to", "the", "store", "to", "buy", "milk", "."], translation: "Ella fue a la tienda para comprar leche.",
          explanation: "Infinitivo de propósito al final de la oración." },
        { words: ["He", "exercises", "to", "stay", "healthy", "."], translation: "Él hace ejercicio para mantenerse saludable.",
          explanation: "Infinitivo de propósito al final de la oración." },
        { words: ["I", "called", "to", "ask", "a", "question", "."], translation: "Llamé para hacer una pregunta.",
          explanation: "Infinitivo de propósito, no se usa 'for'." },
        { words: ["We", "saved", "money", "in", "order", "to", "travel", "."], translation: "Ahorramos dinero con el fin de viajar.",
          explanation: "'In order to' es la forma más formal de expresar propósito." },
        { words: ["She", "works", "hard", "to", "achieve", "her", "goals", "."], translation: "Ella trabaja duro para lograr sus metas.",
          explanation: "Infinitivo de propósito al final de la oración." },
        { words: ["I", "turned", "on", "the", "light", "to", "see", "better", "."], translation: "Encendí la luz para ver mejor.",
          explanation: "Infinitivo de propósito al final de la oración." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["to get a better job", "para conseguir un mejor trabajo"], ["to buy milk", "para comprar leche"],
            ["to stay healthy", "para mantenerse saludable"], ["in order to travel", "con el fin de viajar"],
            ["a purpose", "un propósito"], ["a goal", "una meta"], ["to achieve", "lograr"],
          ],
          explanation: "El infinitivo de propósito responde a la pregunta '¿para qué?'." }
      ]
    }
  ]
};
