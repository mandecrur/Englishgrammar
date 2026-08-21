window.EXERCISE_DATA = {
  title: "Noun Clauses with That",
  translation: "Cláusulas sustantivas con 'that'",
  level: "Nivel 5 · Intermedio Alto (B2)",

  vocabulary: [
    { en: "believe", es: "creer" },
    { en: "know", es: "saber" },
    { en: "think", es: "pensar" },
    { en: "hope", es: "esperar (deseo)" },
    { en: "fact", es: "hecho" },
    { en: "claim", es: "afirmar" },
    { en: "realize", es: "darse cuenta" },
    { en: "assume", es: "asumir" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["believe", "creer"], ["know", "saber"], ["think", "pensar"],
          ["hope", "esperar (deseo)"], ["fact", "hecho"], ["realize", "darse cuenta"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Una cláusula sustantiva funciona como <strong>sustantivo</strong> dentro de una oración —
    puede ser el sujeto o el objeto de un verbo. Las que empiezan con <strong>that</strong> son
    muy comunes después de verbos de opinión, creencia y conocimiento.</p>
    <table>
      <tr><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>I believe that she is right.</td><td>Creo que ella tiene razón.</td></tr>
      <tr><td>I know that he left already.</td><td>Sé que él ya se fue.</td></tr>
      <tr><td>She hopes that it will rain.</td><td>Ella espera que llueva.</td></tr>
    </table>
    <p>Estructura: <strong>verbo principal + that + sujeto + verbo</strong>. La cláusula
    completa (that + sujeto + verbo) funciona como el objeto del verbo principal.</p>
    <p>En el habla informal, <strong>"that" a menudo se omite</strong> sin cambiar el significado:
    <strong>I think (that) she is right.</strong> Ambas versiones son correctas.</p>
    <p>Verbos comunes seguidos de "that": <strong>believe, think, know, hope, say, claim, realize,
    assume, notice, admit, doubt</strong>.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "I believe ___ she is right.", options: ["that", "what", "which"], correct: 0,
          explanation: "'That' introduce la cláusula sustantiva." },
        { prompt: "She knows ___ he left already.", options: ["that", "what", "which"], correct: 0,
          explanation: "'That' introduce la cláusula sustantiva." },
        { prompt: "I hope ___ it doesn't rain.", options: ["that", "what", "which"], correct: 0,
          explanation: "'That' introduce la cláusula sustantiva." },
        { prompt: "He ___ that he was tired.", options: ["said", "say", "saying"], correct: 0,
          explanation: "'Said' es el verbo principal en pasado." },
        { prompt: "I think ___ this is a good idea.", options: ["that", "what", "which"], correct: 0,
          explanation: "'That' introduce la cláusula sustantiva." },
        { prompt: "She ___ that she would come.", options: ["promised", "promise", "promising"], correct: 0,
          explanation: "'Promised' es el verbo principal en pasado." },
        { prompt: "I realized ___ I had forgotten my keys.", options: ["that", "what", "which"], correct: 0,
          explanation: "'That' introduce la cláusula sustantiva." },
        { prompt: "It is a fact ___ water boils at 100°C.", options: ["that", "what", "which"], correct: 0,
          explanation: "'That' introduce la cláusula sustantiva como sujeto complementario." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa cada oración con that y la cláusula correcta.",
      type: "fill",
      questions: [
        { prompt: "I believe ___ she is honest.", correct: ["that"], explanation: "'That' introduce la cláusula." },
        { prompt: "He said ___ he was busy.", correct: ["that"], explanation: "'That' introduce la cláusula." },
        { prompt: "I hope ___ everything is okay.", correct: ["that"], explanation: "'That' introduce la cláusula." },
        { prompt: "She realized ___ she was late.", correct: ["that"], explanation: "'That' introduce la cláusula." },
        { prompt: "It's true ___ he lied.", correct: ["that"], explanation: "'That' introduce la cláusula." },
        { prompt: "I think ___ this is correct.", correct: ["that"], explanation: "'That' introduce la cláusula." },
        { prompt: "We know ___ she works hard.", correct: ["that"], explanation: "'That' introduce la cláusula." },
        { prompt: "They claim ___ they saw a UFO.", correct: ["that"], explanation: "'That' introduce la cláusula." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "believe", "that", "she", "is", "right", "."], translation: "Creo que ella tiene razón.",
          explanation: "Verbo + that + sujeto + verbo." },
        { words: ["She", "knows", "that", "he", "left", "."], translation: "Ella sabe que él se fue.",
          explanation: "Verbo + that + sujeto + verbo." },
        { words: ["I", "hope", "that", "it", "will", "rain", "."], translation: "Espero que llueva.",
          explanation: "Verbo + that + sujeto + verbo." },
        { words: ["He", "said", "that", "he", "was", "tired", "."], translation: "Él dijo que estaba cansado.",
          explanation: "Verbo + that + sujeto + verbo." },
        { words: ["I", "think", "that", "this", "is", "correct", "."], translation: "Creo que esto es correcto.",
          explanation: "Verbo + that + sujeto + verbo." },
        { words: ["She", "realized", "that", "she", "was", "late", "."], translation: "Ella se dio cuenta de que llegaba tarde.",
          explanation: "Verbo + that + sujeto + verbo." },
        { words: ["It", "is", "a", "fact", "that", "the", "Earth", "is", "round", "."], translation: "Es un hecho que la Tierra es redonda.",
          explanation: "'That' introduce la cláusula sustantiva." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada verbo con su función en cláusulas sustantivas.",
      type: "match",
      questions: [
        { pairs: [
            ["believe that", "creer que"], ["know that", "saber que"], ["think that", "pensar que"],
            ["hope that", "esperar que"], ["realize that", "darse cuenta de que"], ["claim that", "afirmar que"], ["a fact", "un hecho"],
          ],
          explanation: "Estos verbos suelen ir seguidos de una cláusula con 'that'." }
      ]
    }
  ]
};
