window.EXERCISE_DATA = {
  title: "Simple Past of TO BE (was / were)",
  translation: "El verbo SER/ESTAR en pasado",
  level: "Nivel 2 · Básico 1 (A1)",

  vocabulary: [
    { en: "yesterday", es: "ayer" },
    { en: "last night", es: "anoche" },
    { en: "last week", es: "la semana pasada" },
    { en: "ago", es: "hace (tiempo)" },
    { en: "child", es: "niño/a" },
    { en: "young", es: "joven" },
    { en: "born", es: "nacido/a" },
    { en: "there", es: "allí" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["yesterday", "ayer"], ["last night", "anoche"], ["last week", "la semana pasada"],
          ["ago", "hace (tiempo)"], ["young", "joven"], ["born", "nacido/a"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>El verbo <strong>to be</strong> en pasado tiene dos formas: <strong>was</strong> y <strong>were</strong>.</p>
    <table>
      <tr><th>Pronombre</th><th>Forma</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>I / He / She / It</td><td>was</td><td>I was tired.</td><td>Yo estaba cansado.</td></tr>
      <tr><td>You / We / They</td><td>were</td><td>They were happy.</td><td>Ellos estaban felices.</td></tr>
    </table>
    <p><strong>Negativo:</strong> was not (wasn't) / were not (weren't).<br>
    <strong>Pregunta:</strong> el verbo va antes del sujeto: <strong>Was she there?</strong> (¿Estaba ella allí?)</p>
    <p>Ejemplos: <strong>I was born in 2005.</strong> (Nací en 2005.) —
    <strong>We weren't at home yesterday.</strong> (No estábamos en casa ayer.) —
    <strong>Were you at the party?</strong> (¿Estuviste en la fiesta?)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta (was / were).",
      type: "mc",
      questions: [
        { prompt: "I ___ tired yesterday.", options: ["was", "were", "am"], correct: 0,
          explanation: "Con 'I' se usa 'was'." },
        { prompt: "They ___ at school last week.", options: ["was", "were", "are"], correct: 1,
          explanation: "Con 'they' se usa 'were'." },
        { prompt: "She ___ born in Peru.", options: ["was", "were", "is"], correct: 0,
          explanation: "Con 'she' se usa 'was'." },
        { prompt: "We ___ not at the party.", options: ["was", "were", "are"], correct: 1,
          explanation: "Con 'we' se usa 'were'." },
        { prompt: "___ you at home last night?", options: ["Was", "Were", "Are"], correct: 1,
          explanation: "Con 'you' en preguntas se usa 'Were'." },
        { prompt: "He ___ a good student.", options: ["was", "were", "is"], correct: 0,
          explanation: "Con 'he' se usa 'was'." },
        { prompt: "It ___ very cold yesterday.", options: ["was", "were", "is"], correct: 0,
          explanation: "Con 'it' se usa 'was'." },
        { prompt: "___ they happy with the results?", options: ["Was", "Were", "Are"], correct: 1,
          explanation: "Con 'they' en preguntas se usa 'Were'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con was o were.",
      type: "fill",
      questions: [
        { prompt: "I ___ happy yesterday.", correct: ["was"], explanation: "Con 'I' se usa 'was'." },
        { prompt: "You ___ very kind.", correct: ["were"], explanation: "Con 'you' se usa 'were'." },
        { prompt: "She ___ not at school.", correct: ["was"], explanation: "Con 'she' se usa 'was'." },
        { prompt: "We ___ at the beach last summer.", correct: ["were"], explanation: "Con 'we' se usa 'were'." },
        { prompt: "The movie ___ very interesting.", correct: ["was"], explanation: "'The movie' equivale a 'it', se usa 'was'." },
        { prompt: "My parents ___ young once.", correct: ["were"], explanation: "'My parents' equivale a 'they', se usa 'were'." },
        { prompt: "___ he at the meeting?", correct: ["was"], explanation: "Con 'he' en preguntas se usa 'was'." },
        { prompt: "___ they at the party last night?", correct: ["were"], explanation: "Con 'they' en preguntas se usa 'were'." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "was", "born", "in", "2005", "."], translation: "Nací en 2005.",
          explanation: "Orden: sujeto + was + participio + año." },
        { words: ["They", "were", "happy", "yesterday", "."], translation: "Ellos estaban felices ayer.",
          explanation: "Orden: sujeto + were + adjetivo + tiempo." },
        { words: ["Was", "she", "at", "home", "?"], translation: "¿Estaba ella en casa?",
          explanation: "Pregunta: was antes del sujeto." },
        { words: ["We", "weren't", "at", "school", "."], translation: "No estábamos en la escuela.",
          explanation: "Negación con weren't." },
        { words: ["He", "was", "a", "good", "friend", "."], translation: "Él era un buen amigo.",
          explanation: "Orden: sujeto + was + artículo + adjetivo + sustantivo." },
        { words: ["Were", "you", "at", "the", "party", "?"], translation: "¿Estuviste en la fiesta?",
          explanation: "Pregunta: were antes del sujeto." },
        { words: ["It", "was", "very", "cold", "last", "night", "."], translation: "Hacía mucho frío anoche.",
          explanation: "Orden: sujeto + was + intensificador + adjetivo + tiempo." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada pronombre con la forma correcta del pasado de to be.",
      type: "match",
      questions: [
        { pairs: [
            ["I", "was"], ["You", "were"], ["He", "was"], ["She", "was"],
            ["It", "was"], ["We", "were"], ["They", "were"],
          ],
          explanation: "Regla clave: I/He/She/It → was · You/We/They → were." }
      ]
    }
  ]
};
