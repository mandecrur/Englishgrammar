window.EXERCISE_DATA = {
  title: "Past Certainty (must/may/can't have been)",
  translation: "Deducciones lógicas sobre el pasado",
  level: "Nivel 5 · Intermedio Alto (B2)",

  vocabulary: [
    { en: "in retrospect", es: "en retrospectiva" },
    { en: "clue", es: "pista" },
    { en: "evidence", es: "evidencia" },
    { en: "explanation", es: "explicación" },
    { en: "presumably", es: "presumiblemente" },
    { en: "apparently", es: "aparentemente" },
    { en: "must have", es: "debe haber" },
    { en: "impossible", es: "imposible" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["clue", "pista"], ["evidence", "evidencia"], ["explanation", "explicación"],
          ["presumably", "presumiblemente"], ["apparently", "aparentemente"], ["impossible", "imposible"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Para hacer deducciones sobre el <strong>pasado</strong> (algo que ya ocurrió), se usa
    <strong>modal + have + participio pasado</strong>.</p>
    <table>
      <tr><th>Modal</th><th>Grado de certeza</th><th>Ejemplo</th></tr>
      <tr><td><strong>must have + participio</strong></td><td>casi seguro</td><td>She must have left already.</td></tr>
      <tr><td><strong>may/might have + participio</strong></td><td>posible</td><td>He may have forgotten.</td></tr>
      <tr><td><strong>can't have + participio</strong></td><td>casi imposible</td><td>They can't have finished so fast.</td></tr>
    </table>
    <p>Ejemplo de razonamiento: <strong>The lights are off. They must have left.</strong>
    (Las luces están apagadas. Deben haberse ido — deducción fuerte basada en evidencia actual
    sobre una acción pasada.)</p>
    <p><strong>Could have</strong> también se usa para posibilidad pasada: <strong>She could have
    taken the bus.</strong> (Ella pudo haber tomado el bus — era posible, no se sabe si pasó.)</p>
    <p>Comparación con el presente (visto en un tema anterior): <strong>must be</strong> (presente)
    vs. <strong>must have been</strong> (pasado) — el "have + participio" marca que la deducción
    es sobre algo que ya pasó.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige el modal correcto según el grado de certeza.",
      type: "mc",
      questions: [
        { prompt: "The lights are off. They ___ have left. (casi seguro)", options: ["must", "may", "can't"], correct: 0,
          explanation: "'Must have' expresa una deducción fuerte sobre el pasado." },
        { prompt: "He ___ have forgotten, I'm not sure. (posible)", options: ["must", "may", "can't"], correct: 1,
          explanation: "'May have' expresa posibilidad sobre el pasado." },
        { prompt: "They ___ have finished so fast, it's impossible. (imposible)", options: ["must", "may", "can't"], correct: 2,
          explanation: "'Can't have' expresa que algo es imposible que haya pasado." },
        { prompt: "She looks tired. She ___ have slept well.", options: ["must not", "may", "can't"], correct: 0,
          explanation: "'Must not have' expresa una deducción negativa fuerte." },
        { prompt: "He ___ have taken the bus, I'm not certain.", options: ["must", "could", "can't"], correct: 1,
          explanation: "'Could have' expresa posibilidad sobre el pasado." },
        { prompt: "That ___ have happened, I was there and saw everything.", options: ["must", "may", "can't"], correct: 2,
          explanation: "'Can't have' expresa imposibilidad basada en evidencia." },
        { prompt: "The food is gone. Someone ___ have eaten it.", options: ["must", "may", "can't"], correct: 0,
          explanation: "'Must have' expresa una deducción fuerte con evidencia clara." },
        { prompt: "I'm not sure who called. It ___ have been my mom.", options: ["must", "might", "can't"], correct: 1,
          explanation: "'Might have' expresa posibilidad, sin certeza." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con modal + have + participio pasado.",
      type: "fill",
      questions: [
        { prompt: "The door is open. Someone ___ (must/leave) it open.", correct: ["must have left"], explanation: "must have + participio." },
        { prompt: "She ___ (may/forget) about the meeting.", correct: ["may have forgotten"], explanation: "may have + participio." },
        { prompt: "He ___ (can't/finish) already, it's too soon.", correct: ["can't have finished"], explanation: "can't have + participio." },
        { prompt: "They ___ (must/arrive) late, the flight was delayed.", correct: ["must have arrived"], explanation: "must have + participio." },
        { prompt: "I ___ (might/lose) my keys somewhere.", correct: ["might have lost"], explanation: "might have + participio." },
        { prompt: "That ___ (can't/be) her, she's out of town.", correct: ["can't have been"], explanation: "can't have + participio." },
        { prompt: "She looks upset. Something ___ (must/happen).", correct: ["must have happened"], explanation: "must have + participio." },
        { prompt: "He ___ (could/take) a taxi instead.", correct: ["could have taken"], explanation: "could have + participio." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["They", "must", "have", "left", "already", "."], translation: "Ya deben haberse ido.",
          explanation: "Deducción fuerte con 'must have'." },
        { words: ["He", "may", "have", "forgotten", "about", "it", "."], translation: "Puede que se haya olvidado de eso.",
          explanation: "Posibilidad con 'may have'." },
        { words: ["That", "can't", "have", "happened", "."], translation: "Eso no puede haber pasado.",
          explanation: "Imposibilidad con 'can't have'." },
        { words: ["Someone", "must", "have", "eaten", "the", "food", "."], translation: "Alguien debe haberse comido la comida.",
          explanation: "Deducción fuerte con evidencia." },
        { words: ["She", "could", "have", "taken", "the", "bus", "."], translation: "Ella pudo haber tomado el bus.",
          explanation: "Posibilidad pasada con 'could have'." },
        { words: ["It", "might", "have", "been", "my", "mom", "."], translation: "Podría haber sido mi mamá.",
          explanation: "Posibilidad con 'might have'." },
        { words: ["Something", "must", "have", "happened", "to", "her", "."], translation: "Algo debe haberle pasado a ella.",
          explanation: "Deducción fuerte con 'must have'." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada modal con su grado de certeza sobre el pasado.",
      type: "match",
      questions: [
        { pairs: [
            ["must have left", "casi seguro que se fue"], ["may have forgotten", "posible que olvidó"],
            ["can't have finished", "imposible que terminó"], ["could have taken", "pudo haber tomado"],
            ["in retrospect", "en retrospectiva"], ["apparently", "aparentemente"], ["evidence", "evidencia"],
          ],
          explanation: "'Modal + have + participio' hace deducciones sobre eventos pasados." }
      ]
    }
  ]
};
