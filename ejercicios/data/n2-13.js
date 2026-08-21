window.EXERCISE_DATA = {
  title: "Possessive Pronouns",
  translation: "Pronombres posesivos (mine, yours, his...)",
  level: "Nivel 2 · Básico 1 (A1)",

  vocabulary: [
    { en: "mine", es: "el mío / la mía" },
    { en: "yours", es: "el tuyo / la tuya" },
    { en: "his", es: "el suyo (de él)" },
    { en: "hers", es: "el suyo (de ella)" },
    { en: "ours", es: "el nuestro / la nuestra" },
    { en: "theirs", es: "el suyo (de ellos)" },
    { en: "whose", es: "de quién" },
    { en: "belong to", es: "pertenecer a" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["mine", "el mío / la mía"], ["yours", "el tuyo / la tuya"], ["his", "el suyo (de él)"],
          ["hers", "el suyo (de ella)"], ["ours", "el nuestro"], ["theirs", "el suyo (de ellos)"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Los pronombres posesivos reemplazan a "adjetivo posesivo + sustantivo".
    Se usan <strong>solos</strong>, sin sustantivo después.</p>
    <table>
      <tr><th>Adjetivo posesivo</th><th>Pronombre posesivo</th><th>Ejemplo</th></tr>
      <tr><td>my book</td><td>mine</td><td>This book is mine.</td></tr>
      <tr><td>your car</td><td>yours</td><td>Is this car yours?</td></tr>
      <tr><td>his phone</td><td>his</td><td>That phone is his.</td></tr>
      <tr><td>her bag</td><td>hers</td><td>This bag is hers.</td></tr>
      <tr><td>our house</td><td>ours</td><td>That house is ours.</td></tr>
      <tr><td>their dog</td><td>theirs</td><td>This dog is theirs.</td></tr>
    </table>
    <p>Comparación: <strong>This is my book</strong> (adjetivo + sustantivo) vs.
    <strong>This book is mine</strong> (pronombre, sin sustantivo después).</p>
    <p>Para preguntar de quién es algo se usa <strong>whose</strong>: <strong>Whose book is this?</strong>
    (¿De quién es este libro?)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige el pronombre posesivo correcto.",
      type: "mc",
      questions: [
        { prompt: "This book is ___. (mío)", options: ["my", "mine", "me"], correct: 1,
          explanation: "'Mine' se usa solo, sin sustantivo después." },
        { prompt: "Is this pen ___? (tuyo)", options: ["your", "yours", "you"], correct: 1,
          explanation: "'Yours' se usa solo, sin sustantivo después." },
        { prompt: "That car is ___. (de él)", options: ["his", "he", "him"], correct: 0,
          explanation: "'His' funciona igual como adjetivo y pronombre posesivo." },
        { prompt: "The red bag is ___. (de ella)", options: ["her", "hers", "she"], correct: 1,
          explanation: "'Hers' se usa solo, sin sustantivo después." },
        { prompt: "This house is ___. (nuestra)", options: ["our", "ours", "we"], correct: 1,
          explanation: "'Ours' se usa solo, sin sustantivo después." },
        { prompt: "___ book is this? (de quién)", options: ["Who", "Whose", "Which"], correct: 1,
          explanation: "'Whose' pregunta de quién es algo." },
        { prompt: "Those shoes are ___. (de ellos)", options: ["their", "theirs", "them"], correct: 1,
          explanation: "'Theirs' se usa solo, sin sustantivo después." },
        { prompt: "This is my pen and that one is ___. (tuyo)", options: ["your", "yours", "you"], correct: 1,
          explanation: "'Yours' reemplaza a 'your pen'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con el pronombre posesivo correcto.",
      type: "fill",
      questions: [
        { prompt: "This phone is ___. (mío)", correct: ["mine"], explanation: "'Mine' es el pronombre de 'my'." },
        { prompt: "Is that bag ___? (tuyo)", correct: ["yours"], explanation: "'Yours' es el pronombre de 'your'." },
        { prompt: "That car is ___. (de él)", correct: ["his"], explanation: "'His' funciona igual como adjetivo y pronombre." },
        { prompt: "This umbrella is ___. (de ella)", correct: ["hers"], explanation: "'Hers' es el pronombre de 'her'." },
        { prompt: "That house is ___. (nuestra)", correct: ["ours"], explanation: "'Ours' es el pronombre de 'our'." },
        { prompt: "___ keys are these? (de quién)", correct: ["whose"], explanation: "'Whose' pregunta de quién es algo." },
        { prompt: "These shoes are ___. (de ellos)", correct: ["theirs"], explanation: "'Theirs' es el pronombre de 'their'." },
        { prompt: "This seat is ___, not yours. (mío)", correct: ["mine"], explanation: "'Mine' es el pronombre de 'my'." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["This", "book", "is", "mine", "."], translation: "Este libro es mío.",
          explanation: "Orden: sujeto + verbo + pronombre posesivo." },
        { words: ["Is", "this", "pen", "yours", "?"], translation: "¿Es tuyo este bolígrafo?",
          explanation: "Pregunta con el pronombre posesivo al final." },
        { words: ["That", "car", "is", "his", "."], translation: "Ese carro es de él.",
          explanation: "Orden: sujeto + verbo + pronombre posesivo." },
        { words: ["Whose", "bag", "is", "this", "?"], translation: "¿De quién es esta bolsa?",
          explanation: "Whose al inicio de la pregunta." },
        { words: ["This", "house", "is", "ours", "."], translation: "Esta casa es nuestra.",
          explanation: "Orden: sujeto + verbo + pronombre posesivo." },
        { words: ["Those", "shoes", "are", "theirs", "."], translation: "Esos zapatos son de ellos.",
          explanation: "Orden: sujeto + verbo + pronombre posesivo." },
        { words: ["That", "umbrella", "is", "hers", "."], translation: "Ese paraguas es de ella.",
          explanation: "Orden: sujeto + verbo + pronombre posesivo." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada adjetivo posesivo con su pronombre correspondiente.",
      type: "match",
      questions: [
        { pairs: [
            ["my", "mine"], ["your", "yours"], ["his", "his"], ["her", "hers"],
            ["our", "ours"], ["their", "theirs"], ["whose", "de quién"],
          ],
          explanation: "Nota que 'his' es igual en ambas formas." }
      ]
    }
  ]
};
