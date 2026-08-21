window.EXERCISE_DATA = {
  title: "Reducing Adjective Clauses",
  translation: "Reducción de cláusulas adjetivas a frases",
  level: "Nivel 5 · Intermedio Alto (B2)",

  vocabulary: [
    { en: "reduce", es: "reducir" },
    { en: "phrase", es: "frase" },
    { en: "shorten", es: "acortar" },
    { en: "concise", es: "conciso" },
    { en: "modify", es: "modificar" },
    { en: "participle", es: "participio" },
    { en: "eliminate", es: "eliminar" },
    { en: "simplify", es: "simplificar" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["reduce", "reducir"], ["phrase", "frase"], ["shorten", "acortar"],
          ["concise", "conciso"], ["participle", "participio"], ["simplify", "simplificar"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Algunas cláusulas adjetivas se pueden <strong>reducir</strong> a una frase más corta,
    eliminando el pronombre relativo y el verbo "to be", cuando existe.</p>
    <table>
      <tr><th>Cláusula completa</th><th>Frase reducida</th></tr>
      <tr><td>The man who is standing there is my uncle.</td><td>The man standing there is my uncle.</td></tr>
      <tr><td>The book which was written by her is famous.</td><td>The book written by her is famous.</td></tr>
      <tr><td>The students who are studying English are here.</td><td>The students studying English are here.</td></tr>
    </table>
    <p>Regla: se elimina el pronombre relativo (who/which/that) + el verbo "to be", dejando solo
    el participio (activo -ing, o pasivo -ed/participio irregular).</p>
    <p>Si la cláusula original tiene voz activa (-ing): se usa <strong>gerundio</strong> en la
    reducción. Si tiene voz pasiva (was/were + participio): se usa solo el
    <strong>participio pasado</strong> en la reducción.</p>
    <p>Ejemplo: <strong>The woman who is wearing red is my sister.</strong> →
    <strong>The woman wearing red is my sister.</strong> (La mujer que lleva rojo es mi hermana.)</p>
    <p>Nota: solo se puede reducir cuando el pronombre relativo funciona como <strong>sujeto</strong>
    de la cláusula, no cuando es objeto.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma reducida correcta.",
      type: "mc",
      questions: [
        { prompt: "The man who is standing there... → The man ___ there...", options: ["standing", "stands", "stood"], correct: 0,
          explanation: "Se elimina 'who is' y se deja el gerundio 'standing'." },
        { prompt: "The book which was written by her... → The book ___ by her...", options: ["writing", "written", "write"], correct: 1,
          explanation: "Voz pasiva: se deja solo el participio 'written'." },
        { prompt: "The students who are studying English... → The students ___ English...", options: ["studying", "studied", "study"], correct: 0,
          explanation: "Se elimina 'who are' y se deja el gerundio 'studying'." },
        { prompt: "The woman who is wearing red... → The woman ___ red...", options: ["wearing", "wore", "worn"], correct: 0,
          explanation: "Se elimina 'who is' y se deja el gerundio 'wearing'." },
        { prompt: "The car that was damaged in the accident... → The car ___ in the accident...", options: ["damaging", "damaged", "damage"], correct: 1,
          explanation: "Voz pasiva: se deja solo el participio 'damaged'." },
        { prompt: "The people who are waiting outside... → The people ___ outside...", options: ["waiting", "waited", "wait"], correct: 0,
          explanation: "Se elimina 'who are' y se deja el gerundio 'waiting'." },
        { prompt: "The letter which was sent yesterday... → The letter ___ yesterday...", options: ["sending", "sent", "send"], correct: 1,
          explanation: "Voz pasiva: se deja solo el participio 'sent'." },
        { prompt: "The dog that is barking loudly... → The dog ___ loudly...", options: ["barking", "barked", "bark"], correct: 0,
          explanation: "Se elimina 'that is' y se deja el gerundio 'barking'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa la forma reducida de cada cláusula.",
      type: "fill",
      questions: [
        { prompt: "The girl who is singing... → The girl ___ (sing)...", correct: ["singing"], explanation: "Reducción activa: gerundio." },
        { prompt: "The house that was built in 1990... → The house ___ (build) in 1990...", correct: ["built"], explanation: "Reducción pasiva: participio." },
        { prompt: "The man who is talking to her... → The man ___ (talk) to her...", correct: ["talking"], explanation: "Reducción activa: gerundio." },
        { prompt: "The cake that was made by my mom... → The cake ___ (make) by my mom...", correct: ["made"], explanation: "Reducción pasiva: participio." },
        { prompt: "The children who are playing outside... → The children ___ (play) outside...", correct: ["playing"], explanation: "Reducción activa: gerundio." },
        { prompt: "The report which was written last week... → The report ___ (write) last week...", correct: ["written"], explanation: "Reducción pasiva: participio." },
        { prompt: "The bird that is flying above... → The bird ___ (fly) above...", correct: ["flying"], explanation: "Reducción activa: gerundio." },
        { prompt: "The window that was broken yesterday... → The window ___ (break) yesterday...", correct: ["broken"], explanation: "Reducción pasiva: participio." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración reducida.",
      type: "order",
      questions: [
        { words: ["The", "man", "standing", "there", "is", "my", "uncle", "."], translation: "El hombre que está parado ahí es mi tío.",
          explanation: "Reducción de 'who is standing' a 'standing'." },
        { words: ["The", "book", "written", "by", "her", "is", "famous", "."], translation: "El libro escrito por ella es famoso.",
          explanation: "Reducción de 'which was written' a 'written'." },
        { words: ["The", "woman", "wearing", "red", "is", "my", "sister", "."], translation: "La mujer que lleva rojo es mi hermana.",
          explanation: "Reducción de 'who is wearing' a 'wearing'." },
        { words: ["The", "car", "damaged", "in", "the", "accident", "was", "sold", "."], translation: "El carro dañado en el accidente fue vendido.",
          explanation: "Reducción de 'that was damaged' a 'damaged'." },
        { words: ["The", "students", "studying", "hard", "will", "pass", "."], translation: "Los estudiantes que estudian duro aprobarán.",
          explanation: "Reducción de 'who are studying' a 'studying'." },
        { words: ["The", "letter", "sent", "yesterday", "arrived", "today", "."], translation: "La carta enviada ayer llegó hoy.",
          explanation: "Reducción de 'which was sent' a 'sent'." },
        { words: ["The", "dog", "barking", "loudly", "is", "scary", "."], translation: "El perro que ladra fuerte da miedo.",
          explanation: "Reducción de 'that is barking' a 'barking'." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada cláusula completa con su forma reducida.",
      type: "match",
      questions: [
        { pairs: [
            ["who is standing", "standing"], ["which was written", "written"], ["who is wearing", "wearing"],
            ["that was damaged", "damaged"], ["who are studying", "studying"], ["reduce", "reducir"], ["participle", "participio"],
          ],
          explanation: "Se elimina el pronombre relativo + 'to be', dejando el participio." }
      ]
    }
  ]
};
