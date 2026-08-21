window.EXERCISE_DATA = {
  title: "Past Progressive (was/were + -ing)",
  translation: "Pasado continuo — acciones en curso en el pasado",
  level: "Nivel 3 · Básico 2 (A2)",

  vocabulary: [
    { en: "while", es: "mientras" },
    { en: "suddenly", es: "de repente" },
    { en: "interrupt", es: "interrumpir" },
    { en: "at that moment", es: "en ese momento" },
    { en: "storm", es: "tormenta" },
    { en: "phone rang", es: "sonó el teléfono" },
    { en: "meanwhile", es: "mientras tanto" },
    { en: "happen", es: "suceder / pasar" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["while", "mientras"], ["suddenly", "de repente"], ["interrupt", "interrumpir"],
          ["storm", "tormenta"], ["meanwhile", "mientras tanto"], ["happen", "suceder / pasar"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>El pasado continuo describe una acción que <strong>estaba en curso</strong> en un momento
    específico del pasado. Se forma con <strong>was/were + verbo-ing</strong>.</p>
    <table>
      <tr><th>Forma</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Afirmativa</td><td>I was studying at 8 PM.</td><td>Estaba estudiando a las 8 PM.</td></tr>
      <tr><td>Negativa</td><td>She wasn't sleeping.</td><td>Ella no estaba durmiendo.</td></tr>
      <tr><td>Pregunta</td><td>Were you working?</td><td>¿Estabas trabajando?</td></tr>
    </table>
    <p>Se usa frecuentemente junto al <strong>pasado simple</strong> para mostrar que una acción
    (más corta, en pasado simple) interrumpió otra que ya estaba en curso (pasado continuo),
    conectadas con <strong>while</strong> o <strong>when</strong>:</p>
    <p><strong>I was cooking when the phone rang.</strong>
    (Estaba cocinando cuando sonó el teléfono.)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "I ___ studying at 8 PM.", options: ["was", "were", "am"], correct: 0,
          explanation: "Con 'I' se usa 'was'." },
        { prompt: "They ___ playing soccer when it started to rain.", options: ["was", "were", "are"], correct: 1,
          explanation: "Con 'they' se usa 'were'." },
        { prompt: "She was cooking ___ the phone rang.", options: ["when", "was", "is"], correct: 0,
          explanation: "'When' conecta la acción larga con la corta." },
        { prompt: "We ___ sleeping when you called.", options: ["was", "were", "are"], correct: 1,
          explanation: "Con 'we' se usa 'were'." },
        { prompt: "___ you working at 9 AM yesterday?", options: ["Was", "Were", "Are"], correct: 1,
          explanation: "Con 'you' en preguntas se usa 'Were'." },
        { prompt: "He ___ not watching TV when I arrived.", options: ["was", "were", "is"], correct: 0,
          explanation: "Con 'he' se usa 'was'." },
        { prompt: "I was reading ___ she came in.", options: ["when", "while", "were"], correct: 0,
          explanation: "'When' introduce la acción que interrumpe." },
        { prompt: "It ___ raining all day yesterday.", options: ["was", "were", "is"], correct: 0,
          explanation: "Con 'it' se usa 'was'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Escribe la forma correcta del pasado continuo.",
      type: "fill",
      questions: [
        { prompt: "I ___ (study) when you called.", correct: ["was studying"], explanation: "was + verbo-ing." },
        { prompt: "They ___ (play) soccer at 5 PM.", correct: ["were playing"], explanation: "were + verbo-ing." },
        { prompt: "She ___ (not/sleep) when I arrived.", correct: ["wasn't sleeping"], explanation: "Negación: wasn't + verbo-ing." },
        { prompt: "___ you ___ (work) at that time?", correct: ["were you working"], explanation: "Pregunta: Were + sujeto + verbo-ing." },
        { prompt: "We ___ (have) dinner when the storm started.", correct: ["were having"], explanation: "were + verbo-ing." },
        { prompt: "He ___ (drive) when his phone rang.", correct: ["was driving"], explanation: "was + verbo-ing." },
        { prompt: "I ___ (not/watch) TV at 8 PM.", correct: ["wasn't watching"], explanation: "Negación: wasn't + verbo-ing." },
        { prompt: "___ she ___ (cook) when you called?", correct: ["was she cooking"], explanation: "Pregunta: Was + sujeto + verbo-ing." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "was", "cooking", "when", "the", "phone", "rang", "."], translation: "Estaba cocinando cuando sonó el teléfono.",
          explanation: "Pasado continuo interrumpido por pasado simple con 'when'." },
        { words: ["They", "were", "sleeping", "at", "midnight", "."], translation: "Ellos estaban durmiendo a medianoche.",
          explanation: "Orden: sujeto + were + verbo-ing + tiempo." },
        { words: ["Were", "you", "working", "yesterday", "?"], translation: "¿Estabas trabajando ayer?",
          explanation: "Pregunta: Were + sujeto + verbo-ing." },
        { words: ["We", "weren't", "watching", "TV", "."], translation: "No estábamos viendo televisión.",
          explanation: "Negación: weren't + verbo-ing." },
        { words: ["She", "was", "reading", "while", "he", "was", "cooking", "."], translation: "Ella leía mientras él cocinaba.",
          explanation: "Dos acciones simultáneas conectadas con 'while'." },
        { words: ["It", "was", "raining", "all", "night", "."], translation: "Estuvo lloviendo toda la noche.",
          explanation: "Orden: sujeto + was + verbo-ing + duración." },
        { words: ["He", "was", "driving", "when", "it", "started", "to", "rain", "."], translation: "Él conducía cuando empezó a llover.",
          explanation: "Pasado continuo + when + pasado simple." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada expresión con su función en el pasado continuo.",
      type: "match",
      questions: [
        { pairs: [
            ["was studying", "acción en curso (yo)"], ["were playing", "acción en curso (ellos)"],
            ["when", "conecta acción interruptora"], ["while", "conecta acciones simultáneas"],
            ["wasn't sleeping", "negación singular"], ["weren't working", "negación plural"], ["suddenly", "de repente"],
          ],
          explanation: "Repasa las funciones clave del pasado continuo." }
      ]
    }
  ]
};
