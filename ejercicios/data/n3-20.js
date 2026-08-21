window.EXERCISE_DATA = {
  title: "Irregular Superlatives",
  translation: "Superlativos irregulares",
  level: "Nivel 3 · Básico 2 (A2)",

  vocabulary: [
    { en: "the best", es: "el mejor" },
    { en: "the worst", es: "el peor" },
    { en: "the farthest", es: "el más lejano" },
    { en: "the least", es: "el menos (cantidad)" },
    { en: "the most", es: "el más (cantidad)" },
    { en: "overall", es: "en general" },
    { en: "champion", es: "campeón" },
    { en: "achievement", es: "logro" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["the best", "el mejor"], ["the worst", "el peor"], ["the farthest", "el más lejano"],
          ["the least", "el menos"], ["the most", "el más"], ["achievement", "logro"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Los mismos adjetivos irregulares en comparativo también tienen forma irregular en superlativo.</p>
    <table>
      <tr><th>Adjetivo</th><th>Comparativo</th><th>Superlativo</th></tr>
      <tr><td>good</td><td>better</td><td>the best</td></tr>
      <tr><td>bad</td><td>worse</td><td>the worst</td></tr>
      <tr><td>far</td><td>farther/further</td><td>the farthest/furthest</td></tr>
      <tr><td>little</td><td>less</td><td>the least</td></tr>
      <tr><td>many/much</td><td>more</td><td>the most</td></tr>
    </table>
    <p>Ejemplo: <strong>This is the best restaurant in town.</strong>
    (Este es el mejor restaurante de la ciudad.)<br>
    <strong>That was the worst movie I've ever seen.</strong>
    (Esa fue la peor película que he visto.)</p>
    <p>Todos los superlativos, regulares e irregulares, llevan <strong>the</strong> antes.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige el superlativo irregular correcto.",
      type: "mc",
      questions: [
        { prompt: "This is ___ restaurant in town. (good)", options: ["the goodest", "the best", "the more good"], correct: 1,
          explanation: "'Good' es irregular: the best." },
        { prompt: "That was ___ day of my life. (bad)", options: ["the baddest", "the worst", "the more bad"], correct: 1,
          explanation: "'Bad' es irregular: the worst." },
        { prompt: "This is ___ planet from the sun. (far)", options: ["the farest", "the farthest", "the more far"], correct: 1,
          explanation: "'Far' es irregular: the farthest." },
        { prompt: "He has ___ experience of all. (little)", options: ["the littlest", "the least", "the less"], correct: 1,
          explanation: "'Little' es irregular: the least." },
        { prompt: "She has ___ friends in class. (many)", options: ["the manyest", "the most", "the more"], correct: 1,
          explanation: "'Many' es irregular: the most." },
        { prompt: "This is ___ team in the league. (good)", options: ["the goodest", "the best", "gooder"], correct: 1,
          explanation: "'Good' es irregular: the best." },
        { prompt: "That's ___ excuse I've ever heard. (bad)", options: ["the baddest", "the worst", "worser"], correct: 1,
          explanation: "'Bad' es irregular: the worst." },
        { prompt: "We need ___ amount of time possible. (little)", options: ["the least", "the littlest", "less"], correct: 0,
          explanation: "'Little' es irregular: the least." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Escribe la forma superlativa irregular correcta.",
      type: "fill",
      questions: [
        { prompt: "This is ___ (good) pizza in town.", correct: ["the best"], explanation: "'Good' irregular: the best." },
        { prompt: "That was ___ (bad) experience ever.", correct: ["the worst"], explanation: "'Bad' irregular: the worst." },
        { prompt: "Pluto is ___ (far) planet, some say.", correct: ["the farthest", "the furthest"], explanation: "'Far' irregular: the farthest." },
        { prompt: "He made ___ (little) mistakes of the group.", correct: ["the least"], explanation: "'Little' irregular: the least." },
        { prompt: "She has ___ (many) points in the game.", correct: ["the most"], explanation: "'Many' irregular: the most." },
        { prompt: "This is ___ (good) decision you can make.", correct: ["the best"], explanation: "'Good' irregular: the best." },
        { prompt: "That's ___ (bad) idea I've heard.", correct: ["the worst"], explanation: "'Bad' irregular: the worst." },
        { prompt: "This option costs ___ (little) money.", correct: ["the least"], explanation: "'Little' irregular: the least." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["This", "is", "the", "best", "day", "of", "my", "life", "."], translation: "Este es el mejor día de mi vida.",
          explanation: "'The best' es el superlativo irregular de 'good'." },
        { words: ["That", "was", "the", "worst", "movie", "ever", "."], translation: "Esa fue la peor película de todas.",
          explanation: "'The worst' es el superlativo irregular de 'bad'." },
        { words: ["This", "is", "the", "farthest", "point", "."], translation: "Este es el punto más lejano.",
          explanation: "'The farthest' es el superlativo irregular de 'far'." },
        { words: ["She", "has", "the", "most", "experience", "."], translation: "Ella tiene la mayor experiencia.",
          explanation: "'The most' es el superlativo irregular de 'many/much'." },
        { words: ["He", "made", "the", "least", "mistakes", "."], translation: "Él cometió los menos errores.",
          explanation: "'The least' es el superlativo irregular de 'little'." },
        { words: ["This", "is", "the", "best", "team", "in", "the", "league", "."], translation: "Este es el mejor equipo de la liga.",
          explanation: "'The best' es el superlativo irregular de 'good'." },
        { words: ["That", "was", "the", "worst", "excuse", "ever", "."], translation: "Esa fue la peor excusa de todas.",
          explanation: "'The worst' es el superlativo irregular de 'bad'." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada adjetivo con su superlativo irregular.",
      type: "match",
      questions: [
        { pairs: [
            ["good", "the best"], ["bad", "the worst"], ["far", "the farthest"],
            ["little", "the least"], ["many", "the most"], ["much", "the most"], ["worst excuse ever", "peor excusa de todas"],
          ],
          explanation: "Estos superlativos irregulares deben memorizarse junto a sus comparativos." }
      ]
    }
  ]
};
