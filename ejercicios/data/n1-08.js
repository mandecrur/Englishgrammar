window.EXERCISE_DATA = {
  title: "Prepositions of Place (in, on, under, next to)",
  translation: "Preposiciones de lugar",
  level: "Nivel 1 · Beginners",

  vocabulary: [
    { en: "table", es: "mesa" },
    { en: "chair", es: "silla" },
    { en: "bag", es: "bolsa / mochila" },
    { en: "bed", es: "cama" },
    { en: "fridge", es: "refrigerador" },
    { en: "door", es: "puerta" },
    { en: "wall", es: "pared" },
    { en: "floor", es: "piso / suelo" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["table", "mesa"], ["chair", "silla"], ["bag", "bolsa / mochila"],
          ["bed", "cama"], ["fridge", "refrigerador"], ["door", "puerta"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <table>
      <tr><th>Preposición</th><th>Significado</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td><strong>in</strong></td><td>dentro de (algo cerrado)</td><td>The book is in the bag.</td><td>El libro está dentro de la mochila.</td></tr>
      <tr><td><strong>on</strong></td><td>sobre/encima (con contacto)</td><td>The book is on the table.</td><td>El libro está sobre la mesa.</td></tr>
      <tr><td><strong>under</strong></td><td>debajo de</td><td>The cat is under the chair.</td><td>El gato está debajo de la silla.</td></tr>
      <tr><td><strong>next to</strong></td><td>al lado de</td><td>She is next to the door.</td><td>Ella está al lado de la puerta.</td></tr>
      <tr><td><strong>between</strong></td><td>entre (dos cosas)</td><td>It's between the two houses.</td><td>Está entre las dos casas.</td></tr>
      <tr><td><strong>behind</strong></td><td>detrás de</td><td>The dog is behind the sofa.</td><td>El perro está detrás del sofá.</td></tr>
    </table>
    <p>Truco para recordar: usa <strong>in</strong> para espacios cerrados (una caja, una mochila),
    <strong>on</strong> cuando hay contacto directo con una superficie, y <strong>under</strong> para algo debajo.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la preposición correcta.",
      type: "mc",
      questions: [
        { prompt: "The keys are ___ the table.", options: ["on", "in", "under"], correct: 0,
          explanation: "'On' se usa cuando hay contacto con una superficie." },
        { prompt: "The dog is ___ the bed.", options: ["on", "under", "next to"], correct: 1,
          explanation: "'Under' significa 'debajo de'." },
        { prompt: "The milk is ___ the fridge.", options: ["in", "on", "under"], correct: 0,
          explanation: "'In' se usa para lugares cerrados, como dentro del refrigerador." },
        { prompt: "The chair is ___ the desk.", options: ["under", "next to", "in"], correct: 1,
          explanation: "'Next to' significa 'al lado de'." },
        { prompt: "The picture is ___ the wall.", options: ["on", "in", "under"], correct: 0,
          explanation: "'On the wall' es la expresión correcta para algo colgado en la pared." },
        { prompt: "The cat is ___ the sofa. (detrás)", options: ["behind", "on", "in"], correct: 0,
          explanation: "'Behind' significa 'detrás de'." },
        { prompt: "There is a lamp ___ the two beds.", options: ["between", "on", "under"], correct: 0,
          explanation: "'Between' se usa cuando algo está en medio de dos cosas." },
        { prompt: "The shoes are ___ the floor.", options: ["on", "under", "next to"], correct: 0,
          explanation: "'On the floor' significa 'en el piso'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa cada oración con la preposición correcta.",
      type: "fill",
      questions: [
        { prompt: "The book is ___ the table. (sobre)", correct: ["on"], explanation: "'On' indica contacto con la superficie." },
        { prompt: "The cat is ___ the box. (dentro de)", correct: ["in"], explanation: "'In' se usa para espacios cerrados." },
        { prompt: "The shoes are ___ the bed. (debajo de)", correct: ["under"], explanation: "'Under' significa 'debajo de'." },
        { prompt: "She sits ___ me. (al lado de)", correct: ["next to"], explanation: "'Next to' significa 'al lado de'." },
        { prompt: "The dog is ___ the door. (detrás de)", correct: ["behind"], explanation: "'Behind' significa 'detrás de'." },
        { prompt: "The lamp is ___ the two chairs. (entre)", correct: ["between"], explanation: "'Between' se usa entre dos cosas." },
        { prompt: "My phone is ___ my bag. (dentro de)", correct: ["in"], explanation: "'In' se usa para espacios cerrados." },
        { prompt: "The clock is ___ the wall. (en/sobre)", correct: ["on"], explanation: "'On the wall' es la expresión correcta." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["The", "book", "is", "on", "the", "table", "."], translation: "El libro está sobre la mesa.",
          explanation: "Orden: sujeto + verbo + preposición + lugar." },
        { words: ["The", "cat", "is", "under", "the", "chair", "."], translation: "El gato está debajo de la silla.",
          explanation: "Orden: sujeto + verbo + preposición + lugar." },
        { words: ["Is", "the", "dog", "in", "the", "garden", "?"], translation: "¿Está el perro en el jardín?",
          explanation: "Pregunta con el verbo 'is' antes del sujeto." },
        { words: ["My", "bag", "is", "next", "to", "the", "door", "."], translation: "Mi mochila está al lado de la puerta.",
          explanation: "'Next to' funciona como una sola preposición compuesta." },
        { words: ["The", "keys", "are", "not", "on", "the", "table", "."], translation: "Las llaves no están sobre la mesa.",
          explanation: "Negación con 'not' después de 'are'." },
        { words: ["There", "is", "a", "lamp", "between", "the", "beds", "."], translation: "Hay una lámpara entre las camas.",
          explanation: "'There is' para expresar existencia en singular." },
        { words: ["The", "picture", "is", "on", "the", "wall", "."], translation: "El cuadro está en la pared.",
          explanation: "Orden simple: sujeto + verbo + preposición + lugar." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada preposición con su significado.",
      type: "match",
      questions: [
        { pairs: [
            ["in", "dentro de"], ["on", "sobre"], ["under", "debajo de"], ["between", "entre"],
            ["behind", "detrás de"], ["next to", "al lado de"], ["in front of", "en frente de"],
          ],
          explanation: "Preposiciones de lugar más comunes en inglés." }
      ]
    }
  ]
};
