window.EXERCISE_DATA = {
  title: "Ellipsis and Substitution",
  translation: "Elipsis y sustitución — evitar repetición",
  level: "Nivel 6 · Avanzado (C1)",

  vocabulary: [
    { en: "so do I", es: "yo también (afirmativo)" },
    { en: "neither do I", es: "yo tampoco" },
    { en: "one / ones", es: "uno / unos (sustituto)" },
    { en: "avoid repetition", es: "evitar repetición" },
    { en: "concise", es: "conciso" },
    { en: "omit", es: "omitir" },
    { en: "replace", es: "reemplazar" },
    { en: "redundant", es: "redundante" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["so do I", "yo también"], ["neither do I", "yo tampoco"], ["avoid repetition", "evitar repetición"],
          ["concise", "conciso"], ["omit", "omitir"], ["replace", "reemplazar"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>La elipsis omite palabras ya mencionadas para evitar repetición; la sustitución las
    reemplaza con una palabra más corta.</p>
    <table>
      <tr><th>Estructura</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>so + auxiliar + sujeto (acuerdo positivo)</td><td>I like coffee. So do I.</td><td>Me gusta el café. A mí también.</td></tr>
      <tr><td>neither + auxiliar + sujeto (acuerdo negativo)</td><td>I don't like tea. Neither do I.</td><td>No me gusta el té. A mí tampoco.</td></tr>
      <tr><td>one/ones (sustituye sustantivo)</td><td>I need a pen. Do you have one?</td><td>Necesito un lápiz. ¿Tienes uno?</td></tr>
    </table>
    <p>El auxiliar en "so/neither" concuerda con el tiempo verbal de la primera oración:
    <strong>She can swim. So can I.</strong> (Ella sabe nadar. Yo también.)</p>
    <p><strong>One/ones</strong> reemplaza un sustantivo ya mencionado para no repetirlo:
    <strong>I don't like this shirt. I prefer the blue one.</strong>
    (No me gusta esta camisa. Prefiero la azul.)</p>
    <p>La elipsis también ocurre al omitir partes repetidas de una respuesta corta:
    <strong>Who wants coffee? — I do.</strong> (en vez de "I want coffee").</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "I like coffee. ___ do I. (yo también)", options: ["So", "Neither"], correct: 0,
          explanation: "'So' se usa para acuerdo positivo." },
        { prompt: "I don't like tea. ___ do I. (yo tampoco)", options: ["So", "Neither"], correct: 1,
          explanation: "'Neither' se usa para acuerdo negativo." },
        { prompt: "She can swim. So ___ I.", options: ["can", "do"], correct: 0,
          explanation: "El auxiliar concuerda con el original: 'can'." },
        { prompt: "I need a pen. Do you have ___? (sustituto)", options: ["one", "it"], correct: 0,
          explanation: "'One' sustituye a un sustantivo no específico." },
        { prompt: "He works hard. ___ does she.", options: ["So", "Neither"], correct: 0,
          explanation: "'So' se usa para acuerdo positivo." },
        { prompt: "I haven't finished. ___ has he.", options: ["So", "Neither"], correct: 1,
          explanation: "'Neither' se usa para acuerdo negativo." },
        { prompt: "I don't like this shirt. I prefer the blue ___. (sustituto)", options: ["one", "it"], correct: 0,
          explanation: "'One' sustituye a 'shirt'." },
        { prompt: "Who wants coffee? — I ___.", options: ["do", "want"], correct: 0,
          explanation: "Se omite la repetición, dejando solo el auxiliar." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con so, neither, o one/ones.",
      type: "fill",
      questions: [
        { prompt: "I love pizza. ___ do I.", correct: ["so"], explanation: "'So' para acuerdo positivo." },
        { prompt: "I can't drive. ___ can he.", correct: ["neither"], explanation: "'Neither' para acuerdo negativo." },
        { prompt: "I need new shoes. Do you have any ___?", correct: ["ones"], explanation: "'Ones' sustituye 'shoes' (plural)." },
        { prompt: "She is tired. ___ am I.", correct: ["so"], explanation: "'So' para acuerdo positivo." },
        { prompt: "He hasn't called. ___ has she.", correct: ["neither"], explanation: "'Neither' para acuerdo negativo." },
        { prompt: "I don't have a car. Do you have ___?", correct: ["one"], explanation: "'One' sustituye 'a car'." },
        { prompt: "They enjoy hiking. ___ do we.", correct: ["so"], explanation: "'So' para acuerdo positivo." },
        { prompt: "I won't be there. ___ will she.", correct: ["neither"], explanation: "'Neither' para acuerdo negativo." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "like", "coffee", ".", "So", "do", "I", "."], translation: "Me gusta el café. A mí también.",
          explanation: "'So' + auxiliar + sujeto para acuerdo positivo." },
        { words: ["I", "don't", "like", "tea", ".", "Neither", "do", "I", "."], translation: "No me gusta el té. A mí tampoco.",
          explanation: "'Neither' + auxiliar + sujeto para acuerdo negativo." },
        { words: ["I", "need", "a", "pen", ".", "Do", "you", "have", "one", "?"], translation: "Necesito un lápiz. ¿Tienes uno?",
          explanation: "'One' sustituye al sustantivo mencionado." },
        { words: ["She", "can", "swim", ".", "So", "can", "I", "."], translation: "Ella sabe nadar. Yo también.",
          explanation: "El auxiliar concuerda con el original." },
        { words: ["I", "haven't", "finished", ".", "Neither", "has", "he", "."], translation: "No he terminado. Él tampoco.",
          explanation: "'Neither' + auxiliar + sujeto." },
        { words: ["I", "prefer", "the", "blue", "one", "."], translation: "Prefiero la azul.",
          explanation: "'One' sustituye al sustantivo mencionado antes." },
        { words: ["Who", "wants", "coffee", "?", "I", "do", "."], translation: "¿Quién quiere café? Yo.",
          explanation: "Elipsis: se omite la repetición del verbo principal." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada estructura con su función.",
      type: "match",
      questions: [
        { pairs: [
            ["so do I", "acuerdo positivo"], ["neither do I", "acuerdo negativo"],
            ["one / ones", "sustituye sustantivo"], ["I do", "elipsis en respuesta corta"],
            ["avoid repetition", "evitar repetición"], ["concise", "conciso"], ["omit", "omitir"],
          ],
          explanation: "Estas estructuras evitan repetir información ya mencionada." }
      ]
    }
  ]
};
