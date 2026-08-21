window.EXERCISE_DATA = {
  title: "Can / Can't",
  translation: "Poder / no poder — habilidad y permiso",
  level: "Nivel 2 · Básico 1 (A1)",

  vocabulary: [
    { en: "swim", es: "nadar" },
    { en: "cook", es: "cocinar" },
    { en: "drive", es: "conducir" },
    { en: "sing", es: "cantar" },
    { en: "dance", es: "bailar" },
    { en: "speak", es: "hablar" },
    { en: "ability", es: "habilidad" },
    { en: "permission", es: "permiso" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["swim", "nadar"], ["cook", "cocinar"], ["drive", "conducir"],
          ["sing", "cantar"], ["dance", "bailar"], ["speak", "hablar"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p><strong>Can</strong> se usa para expresar <strong>habilidad</strong> (saber hacer algo)
    y <strong>permiso</strong>. Va seguido del verbo base, sin "to" y sin cambiar con el pronombre.</p>
    <table>
      <tr><th>Forma</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Afirmativa</td><td>I can swim.</td><td>Puedo nadar / Sé nadar.</td></tr>
      <tr><td>Negativa</td><td>She can't drive.</td><td>Ella no sabe/puede conducir.</td></tr>
      <tr><td>Pregunta</td><td>Can you cook?</td><td>¿Sabes/Puedes cocinar?</td></tr>
    </table>
    <p><strong>Can't</strong> es la contracción de "cannot" (una sola palabra).</p>
    <p>Ejemplos: <strong>Can I use your phone?</strong> (¿Puedo usar tu teléfono? — permiso) —
    <strong>He can speak three languages.</strong> (Él sabe hablar tres idiomas — habilidad)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "I ___ swim very well.", options: ["can", "cans", "canning"], correct: 0,
          explanation: "'Can' no cambia según el pronombre." },
        { prompt: "She ___ speak French.", options: ["cans", "can", "cant"], correct: 1,
          explanation: "'Can' se mantiene igual con 'she'." },
        { prompt: "He ___ drive a car.", options: ["can't", "cant", "not can"], correct: 0,
          explanation: "'Can't' es la contracción correcta de 'cannot'." },
        { prompt: "___ you help me, please?", options: ["Can", "Do", "Are"], correct: 0,
          explanation: "'Can' se usa para pedir favores/permiso." },
        { prompt: "They ___ sing very well.", options: ["can", "cans", "canning"], correct: 0,
          explanation: "'Can' no cambia según el pronombre." },
        { prompt: "I ___ not dance salsa.", options: ["can", "do", "am"], correct: 0,
          explanation: "'Cannot' (can not) es la forma negativa." },
        { prompt: "___ I open the window?", options: ["Can", "Do", "Am"], correct: 0,
          explanation: "'Can' se usa para pedir permiso." },
        { prompt: "We ___ cook Italian food.", options: ["can", "cans", "canned"], correct: 0,
          explanation: "'Can' + verbo base." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con can o can't.",
      type: "fill",
      questions: [
        { prompt: "I ___ swim very well.", correct: ["can"], explanation: "'Can' expresa habilidad." },
        { prompt: "She ___ (not) speak German.", correct: ["can't"], explanation: "'Can't' es la negación de 'can'." },
        { prompt: "___ you help me with this?", correct: ["can"], explanation: "'Can' se usa para pedir ayuda." },
        { prompt: "He ___ play the guitar.", correct: ["can"], explanation: "'Can' expresa habilidad." },
        { prompt: "We ___ (not) go to the party.", correct: ["can't"], explanation: "'Can't' expresa imposibilidad/prohibición." },
        { prompt: "___ I sit here, please?", correct: ["can"], explanation: "'Can' se usa para pedir permiso." },
        { prompt: "They ___ (not) understand Spanish.", correct: ["can't"], explanation: "'Can't' es la negación de 'can'." },
        { prompt: "My sister ___ cook very well.", correct: ["can"], explanation: "'Can' expresa habilidad." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "can", "swim", "very", "well", "."], translation: "Sé nadar muy bien.",
          explanation: "Orden: sujeto + can + verbo base + complemento." },
        { words: ["She", "can't", "drive", "a", "car", "."], translation: "Ella no sabe conducir un carro.",
          explanation: "Orden: sujeto + can't + verbo base + objeto." },
        { words: ["Can", "you", "help", "me", "?"], translation: "¿Puedes ayudarme?",
          explanation: "Pregunta: Can + sujeto + verbo base." },
        { words: ["He", "can", "speak", "three", "languages", "."], translation: "Él sabe hablar tres idiomas.",
          explanation: "Orden: sujeto + can + verbo base + objeto." },
        { words: ["We", "can't", "go", "to", "the", "party", "."], translation: "No podemos ir a la fiesta.",
          explanation: "Orden: sujeto + can't + verbo base + lugar." },
        { words: ["Can", "I", "use", "your", "phone", "?"], translation: "¿Puedo usar tu teléfono?",
          explanation: "Pregunta para pedir permiso." },
        { words: ["They", "can", "dance", "very", "well", "."], translation: "Ellos saben bailar muy bien.",
          explanation: "Orden: sujeto + can + verbo base + complemento." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["I can swim", "Sé nadar"], ["She can't drive", "Ella no sabe conducir"],
            ["Can you help me?", "¿Puedes ayudarme?"], ["He can sing", "Él sabe cantar"],
            ["Can I sit here?", "¿Puedo sentarme aquí?"], ["We can't go", "No podemos ir"], ["an ability", "una habilidad"],
          ],
          explanation: "'Can' expresa habilidad y también se usa para pedir permiso." }
      ]
    }
  ]
};
