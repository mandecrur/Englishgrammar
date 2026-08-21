window.EXERCISE_DATA = {
  title: "Adjective Clauses (where / when)",
  translation: "Cláusulas adjetivas de lugar y tiempo",
  level: "Nivel 5 · Intermedio Alto (B2)",

  vocabulary: [
    { en: "where", es: "donde" },
    { en: "when", es: "cuando" },
    { en: "the place", es: "el lugar" },
    { en: "the moment", es: "el momento" },
    { en: "the day", es: "el día" },
    { en: "hometown", es: "ciudad natal" },
    { en: "occasion", es: "ocasión" },
    { en: "location", es: "ubicación" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["where", "donde"], ["when", "cuando"], ["the place", "el lugar"],
          ["the moment", "el momento"], ["hometown", "ciudad natal"], ["occasion", "ocasión"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Además de who/which/that, las cláusulas adjetivas también pueden usar <strong>where</strong>
    (para lugares) y <strong>when</strong> (para tiempos).</p>
    <table>
      <tr><th>Pronombre</th><th>Se usa para</th><th>Ejemplo</th></tr>
      <tr><td><strong>where</strong></td><td>lugares</td><td>This is the city where I was born.</td></tr>
      <tr><td><strong>when</strong></td><td>tiempos/momentos</td><td>I remember the day when we met.</td></tr>
    </table>
    <p>Ejemplo: <strong>This is the restaurant where we had our first date.</strong>
    (Este es el restaurante donde tuvimos nuestra primera cita.)<br>
    <strong>I'll never forget the moment when I saw the ocean for the first time.</strong>
    (Nunca olvidaré el momento en que vi el océano por primera vez.)</p>
    <p>Alternativa: se puede reemplazar "where" con "which/that + preposición":
    <strong>the city where I was born</strong> = <strong>the city that I was born in</strong>
    (ambas son correctas, "where" es más natural y común).</p>
    <p>Nota que "when" en estas cláusulas se puede omitir a veces sin cambiar el significado:
    <strong>I remember the day we met</strong> (sin "when", también correcto e informal).</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige el pronombre correcto (where o when).",
      type: "mc",
      questions: [
        { prompt: "This is the city ___ I was born. (lugar)", options: ["where", "when"], correct: 0,
          explanation: "'Where' se usa para lugares." },
        { prompt: "I remember the day ___ we met. (tiempo)", options: ["where", "when"], correct: 1,
          explanation: "'When' se usa para tiempos/momentos." },
        { prompt: "This is the restaurant ___ we had our first date.", options: ["where", "when"], correct: 0,
          explanation: "'Where' se usa para lugares." },
        { prompt: "I'll never forget the moment ___ I saw the ocean.", options: ["where", "when"], correct: 1,
          explanation: "'When' se usa para momentos." },
        { prompt: "That's the school ___ I studied.", options: ["where", "when"], correct: 0,
          explanation: "'Where' se usa para lugares." },
        { prompt: "Summer is the season ___ I feel happiest.", options: ["where", "when"], correct: 1,
          explanation: "'When' se usa para periodos de tiempo." },
        { prompt: "This is the house ___ I grew up.", options: ["where", "when"], correct: 0,
          explanation: "'Where' se usa para lugares." },
        { prompt: "I remember the year ___ I graduated.", options: ["where", "when"], correct: 1,
          explanation: "'When' se usa para tiempos." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con where o when según corresponda.",
      type: "fill",
      questions: [
        { prompt: "This is the town ___ I was born.", correct: ["where"], explanation: "'Where' para lugares." },
        { prompt: "I remember the moment ___ I met her.", correct: ["when"], explanation: "'When' para momentos." },
        { prompt: "That's the park ___ we play soccer.", correct: ["where"], explanation: "'Where' para lugares." },
        { prompt: "December is the month ___ it's coldest.", correct: ["when"], explanation: "'When' para tiempos." },
        { prompt: "This is the office ___ I work.", correct: ["where"], explanation: "'Where' para lugares." },
        { prompt: "I'll never forget the day ___ we got married.", correct: ["when"], explanation: "'When' para momentos." },
        { prompt: "That's the beach ___ we go every summer.", correct: ["where"], explanation: "'Where' para lugares." },
        { prompt: "This is the year ___ everything changed.", correct: ["when"], explanation: "'When' para tiempos." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["This", "is", "the", "city", "where", "I", "was", "born", "."], translation: "Esta es la ciudad donde nací.",
          explanation: "'Where' introduce la cláusula de lugar." },
        { words: ["I", "remember", "the", "day", "when", "we", "met", "."], translation: "Recuerdo el día en que nos conocimos.",
          explanation: "'When' introduce la cláusula de tiempo." },
        { words: ["This", "is", "the", "restaurant", "where", "we", "ate", "."], translation: "Este es el restaurante donde comimos.",
          explanation: "'Where' introduce la cláusula de lugar." },
        { words: ["Summer", "is", "the", "season", "when", "I", "feel", "happiest", "."], translation: "El verano es la estación cuando me siento más feliz.",
          explanation: "'When' introduce la cláusula de tiempo." },
        { words: ["That's", "the", "school", "where", "I", "studied", "."], translation: "Esa es la escuela donde estudié.",
          explanation: "'Where' introduce la cláusula de lugar." },
        { words: ["I'll", "never", "forget", "the", "moment", "when", "I", "arrived", "."], translation: "Nunca olvidaré el momento en que llegué.",
          explanation: "'When' introduce la cláusula de tiempo." },
        { words: ["This", "is", "the", "house", "where", "I", "grew", "up", "."], translation: "Esta es la casa donde crecí.",
          explanation: "'Where' introduce la cláusula de lugar." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["the city where I was born", "la ciudad donde nací"], ["the day when we met", "el día en que nos conocimos"],
            ["the restaurant where we ate", "el restaurante donde comimos"], ["the moment when I arrived", "el momento en que llegué"],
            ["hometown", "ciudad natal"], ["occasion", "ocasión"], ["location", "ubicación"],
          ],
          explanation: "'Where' para lugares, 'when' para momentos y periodos de tiempo." }
      ]
    }
  ]
};
