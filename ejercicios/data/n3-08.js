window.EXERCISE_DATA = {
  title: "Must / Have To",
  translation: "Obligación — deber / tener que",
  level: "Nivel 3 · Básico 2 (A2)",

  vocabulary: [
    { en: "obligation", es: "obligación" },
    { en: "rule", es: "regla" },
    { en: "law", es: "ley" },
    { en: "wear", es: "usar / llevar puesto" },
    { en: "seatbelt", es: "cinturón de seguridad" },
    { en: "pay", es: "pagar" },
    { en: "necessary", es: "necesario" },
    { en: "requirement", es: "requisito" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["obligation", "obligación"], ["rule", "regla"], ["law", "ley"],
          ["wear", "usar / llevar puesto"], ["pay", "pagar"], ["necessary", "necesario"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p><strong>Must</strong> y <strong>have to</strong> expresan obligación ("deber" / "tener que"),
    pero con matices distintos.</p>
    <table>
      <tr><th>Must</th><th>Have to</th></tr>
      <tr><td>Obligación personal (el hablante decide)</td><td>Obligación externa (reglas, leyes)</td></tr>
      <tr><td>I must study more. (yo lo decido)</td><td>I have to wear a uniform. (regla del colegio)</td></tr>
      <tr><td>No cambia según el pronombre</td><td>Cambia: have/has según el sujeto</td></tr>
    </table>
    <p>Estructura de "have to": <strong>have/has to</strong> + verbo base.
    Negativo: <strong>don't/doesn't have to</strong>. Pregunta: <strong>Do/Does...have to?</strong></p>
    <p>Ejemplos: <strong>You must wear a seatbelt.</strong> (ley/regla importante) —
    <strong>She has to work on Saturdays.</strong> (obligación de su trabajo)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "You ___ wear a seatbelt. (ley)", options: ["must", "musts", "musting"], correct: 0,
          explanation: "'Must' no cambia según el pronombre." },
        { prompt: "She ___ to work on Saturdays. (obligación externa)", options: ["have", "has", "is"], correct: 1,
          explanation: "Con 'she' se usa 'has to'." },
        { prompt: "I ___ to finish this today. (obligación)", options: ["have", "has", "am"], correct: 0,
          explanation: "Con 'I' se usa 'have to'." },
        { prompt: "___ you have to work tomorrow?", options: ["Do", "Does", "Are"], correct: 0,
          explanation: "Con 'you' en preguntas se usa 'Do'." },
        { prompt: "He ___ to pay the rent every month.", options: ["have", "has", "is"], correct: 1,
          explanation: "Con 'he' se usa 'has to'." },
        { prompt: "We ___ study harder. (obligación personal)", options: ["must", "musts", "musting"], correct: 0,
          explanation: "'Must' no cambia con ningún pronombre." },
        { prompt: "___ she have to leave early?", options: ["Do", "Does", "Is"], correct: 1,
          explanation: "Con 'she' en preguntas se usa 'Does'." },
        { prompt: "They ___ to arrive on time. (regla del trabajo)", options: ["have", "has", "are"], correct: 0,
          explanation: "Con 'they' se usa 'have to'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con must o la forma correcta de have to.",
      type: "fill",
      questions: [
        { prompt: "You ___ (wear) a helmet. It's the law.", correct: ["must wear"], explanation: "'Must' con verbo base, sin cambios." },
        { prompt: "She ___ (have to) work on weekends.", correct: ["has to work"], explanation: "'Has to' con she." },
        { prompt: "I ___ (have to) finish this report.", correct: ["have to finish"], explanation: "'Have to' con I." },
        { prompt: "___ you ___ (have to) leave now?", correct: ["do you have to leave"], explanation: "Pregunta: Do + sujeto + have to." },
        { prompt: "We ___ (study) harder for the exam.", correct: ["must study"], explanation: "'Must' con verbo base." },
        { prompt: "He ___ (have to) pay taxes every year.", correct: ["has to pay"], explanation: "'Has to' con he." },
        { prompt: "They ___ (have to) follow the rules.", correct: ["have to follow"], explanation: "'Have to' con they." },
        { prompt: "You ___ (be) careful with that. (obligación fuerte)", correct: ["must be"], explanation: "'Must' con verbo base." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["You", "must", "wear", "a", "seatbelt", "."], translation: "Debes usar el cinturón de seguridad.",
          explanation: "Orden: sujeto + must + verbo base + objeto." },
        { words: ["She", "has", "to", "work", "on", "Saturdays", "."], translation: "Ella tiene que trabajar los sábados.",
          explanation: "Orden: sujeto + has to + verbo base + tiempo." },
        { words: ["Do", "you", "have", "to", "leave", "early", "?"], translation: "¿Tienes que irte temprano?",
          explanation: "Pregunta: Do + sujeto + have to + verbo base." },
        { words: ["We", "must", "study", "harder", "."], translation: "Debemos estudiar más duro.",
          explanation: "Orden: sujeto + must + verbo base + adverbio." },
        { words: ["He", "has", "to", "pay", "the", "rent", "."], translation: "Él tiene que pagar el alquiler.",
          explanation: "Orden: sujeto + has to + verbo base + objeto." },
        { words: ["They", "have", "to", "follow", "the", "rules", "."], translation: "Ellos tienen que seguir las reglas.",
          explanation: "Orden: sujeto + have to + verbo base + objeto." },
        { words: ["I", "have", "to", "finish", "this", "today", "."], translation: "Tengo que terminar esto hoy.",
          explanation: "Orden: sujeto + have to + verbo base + objeto + tiempo." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["I must study", "Debo estudiar"], ["She has to work", "Ella tiene que trabajar"],
            ["We must be careful", "Debemos tener cuidado"], ["He has to pay", "Él tiene que pagar"],
            ["Do you have to go?", "¿Tienes que irte?"], ["They have to follow rules", "Ellos tienen que seguir reglas"], ["an obligation", "una obligación"],
          ],
          explanation: "'Must' es obligación personal, 'have to' es obligación externa." }
      ]
    }
  ]
};
