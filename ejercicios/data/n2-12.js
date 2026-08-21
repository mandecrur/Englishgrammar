window.EXERCISE_DATA = {
  title: "Possessive Adjectives",
  translation: "Adjetivos posesivos (my, your, his...)",
  level: "Nivel 2 · Básico 1 (A1)",

  vocabulary: [
    { en: "my", es: "mi / mis" },
    { en: "your", es: "tu / tus" },
    { en: "his", es: "su (de él)" },
    { en: "her", es: "su (de ella)" },
    { en: "its", es: "su (de eso)" },
    { en: "our", es: "nuestro/a" },
    { en: "their", es: "su (de ellos)" },
    { en: "belong", es: "pertenecer" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["my", "mi / mis"], ["your", "tu / tus"], ["his", "su (de él)"],
          ["her", "su (de ella)"], ["our", "nuestro/a"], ["their", "su (de ellos)"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Los adjetivos posesivos indican a quién pertenece algo. Siempre van
    <strong>antes del sustantivo</strong> y no cambian en plural.</p>
    <table>
      <tr><th>Pronombre</th><th>Posesivo</th><th>Ejemplo</th></tr>
      <tr><td>I</td><td>my</td><td>my book</td></tr>
      <tr><td>You</td><td>your</td><td>your car</td></tr>
      <tr><td>He</td><td>his</td><td>his phone</td></tr>
      <tr><td>She</td><td>her</td><td>her bag</td></tr>
      <tr><td>It</td><td>its</td><td>its color</td></tr>
      <tr><td>We</td><td>our</td><td>our house</td></tr>
      <tr><td>They</td><td>their</td><td>their dog</td></tr>
    </table>
    <p>Importante: <strong>its</strong> (sin apóstrofo) es el posesivo de "it".
    No confundir con <strong>it's</strong> (con apóstrofo), que es la contracción de "it is".</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige el adjetivo posesivo correcto.",
      type: "mc",
      questions: [
        { prompt: "This is ___ book. (mi)", options: ["I", "my", "me"], correct: 1,
          explanation: "'My' es el posesivo de 'I'." },
        { prompt: "Is this ___ car? (tu)", options: ["you", "your", "yours"], correct: 1,
          explanation: "'Your' es el posesivo de 'you'." },
        { prompt: "He loves ___ family. (su, de él)", options: ["him", "his", "he's"], correct: 1,
          explanation: "'His' es el posesivo de 'he'." },
        { prompt: "She lost ___ phone. (su, de ella)", options: ["her", "hers", "she"], correct: 0,
          explanation: "'Her' es el posesivo de 'she'." },
        { prompt: "The dog wags ___ tail. (su, de eso)", options: ["it's", "its", "it"], correct: 1,
          explanation: "'Its' (sin apóstrofo) es el posesivo de 'it'." },
        { prompt: "We love ___ house. (nuestro)", options: ["our", "us", "we"], correct: 0,
          explanation: "'Our' es el posesivo de 'we'." },
        { prompt: "They visit ___ grandparents. (sus)", options: ["they", "their", "them"], correct: 1,
          explanation: "'Their' es el posesivo de 'they'." },
        { prompt: "___ name is Carlos. (mi)", options: ["My", "I", "Me"], correct: 0,
          explanation: "'My' es el posesivo de 'I'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con el adjetivo posesivo correcto.",
      type: "fill",
      questions: [
        { prompt: "This is ___ pencil. (mi)", correct: ["my"], explanation: "'My' es el posesivo de 'I'." },
        { prompt: "Is that ___ bag? (tu)", correct: ["your"], explanation: "'Your' es el posesivo de 'you'." },
        { prompt: "He loves ___ job. (su, de él)", correct: ["his"], explanation: "'His' es el posesivo de 'he'." },
        { prompt: "She has ___ own car. (su, de ella)", correct: ["her"], explanation: "'Her' es el posesivo de 'she'." },
        { prompt: "We take care of ___ garden. (nuestro)", correct: ["our"], explanation: "'Our' es el posesivo de 'we'." },
        { prompt: "They love ___ pets. (sus)", correct: ["their"], explanation: "'Their' es el posesivo de 'they'." },
        { prompt: "The cat licks ___ paws. (sus, de eso)", correct: ["its"], explanation: "'Its' es el posesivo de 'it'." },
        { prompt: "___ sister is a doctor. (mi)", correct: ["my"], explanation: "'My' es el posesivo de 'I'." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["This", "is", "my", "book", "."], translation: "Este es mi libro.",
          explanation: "El posesivo va antes del sustantivo." },
        { words: ["Is", "that", "your", "car", "?"], translation: "¿Es ese tu carro?",
          explanation: "Pregunta con el posesivo antes del sustantivo." },
        { words: ["He", "loves", "his", "job", "."], translation: "A él le encanta su trabajo.",
          explanation: "Orden: sujeto + verbo + posesivo + sustantivo." },
        { words: ["We", "clean", "our", "house", "."], translation: "Limpiamos nuestra casa.",
          explanation: "Orden: sujeto + verbo + posesivo + sustantivo." },
        { words: ["They", "love", "their", "children", "."], translation: "Ellos aman a sus hijos.",
          explanation: "Orden: sujeto + verbo + posesivo + sustantivo." },
        { words: ["She", "has", "her", "own", "room", "."], translation: "Ella tiene su propia habitación.",
          explanation: "Orden: sujeto + verbo + posesivo + adjetivo + sustantivo." },
        { words: ["The", "dog", "wags", "its", "tail", "."], translation: "El perro mueve su cola.",
          explanation: "'Its' se usa para animales/objetos." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada pronombre con su adjetivo posesivo correspondiente.",
      type: "match",
      questions: [
        { pairs: [
            ["I", "my"], ["you", "your"], ["he", "his"], ["she", "her"],
            ["it", "its"], ["we", "our"], ["they", "their"],
          ],
          explanation: "Los adjetivos posesivos no cambian en plural." }
      ]
    }
  ]
};
