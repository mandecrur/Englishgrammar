window.EXERCISE_DATA = {
  title: "Expressions of Quantity",
  translation: "Expresiones de cantidad",
  level: "Nivel 3 · Básico 2 (A2)",

  vocabulary: [
    { en: "a lot of", es: "mucho / muchos" },
    { en: "some", es: "algo de / algunos" },
    { en: "any", es: "algo/ninguno (negativo/pregunta)" },
    { en: "plenty of", es: "de sobra / bastante" },
    { en: "a couple of", es: "un par de" },
    { en: "several", es: "varios" },
    { en: "enough", es: "suficiente" },
    { en: "none", es: "ninguno" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["a lot of", "mucho / muchos"], ["some", "algo de / algunos"], ["any", "algo/ninguno"],
          ["plenty of", "de sobra"], ["several", "varios"], ["enough", "suficiente"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Estas expresiones indican cantidad y funcionan tanto con sustantivos contables como incontables.</p>
    <table>
      <tr><th>Expresión</th><th>Uso</th></tr>
      <tr><td><strong>a lot of / lots of</strong></td><td>contables e incontables, afirmativo</td></tr>
      <tr><td><strong>some</strong></td><td>contables e incontables, afirmativo/ofrecimientos</td></tr>
      <tr><td><strong>any</strong></td><td>contables e incontables, negativo y preguntas</td></tr>
      <tr><td><strong>a couple of</strong></td><td>solo contables (un par de)</td></tr>
      <tr><td><strong>several</strong></td><td>solo contables (varios)</td></tr>
      <tr><td><strong>enough</strong></td><td>contables e incontables (suficiente)</td></tr>
    </table>
    <p>Regla clave: <strong>some</strong> en afirmativo, <strong>any</strong> en negativo y preguntas.<br>
    <strong>I have some money.</strong> — <strong>I don't have any money.</strong> —
    <strong>Do you have any money?</strong></p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la expresión correcta.",
      type: "mc",
      questions: [
        { prompt: "I have ___ money. (afirmativo)", options: ["some", "any"], correct: 0,
          explanation: "'Some' se usa en oraciones afirmativas." },
        { prompt: "I don't have ___ money. (negativo)", options: ["some", "any"], correct: 1,
          explanation: "'Any' se usa en oraciones negativas." },
        { prompt: "Do you have ___ questions? (pregunta)", options: ["some", "any"], correct: 1,
          explanation: "'Any' se usa en preguntas generales." },
        { prompt: "There are ___ apples here. (muchas)", options: ["a lot of", "a couple of"], correct: 0,
          explanation: "'A lot of' expresa gran cantidad." },
        { prompt: "I bought ___ books. (un par de)", options: ["a couple of", "much"], correct: 0,
          explanation: "'A couple of' significa 'un par de'." },
        { prompt: "We have ___ time to finish. (suficiente)", options: ["enough", "several"], correct: 0,
          explanation: "'Enough' significa 'suficiente'." },
        { prompt: "She visited ___ countries. (varios)", options: ["several", "much"], correct: 0,
          explanation: "'Several' significa 'varios', se usa con contables." },
        { prompt: "Would you like ___ coffee? (ofrecimiento)", options: ["some", "any"], correct: 0,
          explanation: "'Some' se usa en ofrecimientos, aunque sea pregunta." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con some, any, a lot of, several o enough.",
      type: "fill",
      questions: [
        { prompt: "I have ___ friends here. (algunos)", correct: ["some"], explanation: "'Some' en afirmativo." },
        { prompt: "I don't have ___ time. (nada de)", correct: ["any"], explanation: "'Any' en negativo." },
        { prompt: "Do you have ___ siblings? (pregunta)", correct: ["any"], explanation: "'Any' en preguntas." },
        { prompt: "There are ___ people at the party. (muchas)", correct: ["a lot of"], explanation: "'A lot of' expresa gran cantidad." },
        { prompt: "She has visited ___ cities. (varias)", correct: ["several"], explanation: "'Several' significa 'varias'." },
        { prompt: "We don't have ___ money for this. (suficiente)", correct: ["enough"], explanation: "'Enough' significa 'suficiente'." },
        { prompt: "Would you like ___ tea? (ofrecimiento)", correct: ["some"], explanation: "'Some' en ofrecimientos." },
        { prompt: "I bought ___ eggs. (un par de)", correct: ["a couple of"], explanation: "'A couple of' significa 'un par de'." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "have", "some", "money", "."], translation: "Tengo algo de dinero.",
          explanation: "'Some' en oración afirmativa." },
        { words: ["I", "don't", "have", "any", "money", "."], translation: "No tengo nada de dinero.",
          explanation: "'Any' en oración negativa." },
        { words: ["Do", "you", "have", "any", "questions", "?"], translation: "¿Tienes alguna pregunta?",
          explanation: "'Any' en preguntas." },
        { words: ["There", "are", "a", "lot", "of", "people", "here", "."], translation: "Hay mucha gente aquí.",
          explanation: "'A lot of' expresa gran cantidad." },
        { words: ["She", "has", "several", "hobbies", "."], translation: "Ella tiene varios pasatiempos.",
          explanation: "'Several' con sustantivo contable." },
        { words: ["We", "don't", "have", "enough", "time", "."], translation: "No tenemos suficiente tiempo.",
          explanation: "'Enough' expresa suficiencia." },
        { words: ["I", "bought", "a", "couple", "of", "shirts", "."], translation: "Compré un par de camisas.",
          explanation: "'A couple of' significa 'un par de'." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada expresión con su uso correcto.",
      type: "match",
      questions: [
        { pairs: [
            ["some", "afirmativo"], ["any", "negativo/pregunta"], ["a lot of", "gran cantidad"],
            ["a couple of", "un par de"], ["several", "varios"], ["enough", "suficiente"], ["plenty of", "de sobra"],
          ],
          explanation: "Cada expresión de cantidad tiene un contexto de uso específico." }
      ]
    }
  ]
};
