window.EXERCISE_DATA = {
  title: "Superlative Adjectives (-est / most)",
  translation: "Adjetivos superlativos",
  level: "Nivel 2 · Básico 1 (A1)",

  vocabulary: [
    { en: "the tallest", es: "el más alto" },
    { en: "the biggest", es: "el más grande" },
    { en: "the smallest", es: "el más pequeño" },
    { en: "the most beautiful", es: "el más hermoso" },
    { en: "the best", es: "el mejor" },
    { en: "the worst", es: "el peor" },
    { en: "in the world", es: "en el mundo" },
    { en: "of all", es: "de todos" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["the tallest", "el más alto"], ["the biggest", "el más grande"], ["the smallest", "el más pequeño"],
          ["the best", "el mejor"], ["the worst", "el peor"], ["in the world", "en el mundo"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Los superlativos comparan una cosa con <strong>todas las demás</strong> de un grupo.
    Siempre llevan <strong>the</strong> antes.</p>
    <table>
      <tr><th>Tipo de adjetivo</th><th>Regla</th><th>Ejemplo</th></tr>
      <tr><td>Corto (1 sílaba)</td><td>the + adj + est</td><td>tall → the tallest</td></tr>
      <tr><td>Termina en -e</td><td>the + adj + st</td><td>large → the largest</td></tr>
      <tr><td>Consonante+vocal+consonante</td><td>duplica + est</td><td>big → the biggest</td></tr>
      <tr><td>Termina en consonante+y</td><td>y → iest</td><td>happy → the happiest</td></tr>
      <tr><td>Largo (2+ sílabas)</td><td>the most + adjetivo</td><td>expensive → the most expensive</td></tr>
    </table>
    <p>Ejemplo: <strong>Everest is the tallest mountain in the world.</strong>
    (El Everest es la montaña más alta del mundo.)</p>
    <p>Superlativos irregulares: <strong>good → the best</strong> (el mejor),
    <strong>bad → the worst</strong> (el peor).</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma superlativa correcta.",
      type: "mc",
      questions: [
        { prompt: "Everest is ___ mountain. (tall)", options: ["the taller", "the tallest", "tallest"], correct: 1,
          explanation: "Superlativo: the + adjetivo + est." },
        { prompt: "This is ___ car in the shop. (expensive)", options: ["the more expensive", "the most expensive", "expensiver"], correct: 1,
          explanation: "'Expensive' es largo: the most + adjetivo." },
        { prompt: "She is ___ student in class. (smart)", options: ["the smartest", "the smarter", "smartest"], correct: 0,
          explanation: "Superlativo: the + adjetivo + est." },
        { prompt: "This is ___ day of my life. (good)", options: ["the goodest", "the best", "gooder"], correct: 1,
          explanation: "'Good' es irregular: the best." },
        { prompt: "That was ___ movie I've seen. (bad)", options: ["the baddest", "the worst", "badder"], correct: 1,
          explanation: "'Bad' es irregular: the worst." },
        { prompt: "This is ___ city in the country. (big)", options: ["the biggest", "the bigger", "biggest"], correct: 0,
          explanation: "'Big' duplica consonante: the biggest." },
        { prompt: "She is ___ person I know. (happy)", options: ["the happiest", "the happier", "happiest"], correct: 0,
          explanation: "'Happy' cambia y→iest: the happiest." },
        { prompt: "This is ___ beach in the country. (beautiful)", options: ["the more beautiful", "the most beautiful", "beautifulest"], correct: 1,
          explanation: "'Beautiful' es largo: the most + adjetivo." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Escribe la forma superlativa correcta.",
      type: "fill",
      questions: [
        { prompt: "Everest is ___ (tall) mountain in the world.", correct: ["the tallest"], explanation: "the + adjetivo + est." },
        { prompt: "This is ___ (expensive) restaurant in town.", correct: ["the most expensive"], explanation: "the most + adjetivo largo." },
        { prompt: "He is ___ (good) player on the team.", correct: ["the best"], explanation: "'Good' irregular: the best." },
        { prompt: "This is ___ (bad) movie ever.", correct: ["the worst"], explanation: "'Bad' irregular: the worst." },
        { prompt: "She is ___ (smart) student in class.", correct: ["the smartest"], explanation: "the + adjetivo + est." },
        { prompt: "This is ___ (big) city I've visited.", correct: ["the biggest"], explanation: "'Big' duplica consonante." },
        { prompt: "That is ___ (small) puppy in the litter.", correct: ["the smallest"], explanation: "the + adjetivo + est." },
        { prompt: "This is ___ (interesting) book I've read.", correct: ["the most interesting"], explanation: "the most + adjetivo largo." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["Everest", "is", "the", "tallest", "mountain", "."], translation: "El Everest es la montaña más alta.",
          explanation: "Orden: sujeto + is + the + superlativo + sustantivo." },
        { words: ["This", "is", "the", "most", "expensive", "car", "."], translation: "Este es el carro más caro.",
          explanation: "Orden: sujeto + is + the most + adjetivo + sustantivo." },
        { words: ["He", "is", "the", "best", "player", "here", "."], translation: "Él es el mejor jugador aquí.",
          explanation: "'The best' es el superlativo irregular de 'good'." },
        { words: ["This", "is", "the", "worst", "day", "ever", "."], translation: "Este es el peor día de todos.",
          explanation: "'The worst' es el superlativo irregular de 'bad'." },
        { words: ["She", "is", "the", "smartest", "person", "I", "know", "."], translation: "Ella es la persona más inteligente que conozco.",
          explanation: "Orden: sujeto + is + the + superlativo + sustantivo." },
        { words: ["This", "is", "the", "biggest", "city", "in", "Peru", "."], translation: "Esta es la ciudad más grande de Perú.",
          explanation: "Orden: sujeto + is + the + superlativo + sustantivo + lugar." },
        { words: ["That", "was", "the", "most", "beautiful", "sunset", "."], translation: "Ese fue el atardecer más hermoso.",
          explanation: "Orden: sujeto + was + the most + adjetivo + sustantivo." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada adjetivo con su forma superlativa.",
      type: "match",
      questions: [
        { pairs: [
            ["tall", "the tallest"], ["big", "the biggest"], ["happy", "the happiest"],
            ["expensive", "the most expensive"], ["good", "the best"], ["bad", "the worst"], ["small", "the smallest"],
          ],
          explanation: "Practica los patrones regulares e irregulares de superlativos." }
      ]
    }
  ]
};
