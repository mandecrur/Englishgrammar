window.EXERCISE_DATA = {
  title: "Past Modals (should/could/would have)",
  translation: "Arrepentimiento y críticas sobre el pasado",
  level: "Nivel 5 · Intermedio Alto (B2)",

  vocabulary: [
    { en: "regret", es: "arrepentimiento / arrepentirse" },
    { en: "mistake", es: "error" },
    { en: "opportunity", es: "oportunidad" },
    { en: "missed", es: "perdido / que se perdió" },
    { en: "in hindsight", es: "en retrospectiva" },
    { en: "criticize", es: "criticar" },
    { en: "wish", es: "desear" },
    { en: "unfortunately", es: "desafortunadamente" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["regret", "arrepentimiento"], ["mistake", "error"], ["opportunity", "oportunidad"],
          ["missed", "perdido"], ["criticize", "criticar"], ["unfortunately", "desafortunadamente"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Estos modales + <strong>have + participio</strong> expresan <strong>arrepentimiento o crítica</strong>
    sobre algo que pasó (o no pasó) en el pasado — no lo que realmente ocurrió.</p>
    <table>
      <tr><th>Modal</th><th>Significado</th><th>Ejemplo</th></tr>
      <tr><td><strong>should have</strong></td><td>debiste hacerlo (pero no lo hiciste)</td><td>You should have called me.</td></tr>
      <tr><td><strong>shouldn't have</strong></td><td>no debiste hacerlo (pero lo hiciste)</td><td>You shouldn't have said that.</td></tr>
      <tr><td><strong>could have</strong></td><td>pudiste haberlo hecho (pero no lo hiciste)</td><td>I could have helped you.</td></tr>
      <tr><td><strong>would have</strong></td><td>lo habría hecho (bajo otra condición)</td><td>I would have come if I'd known.</td></tr>
    </table>
    <p>Ejemplo de arrepentimiento: <strong>I should have studied more.</strong>
    (Debí haber estudiado más — implica que no lo hice y ahora me arrepiento.)</p>
    <p>Ejemplo de crítica: <strong>You shouldn't have spent all that money.</strong>
    (No deberías haber gastado todo ese dinero — implica que lo gastaste y fue un error.)</p>
    <p>Todos estos son diferentes de su forma sin "have" (should, could, would), que hablan del
    presente/futuro, no del pasado.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "You ___ have called me. I was worried. (debiste)", options: ["should", "shouldn't", "wouldn't"], correct: 0,
          explanation: "'Should have' expresa que debiste hacerlo pero no lo hiciste." },
        { prompt: "You ___ have said that, it hurt her feelings. (no debiste)", options: ["should", "shouldn't", "couldn't"], correct: 1,
          explanation: "'Shouldn't have' expresa que lo hiciste y fue un error." },
        { prompt: "I ___ have helped you if you had asked. (pude haberlo hecho)", options: ["could", "should", "must"], correct: 0,
          explanation: "'Could have' expresa una posibilidad no realizada." },
        { prompt: "I ___ have come if I had known about the party.", options: ["would", "should", "must"], correct: 0,
          explanation: "'Would have' expresa lo que habría pasado bajo otra condición." },
        { prompt: "She ___ have studied harder. She failed the exam.", options: ["should", "shouldn't", "wouldn't"], correct: 0,
          explanation: "'Should have' expresa arrepentimiento sobre lo que no hizo." },
        { prompt: "He ___ have driven so fast, it was dangerous.", options: ["should", "shouldn't", "couldn't"], correct: 1,
          explanation: "'Shouldn't have' critica algo que sí hizo." },
        { prompt: "We ___ have won if we had practiced more.", options: ["would", "should", "must"], correct: 0,
          explanation: "'Would have' expresa un resultado hipotético." },
        { prompt: "I ___ have finished earlier, but I was busy.", options: ["could", "should", "must"], correct: 0,
          explanation: "'Could have' expresa una posibilidad no realizada." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con should have, shouldn't have, could have o would have.",
      type: "fill",
      questions: [
        { prompt: "You ___ (call) me, I was worried.", correct: ["should have called"], explanation: "should have: expresa arrepentimiento." },
        { prompt: "You ___ (not/eat) so much candy.", correct: ["shouldn't have eaten"], explanation: "shouldn't have: critica algo que sí ocurrió." },
        { prompt: "I ___ (help) you if you had asked.", correct: ["could have helped"], explanation: "could have: posibilidad no realizada." },
        { prompt: "She ___ (come) to the party if she had known.", correct: ["would have come"], explanation: "would have: resultado hipotético." },
        { prompt: "He ___ (not/spend) all his money.", correct: ["shouldn't have spent"], explanation: "shouldn't have: critica algo que sí ocurrió." },
        { prompt: "We ___ (win) if we had tried harder.", correct: ["would have won"], explanation: "would have: resultado hipotético." },
        { prompt: "I ___ (study) more for the test.", correct: ["should have studied"], explanation: "should have: expresa arrepentimiento." },
        { prompt: "They ___ (finish) earlier, but they were busy.", correct: ["could have finished"], explanation: "could have: posibilidad no realizada." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["You", "should", "have", "called", "me", "."], translation: "Deberías haberme llamado.",
          explanation: "Arrepentimiento con 'should have'." },
        { words: ["You", "shouldn't", "have", "said", "that", "."], translation: "No deberías haber dicho eso.",
          explanation: "Crítica con 'shouldn't have'." },
        { words: ["I", "could", "have", "helped", "you", "."], translation: "Pude haberte ayudado.",
          explanation: "Posibilidad no realizada con 'could have'." },
        { words: ["I", "would", "have", "come", "if", "I", "had", "known", "."], translation: "Habría venido si hubiera sabido.",
          explanation: "Resultado hipotético con 'would have'." },
        { words: ["She", "should", "have", "studied", "harder", "."], translation: "Ella debió haber estudiado más duro.",
          explanation: "Arrepentimiento con 'should have'." },
        { words: ["He", "shouldn't", "have", "driven", "so", "fast", "."], translation: "Él no debió haber manejado tan rápido.",
          explanation: "Crítica con 'shouldn't have'." },
        { words: ["We", "would", "have", "won", "the", "game", "."], translation: "Habríamos ganado el juego.",
          explanation: "Resultado hipotético con 'would have'." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada modal con su significado.",
      type: "match",
      questions: [
        { pairs: [
            ["should have", "debiste (arrepentimiento)"], ["shouldn't have", "no debiste (crítica)"],
            ["could have", "pudiste haberlo hecho"], ["would have", "lo habrías hecho"],
            ["regret", "arrepentimiento"], ["mistake", "error"], ["missed opportunity", "oportunidad perdida"],
          ],
          explanation: "Estos modales hablan de lo que pudo haber sido diferente en el pasado." }
      ]
    }
  ]
};
