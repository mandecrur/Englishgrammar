window.EXERCISE_DATA = {
  title: "Verb TO HAVE (have / has)",
  translation: "El verbo TENER — presente",
  level: "Nivel 1 · Beginners",

  vocabulary: [
    { en: "brother", es: "hermano" },
    { en: "sister", es: "hermana" },
    { en: "car", es: "carro / auto" },
    { en: "phone", es: "teléfono" },
    { en: "house", es: "casa" },
    { en: "pet", es: "mascota" },
    { en: "money", es: "dinero" },
    { en: "job", es: "trabajo / empleo" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["brother", "hermano"], ["sister", "hermana"], ["car", "carro / auto"],
          ["phone", "teléfono"], ["house", "casa"], ["pet", "mascota"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>El verbo <strong>to have</strong> significa "tener". Tiene dos formas en presente: <strong>have</strong> y <strong>has</strong>.</p>
    <table>
      <tr><th>Pronombre</th><th>Forma</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>I / You / We / They</td><td>have</td><td>I have a car.</td><td>Yo tengo un carro.</td></tr>
      <tr><td>He / She / It</td><td>has</td><td>She has a phone.</td><td>Ella tiene un teléfono.</td></tr>
    </table>
    <p><strong>Forma negativa:</strong> se usa <em>don't have</em> o <em>doesn't have</em>.<br>
    <strong>I don't have money.</strong> (No tengo dinero.) — <strong>He doesn't have a job.</strong> (Él no tiene trabajo.)</p>
    <p><strong>Forma de pregunta:</strong> se usa <em>Do...have?</em> o <em>Does...have?</em><br>
    <strong>Do you have a pet?</strong> (¿Tienes una mascota?) — <strong>Does she have a car?</strong> (¿Tiene ella un carro?)</p>
    <p>Nota: "has" solo se usa con he/she/it en afirmativo. En negativo y preguntas, siempre vuelve a "have"
    (porque "does" ya indica la tercera persona).</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta para completar cada oración.",
      type: "mc",
      questions: [
        { prompt: "He ___ a new phone.", options: ["have", "has", "having"], correct: 1,
          explanation: "Con 'he' se usa 'has'." },
        { prompt: "I ___ two brothers.", options: ["has", "have", "is"], correct: 1,
          explanation: "Con 'I' se usa 'have'." },
        { prompt: "She ___ a beautiful house.", options: ["have", "has", "is"], correct: 1,
          explanation: "Con 'she' se usa 'has'." },
        { prompt: "They ___ a dog and a cat.", options: ["has", "have", "is"], correct: 1,
          explanation: "Con 'they' se usa 'have'." },
        { prompt: "___ you have a car?", options: ["Do", "Does", "Are"], correct: 0,
          explanation: "Con 'you' en preguntas se usa 'Do'." },
        { prompt: "___ he have a sister?", options: ["Do", "Does", "Is"], correct: 1,
          explanation: "Con 'he' en preguntas se usa 'Does'." },
        { prompt: "We ___ not have money right now.", options: ["do", "does", "is"], correct: 0,
          explanation: "Con 'we' en negativo se usa 'do not' (don't)." },
        { prompt: "It ___ four legs (el perro).", options: ["have", "has", "is"], correct: 1,
          explanation: "Con 'it' se usa 'has'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Escribe la forma correcta (have / has).",
      type: "fill",
      questions: [
        { prompt: "I ___ a good job.", correct: ["have"],
          explanation: "Con 'I' se usa 'have'." },
        { prompt: "My sister ___ a car.", correct: ["has"],
          explanation: "'My sister' equivale a 'she', así que se usa 'has'." },
        { prompt: "We ___ a big house.", correct: ["have"],
          explanation: "Con 'we' se usa 'have'." },
        { prompt: "He ___ a pet dog.", correct: ["has"],
          explanation: "Con 'he' se usa 'has'." },
        { prompt: "They ___ two phones.", correct: ["have"],
          explanation: "Con 'they' se usa 'have'." },
        { prompt: "The cat ___ blue eyes.", correct: ["has"],
          explanation: "'The cat' equivale a 'it', así que se usa 'has'." },
        { prompt: "You ___ a lot of money.", correct: ["have"],
          explanation: "Con 'you' se usa 'have'." },
        { prompt: "My parents ___ a new car.", correct: ["have"],
          explanation: "'My parents' equivale a 'they', así que se usa 'have'." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "have", "a", "brother", "."], translation: "Yo tengo un hermano.",
          explanation: "Orden: sujeto + verbo + artículo + sustantivo." },
        { words: ["She", "has", "a", "new", "phone", "."], translation: "Ella tiene un teléfono nuevo.",
          explanation: "Orden: sujeto + verbo + artículo + adjetivo + sustantivo." },
        { words: ["Do", "you", "have", "a", "pet", "?"], translation: "¿Tienes una mascota?",
          explanation: "Pregunta: 'Do' va al inicio con 'you'." },
        { words: ["He", "does", "not", "have", "money", "."], translation: "Él no tiene dinero.",
          explanation: "La negación se forma con 'does not' + 'have' (no 'has')." },
        { words: ["We", "have", "a", "big", "house", "."], translation: "Nosotros tenemos una casa grande.",
          explanation: "Orden: sujeto + verbo + artículo + adjetivo + sustantivo." },
        { words: ["Does", "she", "have", "a", "car", "?"], translation: "¿Tiene ella un carro?",
          explanation: "Pregunta: 'Does' va al inicio con 'she'." },
        { words: ["They", "have", "two", "sisters", "."], translation: "Ellos tienen dos hermanas.",
          explanation: "Orden: sujeto + verbo + número + sustantivo plural." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada pronombre con la forma correcta del verbo to have.",
      type: "match",
      questions: [
        { pairs: [
            ["I", "have"], ["You", "have"], ["He", "has"], ["She", "has"],
            ["It", "has"], ["We", "have"], ["They", "have"],
          ],
          explanation: "Regla clave: He/She/It → has · el resto → have." }
      ]
    }
  ]
};
