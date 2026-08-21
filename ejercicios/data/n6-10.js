window.EXERCISE_DATA = {
  title: "Wishes with Past Perfect",
  translation: "Deseos sobre el pasado — arrepentimiento",
  level: "Nivel 6 · Avanzado (C1)",

  vocabulary: [
    { en: "regret", es: "arrepentimiento" },
    { en: "if only", es: "si tan solo" },
    { en: "in the past", es: "en el pasado" },
    { en: "differently", es: "de manera diferente" },
    { en: "opportunity", es: "oportunidad" },
    { en: "missed", es: "perdido/a" },
    { en: "unfortunately", es: "desafortunadamente" },
    { en: "look back", es: "mirar hacia atrás" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["regret", "arrepentimiento"], ["if only", "si tan solo"], ["differently", "de manera diferente"],
          ["opportunity", "oportunidad"], ["missed", "perdido/a"], ["look back", "mirar hacia atrás"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p><strong>Wish + pasado perfecto</strong> (had + participio) se usa para expresar
    <strong>arrepentimiento</strong> sobre algo que pasó (o no pasó) en el pasado — algo que ya no
    se puede cambiar.</p>
    <table>
      <tr><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>I wish I had studied harder.</td><td>Ojalá hubiera estudiado más duro.</td></tr>
      <tr><td>She wishes she hadn't said that.</td><td>Ella desearía no haber dicho eso.</td></tr>
      <tr><td>I wish I had known about the party.</td><td>Ojalá hubiera sabido sobre la fiesta.</td></tr>
    </table>
    <p><strong>If only</strong> funciona igual que "wish" pero con más énfasis emocional:
    <strong>If only I had listened to my parents!</strong>
    (¡Si tan solo hubiera escuchado a mis padres!)</p>
    <p>Comparación de los tres tipos de "wish":</p>
    <table>
      <tr><th>Tiempo</th><th>Estructura</th><th>Ejemplo</th></tr>
      <tr><td>Presente (deseo)</td><td>wish + pasado simple</td><td>I wish I were taller.</td></tr>
      <tr><td>Presente (molestia)</td><td>wish + would</td><td>I wish you would listen.</td></tr>
      <tr><td>Pasado (arrepentimiento)</td><td>wish + pasado perfecto</td><td>I wish I had studied.</td></tr>
    </table>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "I wish I ___ (study) harder.", options: ["studied", "had studied"], correct: 1,
          explanation: "Arrepentimiento sobre el pasado: wish + pasado perfecto." },
        { prompt: "She wishes she ___ (not/say) that.", options: ["didn't say", "hadn't said"], correct: 1,
          explanation: "Arrepentimiento: wish + hadn't + participio." },
        { prompt: "I wish I ___ (know) about the party.", options: ["knew", "had known"], correct: 1,
          explanation: "Arrepentimiento sobre el pasado: wish + pasado perfecto." },
        { prompt: "If only I ___ (listen) to my parents!", options: ["listened", "had listened"], correct: 1,
          explanation: "'If only' + pasado perfecto para arrepentimiento." },
        { prompt: "He wishes he ___ (not/quit) his job.", options: ["didn't quit", "hadn't quit"], correct: 1,
          explanation: "Arrepentimiento: wish + hadn't + participio." },
        { prompt: "We wish we ___ (travel) more when we were young.", options: ["traveled", "had traveled"], correct: 1,
          explanation: "Arrepentimiento sobre el pasado: wish + pasado perfecto." },
        { prompt: "I wish I ___ (take) that opportunity.", options: ["took", "had taken"], correct: 1,
          explanation: "Arrepentimiento sobre el pasado: wish + pasado perfecto." },
        { prompt: "She wishes she ___ (be) nicer to him. (en el pasado)", options: ["was", "had been"], correct: 1,
          explanation: "Arrepentimiento sobre el pasado: wish + pasado perfecto." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con wish + pasado perfecto.",
      type: "fill",
      questions: [
        { prompt: "I wish I ___ (study) more for the exam.", correct: ["had studied"], explanation: "wish + had + participio." },
        { prompt: "She wishes she ___ (not/quit) her job.", correct: ["hadn't quit"], explanation: "wish + hadn't + participio." },
        { prompt: "I wish I ___ (know) about this earlier.", correct: ["had known"], explanation: "wish + had + participio." },
        { prompt: "If only I ___ (listen) to you.", correct: ["had listened"], explanation: "if only + had + participio." },
        { prompt: "He wishes he ___ (not/say) that to her.", correct: ["hadn't said"], explanation: "wish + hadn't + participio." },
        { prompt: "We wish we ___ (visit) Peru when we had the chance.", correct: ["had visited"], explanation: "wish + had + participio." },
        { prompt: "I wish I ___ (take) that job offer.", correct: ["had taken"], explanation: "wish + had + participio." },
        { prompt: "She wishes she ___ (be) more patient with him.", correct: ["had been"], explanation: "wish + had + participio." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "wish", "I", "had", "studied", "harder", "."], translation: "Ojalá hubiera estudiado más duro.",
          explanation: "wish + had + participio para arrepentimiento." },
        { words: ["She", "wishes", "she", "hadn't", "said", "that", "."], translation: "Ella desearía no haber dicho eso.",
          explanation: "wish + hadn't + participio." },
        { words: ["I", "wish", "I", "had", "known", "about", "the", "party", "."], translation: "Ojalá hubiera sabido sobre la fiesta.",
          explanation: "wish + had + participio." },
        { words: ["If", "only", "I", "had", "listened", "to", "my", "parents", "!"], translation: "¡Si tan solo hubiera escuchado a mis padres!",
          explanation: "if only + had + participio, con énfasis emocional." },
        { words: ["He", "wishes", "he", "hadn't", "quit", "his", "job", "."], translation: "Él desearía no haber dejado su trabajo.",
          explanation: "wish + hadn't + participio." },
        { words: ["We", "wish", "we", "had", "traveled", "more", "."], translation: "Ojalá hubiéramos viajado más.",
          explanation: "wish + had + participio." },
        { words: ["I", "wish", "I", "had", "taken", "that", "opportunity", "."], translation: "Ojalá hubiera tomado esa oportunidad.",
          explanation: "wish + had + participio." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada tipo de deseo con su estructura y tiempo.",
      type: "match",
      questions: [
        { pairs: [
            ["wish + pasado simple", "deseo presente"], ["wish + would", "molestia presente"],
            ["wish + pasado perfecto", "arrepentimiento pasado"], ["if only", "si tan solo (énfasis)"],
            ["regret", "arrepentimiento"], ["missed opportunity", "oportunidad perdida"], ["differently", "diferente"],
          ],
          explanation: "Cada tipo de 'wish' corresponde a un tiempo y matiz distinto." }
      ]
    }
  ]
};
