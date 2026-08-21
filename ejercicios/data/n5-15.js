window.EXERCISE_DATA = {
  title: "Adjective Clauses (who / which / that)",
  translation: "Cláusulas adjetivas — pronombres relativos",
  level: "Nivel 5 · Intermedio Alto (B2)",

  vocabulary: [
    { en: "who", es: "quien / que (personas)" },
    { en: "which", es: "que / cual (cosas)" },
    { en: "that", es: "que (personas o cosas)" },
    { en: "whom", es: "a quien (objeto, formal)" },
    { en: "relative pronoun", es: "pronombre relativo" },
    { en: "describe", es: "describir" },
    { en: "identify", es: "identificar" },
    { en: "clause", es: "cláusula" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["who", "quien / que (personas)"], ["which", "que / cual (cosas)"], ["that", "que (personas o cosas)"],
          ["whom", "a quien"], ["describe", "describir"], ["identify", "identificar"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Las cláusulas adjetivas (o de relativo) describen a un sustantivo, usando un
    <strong>pronombre relativo</strong>.</p>
    <table>
      <tr><th>Pronombre</th><th>Se usa para</th><th>Ejemplo</th></tr>
      <tr><td><strong>who</strong></td><td>personas (sujeto)</td><td>The woman who called is my sister.</td></tr>
      <tr><td><strong>whom</strong></td><td>personas (objeto, formal)</td><td>The man whom I met is a doctor.</td></tr>
      <tr><td><strong>which</strong></td><td>cosas/animales</td><td>The book which I read was great.</td></tr>
      <tr><td><strong>that</strong></td><td>personas o cosas (informal)</td><td>The car that I bought is red.</td></tr>
    </table>
    <p><strong>That</strong> es muy común en el habla informal y puede reemplazar tanto a "who" como
    a "which". Muchos hablantes nativos usan "that" para casi todo en conversación cotidiana.</p>
    <p>Ejemplo: <strong>I have a friend who lives in Cusco.</strong>
    (Tengo un amigo que vive en Cusco.) — <strong>This is the book that I told you about.</strong>
    (Este es el libro del que te hablé.)</p>
    <p>El pronombre relativo va justo después del sustantivo que describe, y la cláusula completa
    funciona como un adjetivo grande para ese sustantivo.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige el pronombre relativo correcto.",
      type: "mc",
      questions: [
        { prompt: "The woman ___ called is my sister. (persona)", options: ["who", "which", "whom"], correct: 0,
          explanation: "'Who' se usa para personas como sujeto." },
        { prompt: "The book ___ I read was great. (cosa)", options: ["who", "which", "whom"], correct: 1,
          explanation: "'Which' se usa para cosas." },
        { prompt: "The car ___ I bought is red. (informal, cosa)", options: ["who", "which", "that"], correct: 2,
          explanation: "'That' funciona para cosas de forma informal." },
        { prompt: "I have a friend ___ lives in Lima.", options: ["who", "which", "whose"], correct: 0,
          explanation: "'Who' se usa para personas." },
        { prompt: "This is the movie ___ everyone loves.", options: ["who", "that", "whom"], correct: 1,
          explanation: "'That' es común e informal para cosas." },
        { prompt: "The man ___ I met yesterday is a doctor. (objeto, formal)", options: ["who", "which", "whom"], correct: 2,
          explanation: "'Whom' se usa para personas como objeto en registro formal." },
        { prompt: "She's the teacher ___ helped me a lot.", options: ["who", "which", "whom"], correct: 0,
          explanation: "'Who' se usa para personas." },
        { prompt: "The house ___ we bought needs repairs.", options: ["who", "which", "whom"], correct: 1,
          explanation: "'Which' se usa para cosas." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con who, which o that según corresponda.",
      type: "fill",
      questions: [
        { prompt: "The woman ___ helped me is kind. (persona)", correct: ["who", "that"], explanation: "'Who' o 'that' para personas." },
        { prompt: "The book ___ I bought is interesting. (cosa)", correct: ["which", "that"], explanation: "'Which' o 'that' para cosas." },
        { prompt: "I know a man ___ speaks five languages.", correct: ["who", "that"], explanation: "'Who' o 'that' para personas." },
        { prompt: "This is the restaurant ___ we love.", correct: ["which", "that"], explanation: "'Which' o 'that' para cosas." },
        { prompt: "The students ___ studied hard passed.", correct: ["who", "that"], explanation: "'Who' o 'that' para personas." },
        { prompt: "The dog ___ barks a lot is mine.", correct: ["which", "that"], explanation: "'Which' o 'that' para animales/cosas." },
        { prompt: "She's the person ___ called earlier.", correct: ["who", "that"], explanation: "'Who' o 'that' para personas." },
        { prompt: "The movie ___ we watched was great.", correct: ["which", "that"], explanation: "'Which' o 'that' para cosas." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["The", "woman", "who", "called", "is", "my", "sister", "."], translation: "La mujer que llamó es mi hermana.",
          explanation: "'Who' + verbo, describiendo a la mujer." },
        { words: ["The", "book", "which", "I", "read", "was", "great", "."], translation: "El libro que leí fue excelente.",
          explanation: "'Which' + sujeto + verbo, describiendo el libro." },
        { words: ["I", "have", "a", "friend", "who", "lives", "in", "Cusco", "."], translation: "Tengo un amigo que vive en Cusco.",
          explanation: "'Who' + verbo, describiendo al amigo." },
        { words: ["This", "is", "the", "car", "that", "I", "bought", "."], translation: "Este es el carro que compré.",
          explanation: "'That' + sujeto + verbo, describiendo el carro." },
        { words: ["The", "man", "whom", "I", "met", "is", "a", "doctor", "."], translation: "El hombre a quien conocí es doctor.",
          explanation: "'Whom' + sujeto + verbo, forma formal." },
        { words: ["She's", "the", "teacher", "who", "helped", "me", "."], translation: "Ella es la maestra que me ayudó.",
          explanation: "'Who' + verbo, describiendo a la maestra." },
        { words: ["The", "house", "which", "we", "bought", "is", "big", "."], translation: "La casa que compramos es grande.",
          explanation: "'Which' + sujeto + verbo, describiendo la casa." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada pronombre relativo con su uso.",
      type: "match",
      questions: [
        { pairs: [
            ["who", "personas (sujeto)"], ["whom", "personas (objeto, formal)"], ["which", "cosas/animales"],
            ["that", "personas o cosas (informal)"], ["relative pronoun", "pronombre relativo"], ["describe", "describir"], ["clause", "cláusula"],
          ],
          explanation: "El pronombre relativo depende de si describe una persona o una cosa." }
      ]
    }
  ]
};
