window.EXERCISE_DATA = {
  title: "Perfect Gerunds and Infinitives",
  translation: "Gerundios e infinitivos perfectos",
  level: "Nivel 6 · Avanzado (C1)",

  vocabulary: [
    { en: "having done", es: "habiendo hecho" },
    { en: "to have done", es: "haber hecho" },
    { en: "deny", es: "negar" },
    { en: "admit", es: "admitir" },
    { en: "claim", es: "afirmar" },
    { en: "appear", es: "aparentar / parecer" },
    { en: "regret", es: "arrepentirse" },
    { en: "prior action", es: "acción anterior" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["having done", "habiendo hecho"], ["to have done", "haber hecho"], ["deny", "negar"],
          ["admit", "admitir"], ["claim", "afirmar"], ["regret", "arrepentirse"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Los gerundios e infinitivos perfectos indican que la acción ocurrió <strong>antes</strong>
    que el verbo principal — es decir, en un momento anterior.</p>
    <table>
      <tr><th>Forma</th><th>Estructura</th><th>Ejemplo</th></tr>
      <tr><td>Gerundio perfecto</td><td>having + participio</td><td>Having finished his work, he left.</td></tr>
      <tr><td>Infinitivo perfecto</td><td>to have + participio</td><td>He claims to have met the president.</td></tr>
    </table>
    <p>El <strong>gerundio perfecto</strong> se usa al inicio de una oración para mostrar que una
    acción se completó antes de otra: <strong>Having finished his work, he left the office.</strong>
    (Habiendo terminado su trabajo, se fue de la oficina.)</p>
    <p>El <strong>infinitivo perfecto</strong> se usa después de ciertos verbos (claim, seem, appear,
    pretend) para hablar de algo que supuestamente pasó antes: <strong>He claims to have met the
    president.</strong> (Afirma haber conocido al presidente.)</p>
    <p>Ejemplo con negación: <strong>She denies having taken the money.</strong>
    (Ella niega haber tomado el dinero.)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma correcta.",
      type: "mc",
      questions: [
        { prompt: "___ finished his work, he left. (habiendo)", options: ["Having", "To have"], correct: 0,
          explanation: "'Having' inicia el gerundio perfecto." },
        { prompt: "He claims ___ met the president.", options: ["having", "to have"], correct: 1,
          explanation: "'Claim' va seguido de infinitivo, aquí perfecto 'to have'." },
        { prompt: "She denies ___ taken the money.", options: ["having", "to have"], correct: 0,
          explanation: "'Deny' va seguido de gerundio, aquí perfecto 'having'." },
        { prompt: "He appears ___ (leave) already.", options: ["having left", "to have left"], correct: 1,
          explanation: "'Appear' va seguido de infinitivo perfecto." },
        { prompt: "___ studied hard, she passed easily.", options: ["Having", "To have"], correct: 0,
          explanation: "'Having' inicia el gerundio perfecto al comienzo de la oración." },
        { prompt: "He admits ___ (make) a mistake.", options: ["having made", "to have made"], correct: 0,
          explanation: "'Admit' va seguido de gerundio, aquí perfecto." },
        { prompt: "She seems ___ (forget) about the meeting.", options: ["having forgotten", "to have forgotten"], correct: 1,
          explanation: "'Seem' va seguido de infinitivo, aquí perfecto." },
        { prompt: "___ finished dinner, we watched a movie.", options: ["Having", "To have"], correct: 0,
          explanation: "'Having' inicia el gerundio perfecto." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con la forma perfecta correcta.",
      type: "fill",
      questions: [
        { prompt: "___ (finish) his homework, he watched TV.", correct: ["Having finished"], explanation: "Having + participio." },
        { prompt: "He claims ___ (meet) a celebrity.", correct: ["to have met"], explanation: "to have + participio." },
        { prompt: "She denies ___ (take) the money.", correct: ["having taken"], explanation: "having + participio." },
        { prompt: "He appears ___ (leave) already.", correct: ["to have left"], explanation: "to have + participio." },
        { prompt: "___ (study) hard, she felt confident.", correct: ["Having studied"], explanation: "Having + participio." },
        { prompt: "He admits ___ (make) a mistake.", correct: ["having made"], explanation: "having + participio." },
        { prompt: "She seems ___ (forget) about it.", correct: ["to have forgotten"], explanation: "to have + participio." },
        { prompt: "___ (complete) the project, they celebrated.", correct: ["Having completed"], explanation: "Having + participio." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["Having", "finished", "his", "work", ",", "he", "left", "."], translation: "Habiendo terminado su trabajo, se fue.",
          explanation: "Gerundio perfecto al inicio de la oración." },
        { words: ["He", "claims", "to", "have", "met", "the", "president", "."], translation: "Afirma haber conocido al presidente.",
          explanation: "'Claim' + infinitivo perfecto." },
        { words: ["She", "denies", "having", "taken", "the", "money", "."], translation: "Ella niega haber tomado el dinero.",
          explanation: "'Deny' + gerundio perfecto." },
        { words: ["He", "appears", "to", "have", "left", "already", "."], translation: "Parece que ya se ha ido.",
          explanation: "'Appear' + infinitivo perfecto." },
        { words: ["Having", "studied", "hard", ",", "she", "passed", "easily", "."], translation: "Habiendo estudiado duro, aprobó fácilmente.",
          explanation: "Gerundio perfecto al inicio de la oración." },
        { words: ["He", "admits", "having", "made", "a", "mistake", "."], translation: "Admite haber cometido un error.",
          explanation: "'Admit' + gerundio perfecto." },
        { words: ["She", "seems", "to", "have", "forgotten", "."], translation: "Parece que se ha olvidado.",
          explanation: "'Seem' + infinitivo perfecto." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada verbo con la forma perfecta que le corresponde.",
      type: "match",
      questions: [
        { pairs: [
            ["claim", "to have + participio"], ["deny", "having + participio"], ["appear", "to have + participio"],
            ["admit", "having + participio"], ["seem", "to have + participio"], ["having done", "habiendo hecho"], ["to have done", "haber hecho"],
          ],
          explanation: "Se sigue la regla gerundio/infinitivo del verbo, ahora en forma perfecta." }
      ]
    }
  ]
};
