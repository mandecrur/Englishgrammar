window.EXERCISE_DATA = {
  title: "Mixed Conditionals",
  translation: "Condicionales mixtos",
  level: "Nivel 6 · Avanzado (C1)",

  vocabulary: [
    { en: "if only", es: "si tan solo" },
    { en: "present consequence", es: "consecuencia presente" },
    { en: "past condition", es: "condición pasada" },
    { en: "hypothetical", es: "hipotético" },
    { en: "otherwise", es: "de otro modo" },
    { en: "as a result", es: "como resultado" },
    { en: "circumstance", es: "circunstancia" },
    { en: "consequence", es: "consecuencia" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["if only", "si tan solo"], ["hypothetical", "hipotético"], ["otherwise", "de otro modo"],
          ["as a result", "como resultado"], ["circumstance", "circunstancia"], ["consequence", "consecuencia"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Los condicionales mixtos combinan tiempos de <strong>distintos condicionales</strong> cuando
    la condición y el resultado ocurren en momentos diferentes (uno en el pasado, otro en el presente).</p>
    <table>
      <tr><th>Tipo</th><th>Condición</th><th>Resultado</th><th>Ejemplo</th></tr>
      <tr><td>Pasado → Presente</td><td>Pasado perfecto</td><td>would + verbo base</td><td>If I had studied medicine, I would be a doctor now.</td></tr>
      <tr><td>Presente → Pasado</td><td>Pasado simple (subjuntivo)</td><td>would have + participio</td><td>If I were smarter, I would have solved it.</td></tr>
    </table>
    <p>Ejemplo tipo 1 (condición pasada, resultado presente): <strong>If I had taken that job,
    I would be rich now.</strong> (Si hubiera tomado ese trabajo, ahora sería rico — la condición
    fue en el pasado, pero el resultado hipotético es en el presente.)</p>
    <p>Ejemplo tipo 2 (condición presente, resultado pasado): <strong>If she weren't so shy, she
    would have spoken up at the meeting.</strong> (Si ella no fuera tan tímida [ahora, siempre],
    habría hablado en la reunión [pasado].)</p>
    <p>Estos condicionales son comunes cuando se habla de cómo una característica permanente
    o una decisión pasada afecta una situación en otro momento.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma correcta del condicional mixto.",
      type: "mc",
      questions: [
        { prompt: "If I ___ (study) medicine, I would be a doctor now.", options: ["studied", "had studied"], correct: 1,
          explanation: "Condición pasada: pasado perfecto." },
        { prompt: "If I had taken that job, I ___ rich now.", options: ["would be", "would have been"], correct: 0,
          explanation: "Resultado presente: would + verbo base." },
        { prompt: "If she ___ (not/be) so shy, she would have spoken up.", options: ["wasn't", "weren't"], correct: 1,
          explanation: "Condición presente/permanente: pasado simple (subjuntivo 'were')." },
        { prompt: "If she weren't so shy, she ___ (speak) up at the meeting.", options: ["would speak", "would have spoken"], correct: 1,
          explanation: "Resultado pasado: would have + participio." },
        { prompt: "If I ___ (be) taller, I would have made the team.", options: ["were", "had been"], correct: 0,
          explanation: "Condición presente/permanente: pasado simple." },
        { prompt: "If he had listened to advice, he ___ (not/be) in this situation now.", options: ["wouldn't be", "wouldn't have been"], correct: 0,
          explanation: "Resultado presente: would + verbo base." },
        { prompt: "If I ___ (not/lose) my job, I would be able to afford this now.", options: ["didn't lose", "hadn't lost"], correct: 1,
          explanation: "Condición pasada: pasado perfecto." },
        { prompt: "If they ___ (be) more careful, the accident wouldn't have happened.", options: ["were", "had been"], correct: 0,
          explanation: "Condición presente/general: pasado simple." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con la forma correcta del condicional mixto.",
      type: "fill",
      questions: [
        { prompt: "If I ___ (study) harder, I would have a better job now.", correct: ["had studied"], explanation: "Condición pasada: had + participio." },
        { prompt: "If I had taken that job, I ___ (be) happier now.", correct: ["would be"], explanation: "Resultado presente: would + verbo base." },
        { prompt: "If she ___ (not/be) so busy, she would have come.", correct: ["weren't", "wasn't"], explanation: "Condición presente: pasado simple." },
        { prompt: "If he weren't so lazy, he ___ (finish) the project already.", correct: ["would have finished"], explanation: "Resultado pasado: would have + participio." },
        { prompt: "If I ___ (not/miss) the flight, I would be there now.", correct: ["hadn't missed"], explanation: "Condición pasada: had + participio." },
        { prompt: "If she ___ (be) more patient, she wouldn't have quit.", correct: ["were"], explanation: "Condición presente: pasado simple." },
        { prompt: "If we had planned better, we ___ (not/be) in this mess.", correct: ["wouldn't be"], explanation: "Resultado presente: would + verbo base." },
        { prompt: "If I ___ (know) him better, I would have trusted him.", correct: ["knew"], explanation: "Condición presente: pasado simple." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["If", "I", "had", "studied", "medicine", ",", "I", "would", "be", "a", "doctor", "now", "."], translation: "Si hubiera estudiado medicina, ahora sería doctor.",
          explanation: "Condición pasada, resultado presente." },
        { words: ["If", "she", "weren't", "so", "shy", ",", "she", "would", "have", "spoken", "up", "."], translation: "Si ella no fuera tan tímida, habría hablado.",
          explanation: "Condición presente, resultado pasado." },
        { words: ["If", "I", "hadn't", "lost", "my", "job", ",", "I", "would", "be", "fine", "now", "."], translation: "Si no hubiera perdido mi trabajo, estaría bien ahora.",
          explanation: "Condición pasada, resultado presente." },
        { words: ["If", "he", "were", "more", "careful", ",", "the", "accident", "wouldn't", "have", "happened", "."], translation: "Si él fuera más cuidadoso, el accidente no habría pasado.",
          explanation: "Condición presente, resultado pasado." },
        { words: ["If", "I", "had", "taken", "that", "job", ",", "I", "would", "be", "rich", "now", "."], translation: "Si hubiera tomado ese trabajo, ahora sería rico.",
          explanation: "Condición pasada, resultado presente." },
        { words: ["If", "she", "were", "braver", ",", "she", "would", "have", "tried", "it", "."], translation: "Si ella fuera más valiente, lo habría intentado.",
          explanation: "Condición presente, resultado pasado." },
        { words: ["If", "we", "hadn't", "missed", "the", "flight", ",", "we", "would", "be", "there", "."], translation: "Si no hubiéramos perdido el vuelo, estaríamos ahí.",
          explanation: "Condición pasada, resultado presente." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada tipo de condicional mixto con su estructura.",
      type: "match",
      questions: [
        { pairs: [
            ["past condition, present result", "had + participio / would + base"], ["present condition, past result", "were / would have + participio"],
            ["if only", "si tan solo"], ["hypothetical", "hipotético"],
            ["otherwise", "de otro modo"], ["circumstance", "circunstancia"], ["consequence", "consecuencia"],
          ],
          explanation: "Los condicionales mixtos combinan tiempos de condición y resultado distintos." }
      ]
    }
  ]
};
