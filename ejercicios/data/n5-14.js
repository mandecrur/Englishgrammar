window.EXERCISE_DATA = {
  title: "Subjunctive in Noun Clauses",
  translation: "Subjuntivo en cláusulas sustantivas",
  level: "Nivel 5 · Intermedio Alto (B2)",

  vocabulary: [
    { en: "recommend", es: "recomendar" },
    { en: "suggest", es: "sugerir" },
    { en: "insist", es: "insistir" },
    { en: "demand", es: "exigir" },
    { en: "require", es: "requerir" },
    { en: "essential", es: "esencial" },
    { en: "important", es: "importante" },
    { en: "propose", es: "proponer" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["recommend", "recomendar"], ["suggest", "sugerir"], ["insist", "insistir"],
          ["demand", "exigir"], ["require", "requerir"], ["essential", "esencial"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Después de ciertos verbos que expresan <strong>recomendación, exigencia o sugerencia</strong>,
    se usa el <strong>subjuntivo</strong>: la cláusula "that" lleva el verbo en su forma
    <strong>base</strong>, sin importar el sujeto (no se añade -s ni cambia con el tiempo).</p>
    <table>
      <tr><th>Verbo</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>recommend</td><td>I recommend that she study more.</td><td>Recomiendo que ella estudie más.</td></tr>
      <tr><td>suggest</td><td>He suggested that we leave early.</td><td>Él sugirió que nos fuéramos temprano.</td></tr>
      <tr><td>insist</td><td>She insisted that he apologize.</td><td>Ella insistió en que él se disculpara.</td></tr>
      <tr><td>demand</td><td>They demand that he pay now.</td><td>Ellos exigen que él pague ahora.</td></tr>
    </table>
    <p>Nota que el verbo en la cláusula se queda en forma <strong>base</strong>, incluso con "he/she/it"
    (no se dice "study**s**" ni "pay**s**"), y no cambia con el tiempo (no se dice "studied" aunque
    el verbo principal esté en pasado).</p>
    <p>También se usa con expresiones como <strong>it is important/essential/necessary that...</strong>:
    <strong>It is essential that everyone arrive on time.</strong>
    (Es esencial que todos lleguen a tiempo.)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma correcta del verbo (subjuntivo).",
      type: "mc",
      questions: [
        { prompt: "I recommend that she ___ (study) more.", options: ["studies", "study", "studied"], correct: 1,
          explanation: "El subjuntivo usa la forma base, sin -s." },
        { prompt: "He suggested that we ___ (leave) early.", options: ["leaves", "leave", "left"], correct: 1,
          explanation: "El subjuntivo usa la forma base." },
        { prompt: "She insisted that he ___ (apologize).", options: ["apologizes", "apologize", "apologized"], correct: 1,
          explanation: "El subjuntivo usa la forma base." },
        { prompt: "It is important that he ___ (be) on time.", options: ["is", "be", "was"], correct: 1,
          explanation: "El subjuntivo del verbo 'to be' es 'be' (no 'is')." },
        { prompt: "They demand that she ___ (pay) immediately.", options: ["pays", "pay", "paid"], correct: 1,
          explanation: "El subjuntivo usa la forma base." },
        { prompt: "I suggest that he ___ (see) a doctor.", options: ["sees", "see", "saw"], correct: 1,
          explanation: "El subjuntivo usa la forma base." },
        { prompt: "It's essential that everyone ___ (arrive) on time.", options: ["arrives", "arrive", "arrived"], correct: 1,
          explanation: "El subjuntivo usa la forma base." },
        { prompt: "The doctor recommends that he ___ (rest).", options: ["rests", "rest", "rested"], correct: 1,
          explanation: "El subjuntivo usa la forma base." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con el subjuntivo (forma base del verbo).",
      type: "fill",
      questions: [
        { prompt: "I recommend that she ___ (study) harder.", correct: ["study"], explanation: "Subjuntivo: forma base." },
        { prompt: "He suggested that we ___ (wait).", correct: ["wait"], explanation: "Subjuntivo: forma base." },
        { prompt: "It is important that he ___ (be) careful.", correct: ["be"], explanation: "Subjuntivo del verbo to be: 'be'." },
        { prompt: "She insisted that he ___ (call) her back.", correct: ["call"], explanation: "Subjuntivo: forma base." },
        { prompt: "They demand that she ___ (explain) everything.", correct: ["explain"], explanation: "Subjuntivo: forma base." },
        { prompt: "The teacher suggests that we ___ (read) more.", correct: ["read"], explanation: "Subjuntivo: forma base." },
        { prompt: "It's essential that everyone ___ (follow) the rules.", correct: ["follow"], explanation: "Subjuntivo: forma base." },
        { prompt: "I propose that he ___ (join) the team.", correct: ["join"], explanation: "Subjuntivo: forma base." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "recommend", "that", "she", "study", "more", "."], translation: "Recomiendo que ella estudie más.",
          explanation: "Subjuntivo: verbo en forma base." },
        { words: ["He", "suggested", "that", "we", "leave", "early", "."], translation: "Él sugirió que nos fuéramos temprano.",
          explanation: "Subjuntivo: verbo en forma base." },
        { words: ["She", "insisted", "that", "he", "apologize", "."], translation: "Ella insistió en que él se disculpara.",
          explanation: "Subjuntivo: verbo en forma base." },
        { words: ["It", "is", "important", "that", "he", "be", "on", "time", "."], translation: "Es importante que él llegue a tiempo.",
          explanation: "Subjuntivo del verbo to be: 'be'." },
        { words: ["They", "demand", "that", "she", "pay", "now", "."], translation: "Ellos exigen que ella pague ahora.",
          explanation: "Subjuntivo: verbo en forma base." },
        { words: ["It's", "essential", "that", "everyone", "arrive", "on", "time", "."], translation: "Es esencial que todos lleguen a tiempo.",
          explanation: "Subjuntivo: verbo en forma base." },
        { words: ["The", "doctor", "recommends", "that", "he", "rest", "."], translation: "El doctor recomienda que él descanse.",
          explanation: "Subjuntivo: verbo en forma base." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada verbo con la estructura de subjuntivo correspondiente.",
      type: "match",
      questions: [
        { pairs: [
            ["recommend that", "recomendar que"], ["suggest that", "sugerir que"], ["insist that", "insistir en que"],
            ["demand that", "exigir que"], ["it is important that", "es importante que"], ["essential", "esencial"], ["propose", "proponer"],
          ],
          explanation: "Todos estos verbos exigen el subjuntivo: verbo base en la cláusula." }
      ]
    }
  ]
};
