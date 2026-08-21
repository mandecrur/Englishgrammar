window.EXERCISE_DATA = {
  title: "Object Pronouns",
  translation: "Pronombres de objeto (me, him, her...)",
  level: "Nivel 2 · Básico 1 (A1)",

  vocabulary: [
    { en: "me", es: "a mí / me" },
    { en: "him", es: "a él / lo" },
    { en: "her", es: "a ella / la" },
    { en: "us", es: "a nosotros / nos" },
    { en: "them", es: "a ellos / los" },
    { en: "help", es: "ayudar" },
    { en: "give", es: "dar" },
    { en: "tell", es: "decir / contar" },
  ],

  vocabExercise: {
    title: "Relaciona cada pronombre con su significado",
    instructions: "Une cada pronombre en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["me", "a mí / me"], ["him", "a él / lo"], ["her", "a ella / la"],
          ["us", "a nosotros / nos"], ["them", "a ellos / los"], ["give", "dar"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Los pronombres de objeto reemplazan al sustantivo que <strong>recibe</strong> la acción del verbo.
    Se usan después del verbo o de una preposición.</p>
    <table>
      <tr><th>Sujeto</th><th>Objeto</th><th>Ejemplo</th></tr>
      <tr><td>I</td><td>me</td><td>She helps me.</td></tr>
      <tr><td>You</td><td>you</td><td>I see you.</td></tr>
      <tr><td>He</td><td>him</td><td>We call him.</td></tr>
      <tr><td>She</td><td>her</td><td>They love her.</td></tr>
      <tr><td>It</td><td>it</td><td>I have it.</td></tr>
      <tr><td>We</td><td>us</td><td>She teaches us.</td></tr>
      <tr><td>They</td><td>them</td><td>I know them.</td></tr>
    </table>
    <p>Ejemplo comparativo: <strong>He</strong> (sujeto) <strong>helps her</strong> (objeto).
    (Él ayuda a ella.) Nota que "he" no cambia, pero "she" se convierte en "her" al ser objeto.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige el pronombre de objeto correcto.",
      type: "mc",
      questions: [
        { prompt: "She helps ___ every day. (a mí)", options: ["I", "me", "my"], correct: 1,
          explanation: "'Me' es el pronombre de objeto para 'I'." },
        { prompt: "I see ___ at school. (a él)", options: ["he", "him", "his"], correct: 1,
          explanation: "'Him' es el pronombre de objeto para 'he'." },
        { prompt: "We love ___ very much. (a ella)", options: ["she", "her", "hers"], correct: 1,
          explanation: "'Her' es el pronombre de objeto para 'she'." },
        { prompt: "They call ___ every weekend. (a nosotros)", options: ["we", "us", "our"], correct: 1,
          explanation: "'Us' es el pronombre de objeto para 'we'." },
        { prompt: "I know ___ well. (a ellos)", options: ["they", "them", "their"], correct: 1,
          explanation: "'Them' es el pronombre de objeto para 'they'." },
        { prompt: "Can you help ___? (a mí)", options: ["I", "me", "my"], correct: 1,
          explanation: "'Me' es el pronombre de objeto." },
        { prompt: "She gives ___ a gift. (a él)", options: ["he", "him", "his"], correct: 1,
          explanation: "'Him' es el pronombre de objeto." },
        { prompt: "I have ___ in my bag. (eso)", options: ["it", "its", "he"], correct: 0,
          explanation: "'It' se usa como sujeto y objeto para objetos." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa cada oración con el pronombre de objeto correcto.",
      type: "fill",
      questions: [
        { prompt: "Please call ___ tonight. (a mí)", correct: ["me"], explanation: "'Me' es el objeto de 'I'." },
        { prompt: "I don't understand ___. (a él)", correct: ["him"], explanation: "'Him' es el objeto de 'he'." },
        { prompt: "We visit ___ every summer. (a ella)", correct: ["her"], explanation: "'Her' es el objeto de 'she'." },
        { prompt: "They teach ___ English. (a nosotros)", correct: ["us"], explanation: "'Us' es el objeto de 'we'." },
        { prompt: "I saw ___ at the mall. (a ellos)", correct: ["them"], explanation: "'Them' es el objeto de 'they'." },
        { prompt: "Give ___ the book, please. (a mí)", correct: ["me"], explanation: "'Me' es el objeto de 'I'." },
        { prompt: "She loves ___ a lot. (a él)", correct: ["him"], explanation: "'Him' es el objeto de 'he'." },
        { prompt: "Tell ___ the truth. (a ella)", correct: ["her"], explanation: "'Her' es el objeto de 'she'." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["She", "helps", "me", "every", "day", "."], translation: "Ella me ayuda todos los días.",
          explanation: "Orden: sujeto + verbo + objeto + tiempo." },
        { words: ["I", "see", "him", "at", "school", "."], translation: "Lo veo a él en la escuela.",
          explanation: "Orden: sujeto + verbo + objeto + lugar." },
        { words: ["We", "love", "her", "very", "much", "."], translation: "La queremos mucho a ella.",
          explanation: "Orden: sujeto + verbo + objeto + intensificador." },
        { words: ["Can", "you", "help", "us", "?"], translation: "¿Puedes ayudarnos?",
          explanation: "Pregunta: Can + sujeto + verbo + objeto." },
        { words: ["I", "know", "them", "well", "."], translation: "Los conozco bien.",
          explanation: "Orden: sujeto + verbo + objeto + adverbio." },
        { words: ["Give", "me", "the", "book", "."], translation: "Dame el libro.",
          explanation: "Imperativo + objeto + complemento." },
        { words: ["Please", "tell", "her", "the", "truth", "."], translation: "Por favor dile a ella la verdad.",
          explanation: "'Please' + imperativo + objeto + complemento." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada pronombre de sujeto con su forma de objeto.",
      type: "match",
      questions: [
        { pairs: [
            ["I", "me"], ["you", "you"], ["he", "him"], ["she", "her"],
            ["it", "it"], ["we", "us"], ["they", "them"],
          ],
          explanation: "Cada pronombre de sujeto tiene su forma de objeto correspondiente." }
      ]
    }
  ]
};
