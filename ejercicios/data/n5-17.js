window.EXERCISE_DATA = {
  title: "Restrictive vs Non-restrictive Clauses",
  translation: "Cláusulas especificativas vs explicativas",
  level: "Nivel 5 · Intermedio Alto (B2)",

  vocabulary: [
    { en: "essential information", es: "información esencial" },
    { en: "extra information", es: "información adicional" },
    { en: "comma", es: "coma" },
    { en: "specify", es: "especificar" },
    { en: "identify", es: "identificar" },
    { en: "unique", es: "único" },
    { en: "additional", es: "adicional" },
    { en: "necessary", es: "necesario" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["essential information", "información esencial"], ["extra information", "información adicional"], ["comma", "coma"],
          ["specify", "especificar"], ["unique", "único"], ["necessary", "necesario"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Las cláusulas adjetivas pueden ser <strong>restrictivas</strong> (esenciales para identificar
    al sustantivo) o <strong>no restrictivas</strong> (información extra, no esencial).</p>
    <table>
      <tr><th>Tipo</th><th>Comas</th><th>Ejemplo</th></tr>
      <tr><td>Restrictiva</td><td>sin comas</td><td>The student who studies hard will pass.</td></tr>
      <tr><td>No restrictiva</td><td>con comas</td><td>My brother, who lives in Lima, is a doctor.</td></tr>
    </table>
    <p><strong>Restrictiva</strong>: la información es <strong>necesaria</strong> para saber de quién/qué
    se habla. Sin ella, la oración pierde sentido específico: <strong>The student who studies hard
    will pass</strong> (identifica cuál estudiante, entre muchos).</p>
    <p><strong>No restrictiva</strong>: la información es <strong>extra</strong>, no esencial —
    ya sabemos de quién hablamos (por ejemplo, "my brother" ya es específico).
    <strong>My brother, who lives in Lima, is a doctor.</strong> (Ya sé quién es mi hermano;
    "who lives in Lima" es solo información adicional.)</p>
    <p>Importante: en cláusulas no restrictivas, <strong>no se puede usar "that"</strong>, solo
    who/which. Y siempre van entre comas.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige si la cláusula necesita comas o no.",
      type: "mc",
      questions: [
        { prompt: "The student ___ studies hard will pass. (identifica cuál estudiante)", options: ["who, comma", "who, no comma"], correct: 1,
          explanation: "Restrictiva: sin comas, información esencial." },
        { prompt: "My mother, ___ lives in Cusco, is a teacher. (información extra)", options: ["who", "that"], correct: 0,
          explanation: "En cláusulas no restrictivas, se usa 'who', nunca 'that'." },
        { prompt: "The book ___ I read was great. (identifica cuál libro, sin comas)", options: ["which", "that"], correct: 1,
          explanation: "'That' funciona en cláusulas restrictivas." },
        { prompt: "Lima, ___ is the capital of Peru, is a big city. (información extra)", options: ["which", "that"], correct: 0,
          explanation: "En cláusulas no restrictivas, se usa 'which', no 'that'." },
        { prompt: "People ___ exercise regularly are healthier. (identifica cuáles personas)", options: ["who", "who, comma"], correct: 0,
          explanation: "Restrictiva: sin comas." },
        { prompt: "My car, ___ I bought last year, is very fast. (información extra)", options: ["that", "which"], correct: 1,
          explanation: "En cláusulas no restrictivas, se usa 'which', no 'that'." },
        { prompt: "The house ___ has a red door is mine. (identifica cuál casa)", options: ["that", "that, comma"], correct: 0,
          explanation: "Restrictiva: sin comas." },
        { prompt: "This ring, ___ belonged to my grandmother, is very old. (información extra)", options: ["that", "which"], correct: 1,
          explanation: "En cláusulas no restrictivas, se usa 'which', no 'that'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Decide si la oración necesita comas y completa correctamente.",
      type: "fill",
      questions: [
        { prompt: "My sister, ___ (who/that) lives abroad, called me. (extra)", correct: ["who"], explanation: "No restrictiva: 'who', no 'that'." },
        { prompt: "The man ___ (who/whom) called is my boss. (identifica)", correct: ["who"], explanation: "Restrictiva: sin comas." },
        { prompt: "Paris, ___ (which/that) is in France, is beautiful. (extra)", correct: ["which"], explanation: "No restrictiva: 'which', no 'that'." },
        { prompt: "The car ___ (that/which) I bought is red. (identifica, informal)", correct: ["that"], explanation: "Restrictiva: se puede usar 'that'." },
        { prompt: "My father, ___ (who/that) is a doctor, works hard. (extra)", correct: ["who"], explanation: "No restrictiva: 'who', no 'that'." },
        { prompt: "The students ___ (who/that) study hard succeed. (identifica)", correct: ["who", "that"], explanation: "Restrictiva: ambos funcionan." },
        { prompt: "This book, ___ (which/that) I love, is a classic. (extra)", correct: ["which"], explanation: "No restrictiva: 'which', no 'that'." },
        { prompt: "The city ___ (that/which) I was born is beautiful. (identifica)", correct: ["that", "which"], explanation: "Restrictiva: ambos funcionan." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["The", "student", "who", "studies", "hard", "will", "pass", "."], translation: "El estudiante que estudia duro aprobará.",
          explanation: "Restrictiva, sin comas: identifica cuál estudiante." },
        { words: ["My", "brother", "who", "lives", "in", "Lima", "is", "a", "doctor", "."], translation: "Mi hermano, quien vive en Lima, es doctor.",
          explanation: "No restrictiva: información adicional (en escritura llevaría comas)." },
        { words: ["The", "book", "that", "I", "read", "was", "great", "."], translation: "El libro que leí fue excelente.",
          explanation: "Restrictiva, con 'that': identifica cuál libro." },
        { words: ["Lima", "which", "is", "the", "capital", "is", "big", "."], translation: "Lima, que es la capital, es grande.",
          explanation: "No restrictiva: información adicional sobre Lima." },
        { words: ["People", "who", "exercise", "are", "healthier", "."], translation: "Las personas que hacen ejercicio son más saludables.",
          explanation: "Restrictiva, sin comas: identifica cuáles personas." },
        { words: ["My", "car", "which", "I", "bought", "last", "year", "is", "fast", "."], translation: "Mi carro, que compré el año pasado, es rápido.",
          explanation: "No restrictiva: información adicional sobre el carro." },
        { words: ["The", "house", "that", "has", "a", "red", "door", "is", "mine", "."], translation: "La casa que tiene una puerta roja es mía.",
          explanation: "Restrictiva, con 'that': identifica cuál casa." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada tipo de cláusula con su característica.",
      type: "match",
      questions: [
        { pairs: [
            ["restrictive", "sin comas, esencial"], ["non-restrictive", "con comas, información extra"],
            ["that", "solo en restrictivas"], ["which/who in non-restrictive", "nunca 'that'"],
            ["identifies", "identifica"], ["additional info", "información adicional"], ["essential", "esencial"],
          ],
          explanation: "El uso de comas cambia si la información es esencial o adicional." }
      ]
    }
  ]
};
