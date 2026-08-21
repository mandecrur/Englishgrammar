window.EXERCISE_DATA = {
  title: "Comparative Adjectives (-er / more)",
  translation: "Adjetivos comparativos",
  level: "Nivel 2 · Básico 1 (A1)",

  vocabulary: [
    { en: "than", es: "que (comparación)" },
    { en: "taller", es: "más alto" },
    { en: "shorter", es: "más bajo/corto" },
    { en: "cheaper", es: "más barato" },
    { en: "expensive", es: "caro" },
    { en: "better", es: "mejor" },
    { en: "worse", es: "peor" },
    { en: "as...as", es: "tan...como" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["than", "que (comparación)"], ["taller", "más alto"], ["cheaper", "más barato"],
          ["expensive", "caro"], ["better", "mejor"], ["worse", "peor"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Los comparativos se usan para comparar dos cosas. La forma depende de la longitud del adjetivo.</p>
    <table>
      <tr><th>Tipo de adjetivo</th><th>Regla</th><th>Ejemplo</th></tr>
      <tr><td>Corto (1 sílaba)</td><td>+er</td><td>tall → taller</td></tr>
      <tr><td>Termina en -e</td><td>+r</td><td>large → larger</td></tr>
      <tr><td>Consonante+vocal+consonante</td><td>duplica + er</td><td>big → bigger</td></tr>
      <tr><td>Termina en consonante+y</td><td>y → ier</td><td>happy → happier</td></tr>
      <tr><td>Largo (2+ sílabas)</td><td>more + adjetivo</td><td>expensive → more expensive</td></tr>
    </table>
    <p>Se usa la estructura: <strong>adjetivo comparativo + than</strong>.<br>
    <strong>She is taller than me.</strong> (Ella es más alta que yo.)<br>
    <strong>This car is more expensive than that one.</strong> (Este carro es más caro que ese.)</p>
    <p>Comparativos irregulares: <strong>good → better</strong> (bueno → mejor),
    <strong>bad → worse</strong> (malo → peor).</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma comparativa correcta.",
      type: "mc",
      questions: [
        { prompt: "She is ___ than me. (tall)", options: ["taller", "more tall", "tallest"], correct: 0,
          explanation: "'Tall' es corto, se añade '-er'." },
        { prompt: "This book is ___ than that one. (interesting)", options: ["interestinger", "more interesting", "interestingest"], correct: 1,
          explanation: "'Interesting' es largo, se usa 'more'." },
        { prompt: "My car is ___ than yours. (big)", options: ["bigger", "more big", "biggest"], correct: 0,
          explanation: "'Big' duplica la consonante: bigger." },
        { prompt: "This test was ___ than the last one. (difficult)", options: ["difficulter", "more difficult", "difficultest"], correct: 1,
          explanation: "'Difficult' es largo, se usa 'more'." },
        { prompt: "He is ___ than his brother. (happy)", options: ["happyer", "happier", "more happy"], correct: 1,
          explanation: "'Happy' cambia y→ier: happier." },
        { prompt: "This coffee is ___ than that one. (good)", options: ["gooder", "better", "more good"], correct: 1,
          explanation: "'Good' es irregular: better." },
        { prompt: "My phone is ___ than yours. (cheap)", options: ["cheaper", "more cheap", "cheapest"], correct: 0,
          explanation: "'Cheap' es corto, se añade '-er'." },
        { prompt: "This movie is ___ than the book. (bad)", options: ["badder", "worse", "more bad"], correct: 1,
          explanation: "'Bad' es irregular: worse." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Escribe la forma comparativa correcta.",
      type: "fill",
      questions: [
        { prompt: "She is ___ (tall) than her sister.", correct: ["taller"], explanation: "'Tall' es corto: +er." },
        { prompt: "This house is ___ (big) than mine.", correct: ["bigger"], explanation: "'Big' duplica consonante: bigger." },
        { prompt: "That car is ___ (expensive) than this one.", correct: ["more expensive"], explanation: "'Expensive' es largo: more + adjetivo." },
        { prompt: "He is ___ (good) at math than me.", correct: ["better"], explanation: "'Good' es irregular: better." },
        { prompt: "This exercise is ___ (easy) than the last one.", correct: ["easier"], explanation: "'Easy' cambia y→ier." },
        { prompt: "My English is ___ (bad) than yours.", correct: ["worse"], explanation: "'Bad' es irregular: worse." },
        { prompt: "This bag is ___ (cheap) than that one.", correct: ["cheaper"], explanation: "'Cheap' es corto: +er." },
        { prompt: "She is ___ (beautiful) than a model.", correct: ["more beautiful"], explanation: "'Beautiful' es largo: more + adjetivo." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["She", "is", "taller", "than", "me", "."], translation: "Ella es más alta que yo.",
          explanation: "Orden: sujeto + is + comparativo + than + complemento." },
        { words: ["This", "car", "is", "more", "expensive", "than", "that", "one", "."], translation: "Este carro es más caro que ese.",
          explanation: "Orden: sujeto + is + more + adjetivo + than + complemento." },
        { words: ["My", "phone", "is", "better", "than", "yours", "."], translation: "Mi teléfono es mejor que el tuyo.",
          explanation: "'Better' es el comparativo irregular de 'good'." },
        { words: ["This", "test", "was", "easier", "than", "expected", "."], translation: "Este examen fue más fácil de lo esperado.",
          explanation: "Orden: sujeto + was + comparativo + than + complemento." },
        { words: ["He", "is", "smarter", "than", "his", "brother", "."], translation: "Él es más inteligente que su hermano.",
          explanation: "Orden: sujeto + is + comparativo + than + complemento." },
        { words: ["This", "bag", "is", "cheaper", "than", "that", "one", "."], translation: "Esta bolsa es más barata que esa.",
          explanation: "'Cheap' es corto, se añade -er." },
        { words: ["The", "weather", "is", "worse", "today", "."], translation: "El clima está peor hoy.",
          explanation: "'Worse' es el comparativo irregular de 'bad'." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada adjetivo con su forma comparativa.",
      type: "match",
      questions: [
        { pairs: [
            ["tall", "taller"], ["big", "bigger"], ["happy", "happier"], ["expensive", "more expensive"],
            ["good", "better"], ["bad", "worse"], ["cheap", "cheaper"],
          ],
          explanation: "Practica los patrones regulares e irregulares de comparativos." }
      ]
    }
  ]
};
