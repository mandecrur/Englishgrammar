window.EXERCISE_DATA = {
  title: "Present Progressive for Future Plans",
  translation: "Presente continuo para planes futuros",
  level: "Nivel 2 · Básico 1 (A1)",

  vocabulary: [
    { en: "arrive", es: "llegar" },
    { en: "leave", es: "salir / partir" },
    { en: "meet", es: "encontrarse con / reunirse" },
    { en: "flight", es: "vuelo" },
    { en: "appointment", es: "cita" },
    { en: "this weekend", es: "este fin de semana" },
    { en: "tonight", es: "esta noche" },
    { en: "already arranged", es: "ya organizado" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["arrive", "llegar"], ["leave", "salir / partir"], ["meet", "encontrarse con"],
          ["flight", "vuelo"], ["appointment", "cita"], ["tonight", "esta noche"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>El presente continuo (<strong>is/are + -ing</strong>) también se usa para hablar de
    <strong>planes futuros ya organizados</strong>, especialmente con fecha u hora específica.</p>
    <table>
      <tr><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>I am meeting my friend tonight.</td><td>Me voy a encontrar con mi amigo esta noche.</td></tr>
      <tr><td>She is leaving tomorrow morning.</td><td>Ella sale mañana por la mañana.</td></tr>
      <tr><td>We are having dinner at 7 PM.</td><td>Vamos a cenar a las 7 PM.</td></tr>
    </table>
    <p>Se diferencia de "be going to" porque implica que <strong>ya existe un arreglo concreto</strong>
    (una cita, una reservación, un boleto comprado), no solo una intención.</p>
    <p>Se usa frecuentemente con expresiones de tiempo específicas: <strong>tonight</strong> (esta noche),
    <strong>this weekend</strong> (este fin de semana), <strong>tomorrow at 5</strong> (mañana a las 5).</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "I ___ meeting my friend tonight.", options: ["am", "is", "are"], correct: 0,
          explanation: "Con 'I' se usa 'am'." },
        { prompt: "She ___ leaving tomorrow morning.", options: ["am", "is", "are"], correct: 1,
          explanation: "Con 'she' se usa 'is'." },
        { prompt: "We ___ having dinner at 7 PM.", options: ["am", "is", "are"], correct: 2,
          explanation: "Con 'we' se usa 'are'." },
        { prompt: "They ___ arriving on Friday.", options: ["am", "is", "are"], correct: 2,
          explanation: "Con 'they' se usa 'are'." },
        { prompt: "___ you doing anything this weekend?", options: ["Am", "Is", "Are"], correct: 2,
          explanation: "Con 'you' en preguntas se usa 'Are'." },
        { prompt: "He ___ flying to Madrid next week.", options: ["am", "is", "are"], correct: 1,
          explanation: "Con 'he' se usa 'is'." },
        { prompt: "I ___ not working tomorrow.", options: ["am", "is", "are"], correct: 0,
          explanation: "Con 'I' se usa 'am' incluso en negativo." },
        { prompt: "What ___ you doing tonight?", options: ["am", "is", "are"], correct: 2,
          explanation: "Con 'you' se usa 'are'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con el presente continuo para hablar del futuro.",
      type: "fill",
      questions: [
        { prompt: "I ___ (meet) my friend tonight.", correct: ["am meeting"], explanation: "am + verbo-ing." },
        { prompt: "She ___ (leave) tomorrow.", correct: ["is leaving"], explanation: "is + verbo-ing." },
        { prompt: "We ___ (have) dinner at 8.", correct: ["are having"], explanation: "are + verbo-ing." },
        { prompt: "___ you ___ (do) anything this weekend?", correct: ["are you doing"], explanation: "Pregunta: Are + sujeto + verbo-ing." },
        { prompt: "He ___ (not/work) tomorrow.", correct: ["isn't working", "is not working"], explanation: "Negación: isn't + verbo-ing." },
        { prompt: "They ___ (arrive) at noon.", correct: ["are arriving"], explanation: "are + verbo-ing." },
        { prompt: "I ___ (fly) to Cusco next Monday.", correct: ["am flying"], explanation: "am + verbo-ing." },
        { prompt: "She ___ (not/come) to the meeting.", correct: ["isn't coming", "is not coming"], explanation: "Negación: isn't + verbo-ing." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "am", "meeting", "my", "friend", "tonight", "."], translation: "Me voy a encontrar con mi amigo esta noche.",
          explanation: "Orden: sujeto + am + verbo-ing + objeto + tiempo." },
        { words: ["She", "is", "leaving", "tomorrow", "."], translation: "Ella sale mañana.",
          explanation: "Orden: sujeto + is + verbo-ing + tiempo." },
        { words: ["Are", "you", "doing", "anything", "tonight", "?"], translation: "¿Vas a hacer algo esta noche?",
          explanation: "Pregunta: Are + sujeto + verbo-ing." },
        { words: ["We", "aren't", "working", "this", "weekend", "."], translation: "No vamos a trabajar este fin de semana.",
          explanation: "Negación: aren't + verbo-ing." },
        { words: ["He", "is", "flying", "to", "Madrid", "."], translation: "Él va a volar a Madrid.",
          explanation: "Orden: sujeto + is + verbo-ing + lugar." },
        { words: ["They", "are", "having", "a", "party", "."], translation: "Ellos van a tener una fiesta.",
          explanation: "Orden: sujeto + are + verbo-ing + objeto." },
        { words: ["What", "are", "you", "doing", "tomorrow", "?"], translation: "¿Qué vas a hacer mañana?",
          explanation: "Pregunta con 'what' + are + sujeto + verbo-ing." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["I'm meeting her", "Me voy a encontrar con ella"], ["She's leaving tomorrow", "Ella sale mañana"],
            ["We're having dinner", "Vamos a cenar"], ["Are you coming?", "¿Vienes?"],
            ["He's flying tonight", "Él vuela esta noche"], ["They're arriving soon", "Ellos llegan pronto"], ["an appointment", "una cita"],
          ],
          explanation: "El presente continuo indica planes ya organizados con hora/fecha." }
      ]
    }
  ]
};
