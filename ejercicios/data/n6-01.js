window.EXERCISE_DATA = {
  title: "Inversion",
  translation: "Inversión — énfasis con orden invertido",
  level: "Nivel 6 · Avanzado (C1)",

  vocabulary: [
    { en: "never", es: "nunca" },
    { en: "rarely", es: "raramente" },
    { en: "seldom", es: "rara vez" },
    { en: "not only", es: "no solo" },
    { en: "hardly", es: "apenas" },
    { en: "no sooner", es: "apenas / no bien" },
    { en: "little", es: "poco (énfasis negativo)" },
    { en: "emphasis", es: "énfasis" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["never", "nunca"], ["rarely", "raramente"], ["seldom", "rara vez"],
          ["not only", "no solo"], ["hardly", "apenas"], ["emphasis", "énfasis"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>La inversión es una estructura formal/literaria donde se invierte el orden normal
    (sujeto + verbo) a (auxiliar + sujeto + verbo) para dar <strong>énfasis</strong>, generalmente
    después de expresiones negativas o restrictivas al inicio de la oración.</p>
    <table>
      <tr><th>Normal</th><th>Con inversión</th></tr>
      <tr><td>I have never seen such a thing.</td><td>Never have I seen such a thing.</td></tr>
      <tr><td>She rarely goes out.</td><td>Rarely does she go out.</td></tr>
      <tr><td>He had no sooner arrived than it started raining.</td><td>No sooner had he arrived than it started raining.</td></tr>
    </table>
    <p>Expresiones comunes que activan inversión: <strong>never, rarely, seldom, hardly, no sooner,
    not only, little, under no circumstances</strong>.</p>
    <p>Ejemplo: <strong>Not only did she win, but she also broke the record.</strong>
    (No solo ganó, sino que también rompió el récord.)</p>
    <p>Este tipo de estructura es <strong>formal</strong> y se usa más en escritura académica,
    discursos y literatura que en conversación cotidiana.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma con inversión correcta.",
      type: "mc",
      questions: [
        { prompt: "___ have I seen such a thing.", options: ["Never", "I never"], correct: 0,
          explanation: "'Never' al inicio activa la inversión." },
        { prompt: "Rarely ___ she go out.", options: ["does", "she does"], correct: 0,
          explanation: "El auxiliar 'does' va antes del sujeto en inversión." },
        { prompt: "No sooner ___ he arrived than it started raining.", options: ["had", "he had"], correct: 0,
          explanation: "El auxiliar 'had' va antes del sujeto en inversión." },
        { prompt: "Not only ___ she win, but she also broke the record.", options: ["did", "she did"], correct: 0,
          explanation: "El auxiliar 'did' va antes del sujeto en inversión." },
        { prompt: "Little ___ he know what was coming.", options: ["did", "he did"], correct: 0,
          explanation: "El auxiliar 'did' va antes del sujeto en inversión." },
        { prompt: "Hardly ___ we started when it began to rain.", options: ["had", "we had"], correct: 0,
          explanation: "El auxiliar 'had' va antes del sujeto en inversión." },
        { prompt: "Under no circumstances ___ you leave early.", options: ["should", "you should"], correct: 0,
          explanation: "El auxiliar 'should' va antes del sujeto en inversión." },
        { prompt: "Seldom ___ I feel this happy.", options: ["do", "I do"], correct: 0,
          explanation: "El auxiliar 'do' va antes del sujeto en inversión." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa cada oración con inversión.",
      type: "fill",
      questions: [
        { prompt: "Never ___ (see) such a beautiful place. (have I)", correct: ["have I seen"], explanation: "Never + have + sujeto + participio." },
        { prompt: "Rarely ___ (go) to the movies. (does she)", correct: ["does she go"], explanation: "Rarely + does + sujeto + verbo base." },
        { prompt: "No sooner ___ (arrive) than the phone rang. (had he)", correct: ["had he arrived"], explanation: "No sooner + had + sujeto + participio." },
        { prompt: "Not only ___ (win) the game, she also set a record. (did she)", correct: ["did she win"], explanation: "Not only + did + sujeto + verbo base." },
        { prompt: "Hardly ___ (start) when it began to rain. (had we)", correct: ["had we started"], explanation: "Hardly + had + sujeto + participio." },
        { prompt: "Little ___ (know) what was about to happen. (did he)", correct: ["did he know"], explanation: "Little + did + sujeto + verbo base." },
        { prompt: "Seldom ___ (feel) so proud. (have I)", correct: ["have I felt"], explanation: "Seldom + have + sujeto + participio." },
        { prompt: "Under no circumstances ___ (leave) early. (should you)", correct: ["should you leave"], explanation: "Under no circumstances + should + sujeto + verbo base." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["Never", "have", "I", "seen", "such", "a", "thing", "."], translation: "Nunca he visto algo así.",
          explanation: "Never + have + sujeto + participio (inversión)." },
        { words: ["Rarely", "does", "she", "go", "out", "."], translation: "Raramente sale ella.",
          explanation: "Rarely + does + sujeto + verbo base (inversión)." },
        { words: ["No", "sooner", "had", "he", "arrived", "than", "it", "rained", "."], translation: "Apenas había llegado cuando empezó a llover.",
          explanation: "No sooner + had + sujeto + participio + than." },
        { words: ["Not", "only", "did", "she", "win", ",", "she", "also", "set", "a", "record", "."], translation: "No solo ganó, sino que también estableció un récord.",
          explanation: "Not only + did + sujeto + verbo base." },
        { words: ["Hardly", "had", "we", "started", "when", "it", "rained", "."], translation: "Apenas habíamos empezado cuando llovió.",
          explanation: "Hardly + had + sujeto + participio + when." },
        { words: ["Little", "did", "he", "know", "what", "was", "coming", "."], translation: "Poco sabía él lo que se avecinaba.",
          explanation: "Little + did + sujeto + verbo base." },
        { words: ["Seldom", "have", "I", "felt", "so", "proud", "."], translation: "Rara vez me he sentido tan orgulloso.",
          explanation: "Seldom + have + sujeto + participio." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada expresión con el orden correcto para inversión.",
      type: "match",
      questions: [
        { pairs: [
            ["Never", "have I + participio"], ["Rarely", "does she + verbo base"],
            ["No sooner", "had he + participio"], ["Not only", "did she + verbo base"],
            ["Hardly", "had we + participio"], ["Little", "did he + verbo base"], ["emphasis", "énfasis"],
          ],
          explanation: "La inversión coloca el auxiliar antes del sujeto para dar énfasis." }
      ]
    }
  ]
};
