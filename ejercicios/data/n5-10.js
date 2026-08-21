window.EXERCISE_DATA = {
  title: "Noun Clauses with If / Whether",
  translation: "Cláusulas sustantivas con si / si o no",
  level: "Nivel 5 · Intermedio Alto (B2)",

  vocabulary: [
    { en: "wonder", es: "preguntarse" },
    { en: "ask", es: "preguntar" },
    { en: "not sure", es: "no estar seguro" },
    { en: "or not", es: "o no" },
    { en: "uncertain", es: "incierto" },
    { en: "check", es: "verificar" },
    { en: "find out", es: "averiguar" },
    { en: "doubt", es: "dudar" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["wonder", "preguntarse"], ["ask", "preguntar"], ["not sure", "no estar seguro"],
          ["uncertain", "incierto"], ["find out", "averiguar"], ["doubt", "dudar"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Cuando se convierte una pregunta de <strong>sí/no</strong> en una cláusula sustantiva
    (dentro de otra oración), se usa <strong>if</strong> o <strong>whether</strong>.</p>
    <table>
      <tr><th>Pregunta directa</th><th>Cláusula sustantiva</th></tr>
      <tr><td>Is she coming?</td><td>I wonder if she is coming.</td></tr>
      <tr><td>Did he call?</td><td>I don't know if he called.</td></tr>
      <tr><td>Will it rain?</td><td>She asked whether it would rain.</td></tr>
    </table>
    <p>Importante: dentro de la cláusula, el orden vuelve a ser <strong>sujeto + verbo</strong>
    (como en una afirmación), no como en una pregunta. <strong>I wonder if she is coming</strong>
    (no "if is she coming").</p>
    <p><strong>Whether</strong> es un poco más formal que "if" y se puede usar en más contextos
    (por ejemplo, antes de un infinitivo: <strong>I don't know whether to go.</strong>) —
    "if" no funciona en ese caso.</p>
    <p>Verbos comunes con estas cláusulas: <strong>wonder, ask, know, doubt, find out, check,
    not be sure</strong>.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "I wonder ___ she is coming.", options: ["if", "that", "what"], correct: 0,
          explanation: "'If' introduce la cláusula de pregunta sí/no." },
        { prompt: "I don't know ___ he called or not.", options: ["if", "that", "what"], correct: 0,
          explanation: "'If' + 'or not' es una combinación común." },
        { prompt: "She asked ___ it would rain.", options: ["whether", "that", "what"], correct: 0,
          explanation: "'Whether' introduce la cláusula de pregunta sí/no." },
        { prompt: "I wonder if she ___ (be) home.", options: ["is", "she is", "be"], correct: 0,
          explanation: "Orden sujeto+verbo dentro de la cláusula: 'she is'." },
        { prompt: "I don't know whether ___ (go) or stay.", options: ["to go", "go", "going"], correct: 0,
          explanation: "'Whether' puede ir seguido de infinitivo, 'if' no." },
        { prompt: "Can you check ___ the door is locked?", options: ["if", "that", "what"], correct: 0,
          explanation: "'If' introduce la cláusula de pregunta sí/no." },
        { prompt: "I'm not sure ___ she likes coffee.", options: ["if", "that", "what"], correct: 0,
          explanation: "'If' introduce la cláusula de pregunta sí/no." },
        { prompt: "He asked ___ I had finished.", options: ["if", "that", "what"], correct: 0,
          explanation: "'If' introduce la cláusula de pregunta sí/no." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa cada oración con if o whether.",
      type: "fill",
      questions: [
        { prompt: "I wonder ___ she likes me.", correct: ["if", "whether"], explanation: "If o whether introducen la cláusula." },
        { prompt: "I don't know ___ he called.", correct: ["if", "whether"], explanation: "If o whether introducen la cláusula." },
        { prompt: "She asked ___ I was okay.", correct: ["if", "whether"], explanation: "If o whether introducen la cláusula." },
        { prompt: "I'm not sure ___ to go or stay. (solo funciona con una de estas)", correct: ["whether"], explanation: "Solo 'whether' funciona antes de infinitivo." },
        { prompt: "Can you check ___ the light is on?", correct: ["if", "whether"], explanation: "If o whether introducen la cláusula." },
        { prompt: "I doubt ___ it will work.", correct: ["if", "whether"], explanation: "If o whether introducen la cláusula." },
        { prompt: "He asked ___ or not I agreed.", correct: ["whether"], explanation: "'Whether or not' es una combinación fija." },
        { prompt: "I wonder ___ they arrived safely.", correct: ["if", "whether"], explanation: "If o whether introducen la cláusula." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "wonder", "if", "she", "is", "coming", "."], translation: "Me pregunto si ella viene.",
          explanation: "'If' + sujeto + verbo (orden afirmativo)." },
        { words: ["I", "don't", "know", "if", "he", "called", "."], translation: "No sé si él llamó.",
          explanation: "'If' + sujeto + verbo." },
        { words: ["She", "asked", "whether", "it", "would", "rain", "."], translation: "Ella preguntó si llovería.",
          explanation: "'Whether' + sujeto + verbo." },
        { words: ["I'm", "not", "sure", "if", "she", "likes", "coffee", "."], translation: "No estoy seguro de si a ella le gusta el café.",
          explanation: "'If' + sujeto + verbo." },
        { words: ["Can", "you", "check", "if", "the", "door", "is", "locked", "?"], translation: "¿Puedes revisar si la puerta está cerrada?",
          explanation: "'If' + sujeto + verbo." },
        { words: ["I", "don't", "know", "whether", "to", "go", "."], translation: "No sé si ir.",
          explanation: "'Whether' + infinitivo (if no funcionaría aquí)." },
        { words: ["He", "asked", "if", "I", "had", "finished", "."], translation: "Él preguntó si yo había terminado.",
          explanation: "'If' + sujeto + verbo." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada pregunta directa con su cláusula sustantiva correspondiente.",
      type: "match",
      questions: [
        { pairs: [
            ["Is she coming?", "I wonder if she is coming"], ["Did he call?", "I don't know if he called"],
            ["Will it rain?", "She asked whether it would rain"], ["Do you like it?", "I wonder if you like it"],
            ["or not", "o no"], ["uncertain", "incierto"], ["find out", "averiguar"],
          ],
          explanation: "El orden vuelve a ser afirmativo (sujeto+verbo) dentro de la cláusula." }
      ]
    }
  ]
};
