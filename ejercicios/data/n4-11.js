window.EXERCISE_DATA = {
  title: "Be Supposed To",
  translation: "Se supone que — expectativa o plan esperado",
  level: "Nivel 4 · Intermedio Bajo (B1)",

  vocabulary: [
    { en: "expectation", es: "expectativa" },
    { en: "according to plan", es: "según lo planeado" },
    { en: "responsibility", es: "responsabilidad" },
    { en: "expected", es: "esperado" },
    { en: "instead of", es: "en lugar de" },
    { en: "meeting", es: "reunión" },
    { en: "supposedly", es: "supuestamente" },
    { en: "assignment", es: "tarea asignada" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["expectation", "expectativa"], ["responsibility", "responsabilidad"], ["expected", "esperado"],
          ["instead of", "en lugar de"], ["meeting", "reunión"], ["supposedly", "supuestamente"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p><strong>Be supposed to</strong> se usa para hablar de lo que <strong>se espera</strong> que
    alguien haga, según un plan, una regla o una expectativa — pero que puede no estar cumpliéndose.</p>
    <table>
      <tr><th>Forma</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Afirmativa</td><td>I am supposed to be there at 9.</td><td>Se supone que debo estar ahí a las 9.</td></tr>
      <tr><td>Negativa</td><td>You aren't supposed to eat here.</td><td>Se supone que no debes comer aquí.</td></tr>
      <tr><td>Pregunta</td><td>Am I supposed to bring something?</td><td>¿Se supone que debo traer algo?</td></tr>
    </table>
    <p>Se forma con <strong>am/is/are + supposed to</strong> + verbo base. Cambia según el pronombre
    (a diferencia de "should" o "must").</p>
    <p>Se usa frecuentemente para señalar que algo <strong>no salió como se esperaba</strong>:
    <strong>The bus was supposed to arrive at 8, but it's late.</strong>
    (Se suponía que el bus llegaría a las 8, pero está tarde.)</p>
    <p>También se usa para reglas: <strong>You're not supposed to smoke here.</strong>
    (Se supone que no debes fumar aquí — hay una regla que lo prohíbe.)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "I ___ supposed to be there at 9.", options: ["am", "is", "are"], correct: 0,
          explanation: "Con 'I' se usa 'am'." },
        { prompt: "You ___ supposed to arrive on time.", options: ["am", "is", "are"], correct: 2,
          explanation: "Con 'you' se usa 'are'." },
        { prompt: "She ___ supposed to call me.", options: ["am", "is", "are"], correct: 1,
          explanation: "Con 'she' se usa 'is'." },
        { prompt: "We aren't supposed to ___ (eat) here.", options: ["eat", "eating", "ate"], correct: 0,
          explanation: "'Supposed to' + verbo base." },
        { prompt: "The bus ___ supposed to arrive at 8.", options: ["am", "is", "was"], correct: 2,
          explanation: "Pasado del verbo to be: 'was supposed to'." },
        { prompt: "___ I supposed to bring something?", options: ["Am", "Is", "Are"], correct: 0,
          explanation: "Pregunta con 'I': 'Am I supposed to...?'" },
        { prompt: "They ___ supposed to finish by Friday.", options: ["am", "is", "are"], correct: 2,
          explanation: "Con 'they' se usa 'are'." },
        { prompt: "He is not supposed to ___ (smoke) here.", options: ["smoke", "smoking", "smoked"], correct: 0,
          explanation: "'Supposed to' + verbo base." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con la forma correcta de be supposed to.",
      type: "fill",
      questions: [
        { prompt: "I ___ (be supposed to) be there at 9.", correct: ["am supposed to"], explanation: "am supposed to + verbo base." },
        { prompt: "She ___ (be supposed to) call me back.", correct: ["is supposed to"], explanation: "is supposed to + verbo base." },
        { prompt: "We ___ (not/be supposed to) eat here.", correct: ["aren't supposed to"], explanation: "Negación: aren't supposed to." },
        { prompt: "___ you ___ (be supposed to) come early?", correct: ["are you supposed to"], explanation: "Pregunta: Are + sujeto + supposed to." },
        { prompt: "The meeting ___ (be supposed to) start at 3.", correct: ["is supposed to"], explanation: "is supposed to + verbo base." },
        { prompt: "He ___ (not/be supposed to) smoke here.", correct: ["isn't supposed to"], explanation: "Negación: isn't supposed to." },
        { prompt: "They ___ (be supposed to) finish today.", correct: ["are supposed to"], explanation: "are supposed to + verbo base." },
        { prompt: "___ I ___ (be supposed to) bring my ID?", correct: ["am I supposed to"], explanation: "Pregunta: Am I supposed to." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "am", "supposed", "to", "be", "there", "at", "9", "."], translation: "Se supone que debo estar ahí a las 9.",
          explanation: "Orden: sujeto + am supposed to + verbo base + complemento." },
        { words: ["You", "aren't", "supposed", "to", "eat", "here", "."], translation: "Se supone que no debes comer aquí.",
          explanation: "Negación: aren't supposed to + verbo base." },
        { words: ["Am", "I", "supposed", "to", "bring", "something", "?"], translation: "¿Se supone que debo traer algo?",
          explanation: "Pregunta: Am I supposed to + verbo base." },
        { words: ["The", "bus", "was", "supposed", "to", "arrive", "at", "8", "."], translation: "Se suponía que el bus llegaría a las 8.",
          explanation: "Pasado: was supposed to + verbo base." },
        { words: ["She", "is", "supposed", "to", "call", "me", "."], translation: "Se supone que ella debe llamarme.",
          explanation: "Orden: sujeto + is supposed to + verbo base + objeto." },
        { words: ["We're", "not", "supposed", "to", "smoke", "here", "."], translation: "Se supone que no debemos fumar aquí.",
          explanation: "Negación: 're not supposed to + verbo base." },
        { words: ["They", "are", "supposed", "to", "finish", "today", "."], translation: "Se supone que deben terminar hoy.",
          explanation: "Orden: sujeto + are supposed to + verbo base + tiempo." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["I'm supposed to be there", "Se supone que debo estar ahí"], ["You're not supposed to smoke", "Se supone que no debes fumar"],
            ["The bus was supposed to arrive", "Se suponía que el bus llegaría"], ["Am I supposed to bring it?", "¿Se supone que debo traerlo?"],
            ["an expectation", "una expectativa"], ["according to plan", "según lo planeado"], ["a rule", "una regla"],
          ],
          explanation: "'Be supposed to' señala expectativas que a veces no se cumplen." }
      ]
    }
  ]
};
