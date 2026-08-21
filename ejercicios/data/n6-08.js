window.EXERCISE_DATA = {
  title: "As If / As Though",
  translation: "Como si — comparaciones hipotéticas",
  level: "Nivel 6 · Avanzado (C1)",

  vocabulary: [
    { en: "as if", es: "como si" },
    { en: "as though", es: "como si" },
    { en: "pretend", es: "fingir" },
    { en: "look like", es: "parecer" },
    { en: "act like", es: "actuar como" },
    { en: "seem", es: "parecer" },
    { en: "behave", es: "comportarse" },
    { en: "unreal", es: "irreal" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["as if", "como si"], ["pretend", "fingir"], ["look like", "parecer"],
          ["act like", "actuar como"], ["seem", "parecer"], ["behave", "comportarse"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p><strong>As if</strong> y <strong>as though</strong> (significan lo mismo: "como si") se usan
    para comparar con una situación <strong>hipotética o irreal</strong>. Generalmente van seguidos
    del pasado simple/subjuntivo, aunque hablen del presente.</p>
    <table>
      <tr><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>He talks as if he knew everything.</td><td>Habla como si lo supiera todo (pero no es cierto).</td></tr>
      <tr><td>She looks as though she has seen a ghost.</td><td>Parece como si hubiera visto un fantasma.</td></tr>
      <tr><td>It looks as if it's going to rain.</td><td>Parece que va a llover (posible, presente real).</td></tr>
    </table>
    <p>Cuando la situación es claramente <strong>irreal o hipotética</strong>, se usa pasado simple
    (o "were" en vez de "was"): <strong>She acts as if she were the boss.</strong>
    (Actúa como si fuera la jefa — pero no lo es.)</p>
    <p>Cuando la situación es <strong>posible o real</strong>, se puede usar presente:
    <strong>It looks as if it's going to rain.</strong> (Realmente parece que va a llover.)</p>
    <p>Para hablar de algo pasado que fue irreal, se usa pasado perfecto:
    <strong>He looked as if he had run a marathon.</strong>
    (Se veía como si hubiera corrido un maratón.)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma correcta.",
      type: "mc",
      questions: [
        { prompt: "He talks as if he ___ everything. (hipotético)", options: ["knows", "knew"], correct: 1,
          explanation: "Situación irreal: pasado simple." },
        { prompt: "She acts as if she ___ the boss. (hipotético, con 'were')", options: ["was", "were"], correct: 1,
          explanation: "Se prefiere 'were' en situaciones hipotéticas formales." },
        { prompt: "It looks as if it ___ going to rain. (posible, real)", options: ["is", "were"], correct: 0,
          explanation: "Situación posible/real: presente." },
        { prompt: "He looked as if he ___ (run) a marathon. (pasado hipotético)", options: ["ran", "had run"], correct: 1,
          explanation: "Situación pasada hipotética: pasado perfecto." },
        { prompt: "She speaks English as if she ___ a native speaker.", options: ["is", "were"], correct: 1,
          explanation: "Situación hipotética: 'were'." },
        { prompt: "He looks as though he ___ (see) a ghost.", options: ["sees", "had seen"], correct: 1,
          explanation: "Situación pasada hipotética: pasado perfecto." },
        { prompt: "It sounds as if she ___ upset. (posible, real)", options: ["is", "were"], correct: 0,
          explanation: "Situación posible/real: presente." },
        { prompt: "He treats me as if I ___ a child.", options: ["am", "were"], correct: 1,
          explanation: "Situación hipotética (no es un niño): 'were'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con la forma correcta después de as if/as though.",
      type: "fill",
      questions: [
        { prompt: "He talks as if he ___ (know) everything.", correct: ["knew"], explanation: "Hipotético: pasado simple." },
        { prompt: "She acts as if she ___ (be) the boss.", correct: ["were"], explanation: "Hipotético: 'were'." },
        { prompt: "It looks as if it ___ (be) going to rain.", correct: ["is"], explanation: "Posible/real: presente." },
        { prompt: "He looked as if he ___ (see) a ghost.", correct: ["had seen"], explanation: "Pasado hipotético: pasado perfecto." },
        { prompt: "She speaks as if she ___ (be) an expert.", correct: ["were"], explanation: "Hipotético: 'were'." },
        { prompt: "It sounds as if he ___ (be) angry. (posible, real)", correct: ["is"], explanation: "Posible/real: presente." },
        { prompt: "He treats me as if I ___ (be) a stranger.", correct: ["were"], explanation: "Hipotético: 'were'." },
        { prompt: "She looked as if she ___ (cry).", correct: ["had been crying", "had cried"], explanation: "Pasado hipotético: pasado perfecto." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["He", "talks", "as", "if", "he", "knew", "everything", "."], translation: "Habla como si lo supiera todo.",
          explanation: "as if + pasado simple para lo hipotético." },
        { words: ["She", "acts", "as", "if", "she", "were", "the", "boss", "."], translation: "Actúa como si fuera la jefa.",
          explanation: "as if + were para lo hipotético." },
        { words: ["It", "looks", "as", "if", "it's", "going", "to", "rain", "."], translation: "Parece que va a llover.",
          explanation: "as if + presente para lo posible/real." },
        { words: ["He", "looked", "as", "if", "he", "had", "run", "a", "marathon", "."], translation: "Se veía como si hubiera corrido un maratón.",
          explanation: "as if + pasado perfecto para lo pasado hipotético." },
        { words: ["She", "speaks", "as", "if", "she", "were", "a", "native", "."], translation: "Habla como si fuera nativa.",
          explanation: "as if + were para lo hipotético." },
        { words: ["He", "looks", "as", "though", "he", "had", "seen", "a", "ghost", "."], translation: "Se ve como si hubiera visto un fantasma.",
          explanation: "as though + pasado perfecto." },
        { words: ["He", "treats", "me", "as", "if", "I", "were", "a", "child", "."], translation: "Me trata como si fuera un niño.",
          explanation: "as if + were para lo hipotético." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada situación con la forma verbal correcta.",
      type: "match",
      questions: [
        { pairs: [
            ["hypothetical present", "pasado simple / were"], ["possible/real present", "presente"],
            ["hypothetical past", "pasado perfecto"], ["as if", "como si"],
            ["pretend", "fingir"], ["seem", "parecer"], ["behave", "comportarse"],
          ],
          explanation: "El tiempo verbal depende de si la comparación es hipotética o real." }
      ]
    }
  ]
};
