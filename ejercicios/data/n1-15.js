window.EXERCISE_DATA = {
  title: "There is / There are (basic)",
  translation: "Expresar existencia: 'hay'",
  level: "Nivel 1 · Beginners",

  vocabulary: [
    { en: "park", es: "parque" },
    { en: "problem", es: "problema" },
    { en: "many", es: "muchos (contable)" },
    { en: "a lot of", es: "mucho / muchos" },
    { en: "few", es: "pocos" },
    { en: "garden", es: "jardín" },
    { en: "restaurant", es: "restaurante" },
    { en: "supermarket", es: "supermercado" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["park", "parque"], ["problem", "problema"], ["garden", "jardín"],
          ["restaurant", "restaurante"], ["supermarket", "supermercado"], ["few", "pocos"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p><strong>There is</strong> se usa con sustantivos singulares o incontables.<br>
    <strong>There are</strong> se usa con sustantivos plurales.</p>
    <table>
      <tr><th>Forma</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Afirmativa (singular)</td><td>There is a book on the table.</td><td>Hay un libro sobre la mesa.</td></tr>
      <tr><td>Afirmativa (plural)</td><td>There are three books on the table.</td><td>Hay tres libros sobre la mesa.</td></tr>
      <tr><td>Negativa</td><td>There isn't a park near here.</td><td>No hay un parque cerca de aquí.</td></tr>
      <tr><td>Pregunta</td><td>Is there a supermarket nearby?</td><td>¿Hay un supermercado cerca?</td></tr>
    </table>
    <p>Se pueden usar palabras de cantidad junto con "there is/are", como <strong>many</strong> (muchos),
    <strong>a lot of</strong> (mucho/muchos), o <strong>few</strong> (pocos).</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "___ a cat in the garden.", options: ["There is", "There are", "There am"], correct: 0,
          explanation: "'Cat' es singular, así que se usa 'There is'." },
        { prompt: "___ many students in the class.", options: ["There is", "There are", "There be"], correct: 1,
          explanation: "'Students' es plural, así que se usa 'There are'." },
        { prompt: "___ a problem with the printer.", options: ["There is", "There are", "There am"], correct: 0,
          explanation: "'Problem' es singular, así que se usa 'There is'." },
        { prompt: "___ any restaurants near here?", options: ["Is there", "Are there", "Do there"], correct: 1,
          explanation: "Con 'restaurants' (plural) en preguntas se usa 'Are there'." },
        { prompt: "___ a supermarket on this street.", options: ["There isn't", "There aren't", "There am not"], correct: 0,
          explanation: "'Supermarket' es singular, la negación es 'There isn't'." },
        { prompt: "___ a lot of trees in the park.", options: ["There is", "There are", "There be"], correct: 1,
          explanation: "'Trees' es plural, así que se usa 'There are'." },
        { prompt: "___ any milk in the fridge?", options: ["Is there", "Are there", "Do there"], correct: 0,
          explanation: "'Milk' es incontable (se trata como singular), se usa 'Is there'." },
        { prompt: "___ two parks in this city.", options: ["There is", "There are", "There am"], correct: 1,
          explanation: "'Parks' es plural, así que se usa 'There are'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con there is o there are.",
      type: "fill",
      questions: [
        { prompt: "___ a problem here.", correct: ["there is"], explanation: "Con sustantivo singular se usa 'there is'." },
        { prompt: "___ two chairs in the room.", correct: ["there are"], explanation: "Con sustantivo plural se usa 'there are'." },
        { prompt: "___ a park near my house.", correct: ["there is"], explanation: "Con sustantivo singular se usa 'there is'." },
        { prompt: "___ many people at the party.", correct: ["there are"], explanation: "Con sustantivo plural se usa 'there are'." },
        { prompt: "___ a restaurant on this corner.", correct: ["there is"], explanation: "Con sustantivo singular se usa 'there is'." },
        { prompt: "___ five apples in the basket.", correct: ["there are"], explanation: "Con sustantivo plural se usa 'there are'." },
        { prompt: "___ a lot of traffic today.", correct: ["there is"], explanation: "'Traffic' es incontable, se usa 'there is'." },
        { prompt: "___ few students in class today.", correct: ["there are"], explanation: "Con sustantivo plural se usa 'there are'." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["There", "is", "a", "book", "on", "the", "table", "."], translation: "Hay un libro sobre la mesa.",
          explanation: "'There is' + sustantivo singular + lugar." },
        { words: ["There", "are", "many", "students", "here", "."], translation: "Hay muchos estudiantes aquí.",
          explanation: "'There are' + cantidad + sustantivo plural." },
        { words: ["Is", "there", "a", "park", "near", "here", "?"], translation: "¿Hay un parque cerca de aquí?",
          explanation: "Pregunta: 'Is there' + sustantivo singular." },
        { words: ["There", "isn't", "any", "milk", "."], translation: "No hay leche.",
          explanation: "Negación: 'There isn't' con sustantivo incontable." },
        { words: ["Are", "there", "any", "restaurants", "nearby", "?"], translation: "¿Hay restaurantes cerca?",
          explanation: "Pregunta: 'Are there' + sustantivo plural." },
        { words: ["There", "are", "a", "lot", "of", "trees", "."], translation: "Hay muchos árboles.",
          explanation: "'There are' + expresión de cantidad + sustantivo plural." },
        { words: ["There", "is", "no", "problem", "."], translation: "No hay ningún problema.",
          explanation: "'There is no' es otra forma de negar (sin 'not')." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada expresión con su significado.",
      type: "match",
      questions: [
        { pairs: [
            ["There is", "Hay (singular)"], ["There are", "Hay (plural)"],
            ["Is there...?", "¿Hay...? (singular)"], ["Are there...?", "¿Hay...? (plural)"],
            ["There isn't", "No hay (singular)"], ["There aren't", "No hay (plural)"], ["a lot of", "mucho / muchos"],
          ],
          explanation: "There is/are cambian según el número del sustantivo que sigue." }
      ]
    }
  ]
};
