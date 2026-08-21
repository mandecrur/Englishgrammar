window.EXERCISE_DATA = {
  title: "Simple Past vs Present Perfect",
  translation: "Pasado simple vs presente perfecto",
  level: "Nivel 3 · Básico 2 (A2)",

  vocabulary: [
    { en: "specific time", es: "tiempo específico" },
    { en: "unfinished", es: "inconcluso" },
    { en: "finished", es: "terminado" },
    { en: "connection to now", es: "conexión con el presente" },
    { en: "last week", es: "la semana pasada" },
    { en: "so far", es: "hasta ahora" },
    { en: "result", es: "resultado" },
    { en: "recently", es: "recientemente" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["specific time", "tiempo específico"], ["finished", "terminado"], ["last week", "la semana pasada"],
          ["so far", "hasta ahora"], ["result", "resultado"], ["recently", "recientemente"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Ambos tiempos hablan de acciones pasadas, pero con un enfoque distinto.</p>
    <table>
      <tr><th>Pasado simple</th><th>Presente perfecto</th></tr>
      <tr><td>Tiempo específico y terminado</td><td>Sin tiempo específico, conexión con el presente</td></tr>
      <tr><td>I visited Paris in 2019.</td><td>I have visited Paris (alguna vez, sin decir cuándo).</td></tr>
      <tr><td>She called me yesterday.</td><td>She has called me three times today (aún puede llamar más).</td></tr>
    </table>
    <p>Regla clave: si la oración menciona <strong>cuándo exactamente</strong> ocurrió algo
    (yesterday, last week, in 2019, two days ago), se usa <strong>pasado simple</strong>.
    Si no se especifica cuándo, o se habla de experiencias generales, se usa <strong>presente perfecto</strong>.</p>
    <p>Ejemplo comparativo: <strong>I have already eaten.</strong> (Ya he comido — sin decir cuándo)
    vs. <strong>I ate breakfast at 8 AM.</strong> (Comí a las 8 AM — tiempo específico)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige el tiempo verbal correcto.",
      type: "mc",
      questions: [
        { prompt: "I ___ to Paris in 2019. (fecha específica)", options: ["visited", "have visited", "visit"], correct: 0,
          explanation: "Con fecha específica se usa pasado simple." },
        { prompt: "I ___ Paris before. (sin fecha)", options: ["visited", "have visited", "visit"], correct: 1,
          explanation: "Sin fecha específica, experiencia general: presente perfecto." },
        { prompt: "She ___ me yesterday. (tiempo específico)", options: ["called", "has called", "calls"], correct: 0,
          explanation: "Con 'yesterday' se usa pasado simple." },
        { prompt: "___ you ever been to Japan? (sin fecha)", options: ["Did", "Have", "Do"], correct: 1,
          explanation: "'Ever' se usa con presente perfecto." },
        { prompt: "We ___ dinner two hours ago. (tiempo específico)", options: ["ate", "have eaten", "eat"], correct: 0,
          explanation: "Con 'two hours ago' se usa pasado simple." },
        { prompt: "I ___ already ___ (finish) my homework.", options: ["have / finished", "did / finish", "am / finishing"], correct: 0,
          explanation: "'Already' se usa con presente perfecto." },
        { prompt: "He ___ his car last week. (tiempo específico)", options: ["sold", "has sold", "sells"], correct: 0,
          explanation: "Con 'last week' se usa pasado simple." },
        { prompt: "They ___ never seen snow. (sin fecha)", options: ["did", "have", "do"], correct: 1,
          explanation: "'Never' se usa con presente perfecto." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con la forma correcta.",
      type: "fill",
      questions: [
        { prompt: "I ___ (visit) Cusco last year.", correct: ["visited"], explanation: "Fecha específica: pasado simple." },
        { prompt: "___ you ever ___ (try) sushi?", correct: ["have you ever tried"], explanation: "'Ever' con presente perfecto." },
        { prompt: "She ___ (call) me two days ago.", correct: ["called"], explanation: "Tiempo específico: pasado simple." },
        { prompt: "I ___ already ___ (eat) breakfast.", correct: ["have already eaten"], explanation: "'Already' con presente perfecto." },
        { prompt: "We ___ (watch) that movie yesterday.", correct: ["watched"], explanation: "Tiempo específico: pasado simple." },
        { prompt: "He ___ (not/finish) his homework yet.", correct: ["hasn't finished"], explanation: "'Yet' con presente perfecto." },
        { prompt: "They ___ (arrive) at 8 AM this morning.", correct: ["arrived"], explanation: "Hora específica: pasado simple." },
        { prompt: "I ___ (never/be) to Africa.", correct: ["have never been"], explanation: "'Never' con presente perfecto." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "visited", "Paris", "in", "2019", "."], translation: "Visité París en 2019.",
          explanation: "Fecha específica: pasado simple." },
        { words: ["I", "have", "visited", "Paris", "before", "."], translation: "He visitado París antes.",
          explanation: "Sin fecha específica: presente perfecto." },
        { words: ["She", "called", "me", "yesterday", "."], translation: "Ella me llamó ayer.",
          explanation: "Tiempo específico: pasado simple." },
        { words: ["Have", "you", "ever", "been", "to", "Japan", "?"], translation: "¿Alguna vez has estado en Japón?",
          explanation: "Pregunta con 'ever': presente perfecto." },
        { words: ["We", "ate", "dinner", "two", "hours", "ago", "."], translation: "Cenamos hace dos horas.",
          explanation: "Tiempo específico: pasado simple." },
        { words: ["I", "have", "already", "finished", "my", "homework", "."], translation: "Ya he terminado mi tarea.",
          explanation: "'Already' con presente perfecto." },
        { words: ["He", "sold", "his", "car", "last", "week", "."], translation: "Él vendió su carro la semana pasada.",
          explanation: "Tiempo específico: pasado simple." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada palabra clave con el tiempo verbal que le corresponde.",
      type: "match",
      questions: [
        { pairs: [
            ["yesterday", "pasado simple"], ["ever", "presente perfecto"], ["last year", "pasado simple"],
            ["already", "presente perfecto"], ["two days ago", "pasado simple"], ["never", "presente perfecto"], ["yet", "presente perfecto"],
          ],
          explanation: "Estas palabras clave indican qué tiempo verbal usar." }
      ]
    }
  ]
};
