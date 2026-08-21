window.EXERCISE_DATA = {
  title: "Reported Speech (Tense Shifts)",
  translation: "Estilo indirecto — cambios de tiempo verbal",
  level: "Nivel 5 · Intermedio Alto (B2)",

  vocabulary: [
    { en: "shift back", es: "retroceder (en el tiempo verbal)" },
    { en: "at the time", es: "en ese momento" },
    { en: "the following day", es: "el día siguiente" },
    { en: "the day before", es: "el día anterior" },
    { en: "that", es: "ese/aquel (en vez de 'this')" },
    { en: "there", es: "allí (en vez de 'here')" },
    { en: "still true", es: "sigue siendo verdad" },
    { en: "context", es: "contexto" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["shift back", "retroceder en el tiempo"], ["the following day", "el día siguiente"], ["the day before", "el día anterior"],
          ["still true", "sigue siendo verdad"], ["context", "contexto"], ["at the time", "en ese momento"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Cuando el verbo principal está en <strong>pasado</strong> (said, told, asked), el tiempo
    verbal de la cláusula reportada normalmente <strong>retrocede un paso</strong> en el tiempo.</p>
    <table>
      <tr><th>Estilo directo</th><th>Estilo indirecto</th></tr>
      <tr><td>present simple</td><td>past simple</td></tr>
      <tr><td>present continuous</td><td>past continuous</td></tr>
      <tr><td>past simple</td><td>past perfect</td></tr>
      <tr><td>present perfect</td><td>past perfect</td></tr>
      <tr><td>will</td><td>would</td></tr>
      <tr><td>can</td><td>could</td></tr>
    </table>
    <p>Ejemplo: <strong>"I work here," she said.</strong> → <strong>She said she worked here.</strong>
    (presente → pasado)<br>
    <strong>"I will call you," he said.</strong> → <strong>He said he would call me.</strong>
    (will → would)</p>
    <p>Las expresiones de tiempo también cambian: <strong>today → that day</strong>,
    <strong>tomorrow → the next day / the following day</strong>, <strong>yesterday → the day before</strong>,
    <strong>this → that</strong>, <strong>here → there</strong>.</p>
    <p>Excepción: si el hecho reportado sigue siendo <strong>verdad general</strong> (una ley, un
    hecho científico), el tiempo puede quedarse igual: <strong>She said the sun rises in the east.</strong></p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma verbal correcta en estilo indirecto.",
      type: "mc",
      questions: [
        { prompt: "\"I work here,\" she said. → She said she ___ there.", options: ["works", "worked"], correct: 1,
          explanation: "Presente → pasado en estilo indirecto." },
        { prompt: "\"I will call you,\" he said. → He said he ___ call me.", options: ["will", "would"], correct: 1,
          explanation: "'Will' cambia a 'would'." },
        { prompt: "\"I am studying,\" she said. → She said she ___ studying.", options: ["is", "was"], correct: 1,
          explanation: "Presente continuo → pasado continuo." },
        { prompt: "\"I saw him yesterday,\" she said. → She said she ___ seen him the day before.", options: ["saw", "had"], correct: 1,
          explanation: "Pasado simple → pasado perfecto (had + participio)." },
        { prompt: "\"I can help you,\" he said. → He said he ___ help me.", options: ["can", "could"], correct: 1,
          explanation: "'Can' cambia a 'could'." },
        { prompt: "\"I'll see you tomorrow,\" she said. → She said she would see me ___.", options: ["tomorrow", "the next day"], correct: 1,
          explanation: "'Tomorrow' cambia a 'the next day'." },
        { prompt: "\"I'm here now,\" he said. → He said he was ___ then.", options: ["here", "there"], correct: 1,
          explanation: "'Here' cambia a 'there'." },
        { prompt: "\"I have finished,\" she said. → She said she ___ finished.", options: ["has", "had"], correct: 1,
          explanation: "Presente perfecto → pasado perfecto." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con la forma correcta en estilo indirecto.",
      type: "fill",
      questions: [
        { prompt: "\"I am tired,\" she said. → She said she ___ (be) tired.", correct: ["was"], explanation: "Presente → pasado." },
        { prompt: "\"I will come,\" he said. → He said he ___ (come).", correct: ["would come"], explanation: "will → would." },
        { prompt: "\"I work here,\" she said. → She said she ___ (work) there.", correct: ["worked"], explanation: "Presente → pasado." },
        { prompt: "\"I saw her,\" he said. → He said he ___ (see) her.", correct: ["had seen"], explanation: "Pasado → pasado perfecto." },
        { prompt: "\"I can swim,\" she said. → She said she ___ (swim).", correct: ["could swim"], explanation: "can → could." },
        { prompt: "\"I'm studying,\" he said. → He said he ___ (study).", correct: ["was studying"], explanation: "Presente continuo → pasado continuo." },
        { prompt: "\"I have finished,\" she said. → She said she ___ (finish).", correct: ["had finished"], explanation: "Presente perfecto → pasado perfecto." },
        { prompt: "\"I'll call tomorrow,\" he said. → He said he would call ___ (the next day).", correct: ["the next day"], explanation: "tomorrow → the next day." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["She", "said", "she", "worked", "there", "."], translation: "Ella dijo que trabajaba ahí.",
          explanation: "Presente → pasado, here → there." },
        { words: ["He", "said", "he", "would", "call", "me", "."], translation: "Él dijo que me llamaría.",
          explanation: "will → would." },
        { words: ["She", "said", "she", "was", "studying", "."], translation: "Ella dijo que estaba estudiando.",
          explanation: "Presente continuo → pasado continuo." },
        { words: ["He", "said", "he", "had", "seen", "her", "."], translation: "Él dijo que la había visto.",
          explanation: "Pasado → pasado perfecto." },
        { words: ["She", "said", "she", "could", "help", "."], translation: "Ella dijo que podía ayudar.",
          explanation: "can → could." },
        { words: ["He", "said", "he", "would", "see", "me", "the", "next", "day", "."], translation: "Él dijo que me vería al día siguiente.",
          explanation: "tomorrow → the next day." },
        { words: ["She", "said", "she", "had", "already", "finished", "."], translation: "Ella dijo que ya había terminado.",
          explanation: "Presente perfecto → pasado perfecto." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada tiempo verbal directo con su cambio en estilo indirecto.",
      type: "match",
      questions: [
        { pairs: [
            ["present simple", "past simple"], ["present continuous", "past continuous"],
            ["past simple", "past perfect"], ["will", "would"], ["can", "could"],
            ["tomorrow", "the next day"], ["yesterday", "the day before"],
          ],
          explanation: "El tiempo verbal retrocede un paso cuando el verbo principal está en pasado." }
      ]
    }
  ]
};
