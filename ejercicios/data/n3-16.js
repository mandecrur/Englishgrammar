window.EXERCISE_DATA = {
  title: "Nouns as Adjectives",
  translation: "Sustantivos usados como adjetivos",
  level: "Nivel 3 · Básico 2 (A2)",

  vocabulary: [
    { en: "chocolate cake", es: "pastel de chocolate" },
    { en: "coffee cup", es: "taza de café" },
    { en: "bus stop", es: "parada de bus" },
    { en: "book store", es: "librería" },
    { en: "phone number", es: "número de teléfono" },
    { en: "school bag", es: "mochila escolar" },
    { en: "water bottle", es: "botella de agua" },
    { en: "birthday party", es: "fiesta de cumpleaños" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra compuesta en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["chocolate cake", "pastel de chocolate"], ["coffee cup", "taza de café"], ["bus stop", "parada de bus"],
          ["book store", "librería"], ["phone number", "número de teléfono"], ["water bottle", "botella de agua"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>En inglés, un sustantivo puede funcionar como <strong>adjetivo</strong> cuando va antes de otro
    sustantivo, describiéndolo. Este primer sustantivo se mantiene <strong>siempre en singular</strong>.</p>
    <table>
      <tr><th>Inglés</th><th>Traducción</th></tr>
      <tr><td>a chocolate cake</td><td>un pastel de chocolate</td></tr>
      <tr><td>a coffee cup</td><td>una taza de café (para café)</td></tr>
      <tr><td>a bus stop</td><td>una parada de bus</td></tr>
      <tr><td>a phone number</td><td>un número de teléfono</td></tr>
    </table>
    <p>Nota importante: aunque el significado sea plural, el sustantivo-adjetivo NO lleva "-s":
    <strong>a five-year-old boy</strong> (un niño de cinco años — no "five-years-old"),
    <strong>a two-hour movie</strong> (una película de dos horas — no "two-hours").</p>
    <p>Diferencia con posesivo: <strong>a coffee cup</strong> (una taza para café, tipo de taza) vs.
    <strong>my coffee's cup</strong> no existe así — se diría de otra forma.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la combinación correcta.",
      type: "mc",
      questions: [
        { prompt: "I bought a ___ cake. (de chocolate)", options: ["chocolate", "chocolates"], correct: 0,
          explanation: "El sustantivo-adjetivo se mantiene en singular." },
        { prompt: "She works at a ___ store. (de libros)", options: ["book", "books"], correct: 0,
          explanation: "El sustantivo-adjetivo se mantiene en singular." },
        { prompt: "He is a ___ boy. (de cinco años)", options: ["five-year-old", "five-years-old"], correct: 0,
          explanation: "No se añade '-s' al sustantivo-adjetivo, aunque el número sea mayor a uno." },
        { prompt: "This is a ___ number. (de teléfono)", options: ["phone", "phones"], correct: 0,
          explanation: "'Phone' se mantiene singular como adjetivo." },
        { prompt: "We waited at the ___ stop. (de bus)", options: ["bus", "buses"], correct: 0,
          explanation: "'Bus' se mantiene singular como adjetivo." },
        { prompt: "It was a ___ movie. (de dos horas)", options: ["two-hour", "two-hours"], correct: 0,
          explanation: "No se añade '-s', aunque el número sea mayor a uno." },
        { prompt: "I need a ___ bottle. (de agua)", options: ["water", "waters"], correct: 0,
          explanation: "'Water' se mantiene singular como adjetivo." },
        { prompt: "This is a ___ party. (de cumpleaños)", options: ["birthday", "birthdays"], correct: 0,
          explanation: "'Birthday' se mantiene singular como adjetivo." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con el sustantivo-adjetivo correcto (singular).",
      type: "fill",
      questions: [
        { prompt: "I love ___ (chocolate) cake.", correct: ["chocolate"], explanation: "Se mantiene en singular." },
        { prompt: "She has a ___ (book) store.", correct: ["book"], explanation: "Se mantiene en singular." },
        { prompt: "It's a ___ (three) hour flight.", correct: ["three"], explanation: "Sin '-s' aunque sea plural en significado." },
        { prompt: "He gave me his ___ (phone) number.", correct: ["phone"], explanation: "Se mantiene en singular." },
        { prompt: "We met at the ___ (bus) stop.", correct: ["bus"], explanation: "Se mantiene en singular." },
        { prompt: "She is a ten ___ (year) old girl.", correct: ["year"], explanation: "Sin '-s', se usa singular." },
        { prompt: "I bought a ___ (water) bottle.", correct: ["water"], explanation: "Se mantiene en singular." },
        { prompt: "It's my ___ (birthday) party.", correct: ["birthday"], explanation: "Se mantiene en singular." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "love", "chocolate", "cake", "."], translation: "Me encanta el pastel de chocolate.",
          explanation: "'Chocolate' funciona como adjetivo antes de 'cake'." },
        { words: ["She", "works", "at", "a", "book", "store", "."], translation: "Ella trabaja en una librería.",
          explanation: "'Book' funciona como adjetivo antes de 'store'." },
        { words: ["He", "is", "a", "five-year-old", "boy", "."], translation: "Él es un niño de cinco años.",
          explanation: "Sin '-s' en el sustantivo-adjetivo compuesto." },
        { words: ["Can", "I", "have", "your", "phone", "number", "?"], translation: "¿Puedo tener tu número de teléfono?",
          explanation: "'Phone' funciona como adjetivo antes de 'number'." },
        { words: ["We", "waited", "at", "the", "bus", "stop", "."], translation: "Esperamos en la parada de bus.",
          explanation: "'Bus' funciona como adjetivo antes de 'stop'." },
        { words: ["It", "was", "a", "two-hour", "movie", "."], translation: "Fue una película de dos horas.",
          explanation: "Sin '-s' en 'two-hour', aunque sean dos horas." },
        { words: ["I", "need", "a", "water", "bottle", "."], translation: "Necesito una botella de agua.",
          explanation: "'Water' funciona como adjetivo antes de 'bottle'." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada palabra compuesta con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["chocolate cake", "pastel de chocolate"], ["bus stop", "parada de bus"],
            ["phone number", "número de teléfono"], ["book store", "librería"],
            ["water bottle", "botella de agua"], ["coffee cup", "taza de café"], ["birthday party", "fiesta de cumpleaños"],
          ],
          explanation: "El primer sustantivo describe al segundo, como si fuera un adjetivo." }
      ]
    }
  ]
};
