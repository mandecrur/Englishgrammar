window.EXERCISE_DATA = {
  title: "Had Better",
  translation: "Más vale que — advertencia/consejo fuerte",
  level: "Nivel 4 · Intermedio Bajo (B1)",

  vocabulary: [
    { en: "warning", es: "advertencia" },
    { en: "consequence", es: "consecuencia" },
    { en: "urgent", es: "urgente" },
    { en: "hurry up", es: "apúrate" },
    { en: "or else", es: "o si no" },
    { en: "in trouble", es: "en problemas" },
    { en: "risk", es: "riesgo" },
    { en: "immediately", es: "inmediatamente" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["warning", "advertencia"], ["consequence", "consecuencia"], ["urgent", "urgente"],
          ["hurry up", "apúrate"], ["in trouble", "en problemas"], ["immediately", "inmediatamente"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p><strong>Had better</strong> se usa para dar un consejo <strong>fuerte</strong>, casi una
    advertencia — implica que si no se sigue, habrá una consecuencia negativa. Es más fuerte que "should".</p>
    <table>
      <tr><th>Forma</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Afirmativa</td><td>You had better hurry.</td><td>Más te vale apurarte.</td></tr>
      <tr><td>Negativa</td><td>You had better not be late.</td><td>Más te vale no llegar tarde.</td></tr>
    </table>
    <p>Se forma con <strong>had better</strong> (no cambia con el pronombre) + verbo base.
    En el habla cotidiana casi siempre se contrae a <strong>'d better</strong>:
    <strong>You'd better hurry.</strong></p>
    <p>Importante: aunque tiene "had" (pasado de "have"), <strong>siempre se refiere al presente
    o futuro</strong>, nunca al pasado. No es un tiempo verbal pasado.</p>
    <p>Ejemplo: <strong>You'd better study, or you'll fail the exam.</strong>
    (Más te vale estudiar, o reprobarás el examen — hay una consecuencia implícita.)</p>
    <p>Diferencia con "should": <strong>You should study</strong> es un consejo suave;
    <strong>You'd better study</strong> implica una consecuencia negativa si no lo haces.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "You ___ better hurry, we're late.", options: ["had", "have", "are"], correct: 0,
          explanation: "'Had better' es la estructura fija." },
        { prompt: "You'd better ___ (not/be) late.", options: ["not be", "not to be", "don't be"], correct: 0,
          explanation: "Negación: 'd better not' + verbo base." },
        { prompt: "We ___ better leave now.", options: ["had", "have", "are"], correct: 0,
          explanation: "'Had better' no cambia según el pronombre." },
        { prompt: "She had better ___ (study) for the exam.", options: ["study", "studies", "studying"], correct: 0,
          explanation: "'Had better' + verbo base." },
        { prompt: "You'd better ___ (call) him now.", options: ["call", "calls", "calling"], correct: 0,
          explanation: "'Had better' + verbo base." },
        { prompt: "They ___ better finish on time.", options: ["had", "have", "are"], correct: 0,
          explanation: "'Had better' es igual para todos los pronombres." },
        { prompt: "You'd better ___ (not/forget) your keys.", options: ["not forget", "not to forget", "don't forget"], correct: 0,
          explanation: "Negación: 'd better not' + verbo base." },
        { prompt: "I ___ better go, it's getting late.", options: ["had", "have", "am"], correct: 0,
          explanation: "'Had better' no cambia con 'I'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con had better o 'd better.",
      type: "fill",
      questions: [
        { prompt: "You ___ (hurry), we're late.", correct: ["had better hurry", "'d better hurry"], explanation: "had better + verbo base." },
        { prompt: "She ___ (not/be) late again.", correct: ["had better not be", "'d better not be"], explanation: "Negación: had better not." },
        { prompt: "We ___ (leave) now or we'll miss the bus.", correct: ["had better leave", "'d better leave"], explanation: "had better + verbo base." },
        { prompt: "You ___ (study) hard for this exam.", correct: ["had better study", "'d better study"], explanation: "had better + verbo base." },
        { prompt: "They ___ (not/forget) the tickets.", correct: ["had better not forget", "'d better not forget"], explanation: "Negación: had better not." },
        { prompt: "I ___ (call) her before it's too late.", correct: ["had better call", "'d better call"], explanation: "had better + verbo base." },
        { prompt: "He ___ (apologize) to her.", correct: ["had better apologize", "'d better apologize"], explanation: "had better + verbo base." },
        { prompt: "You ___ (not/be) rude to your boss.", correct: ["had better not be", "'d better not be"], explanation: "Negación: had better not." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["You", "had", "better", "hurry", "."], translation: "Más te vale apurarte.",
          explanation: "Orden: sujeto + had better + verbo base." },
        { words: ["You", "had", "better", "not", "be", "late", "."], translation: "Más te vale no llegar tarde.",
          explanation: "Negación: had better not + verbo base." },
        { words: ["We", "had", "better", "leave", "now", "."], translation: "Más nos vale irnos ahora.",
          explanation: "Orden: sujeto + had better + verbo base + tiempo." },
        { words: ["She", "had", "better", "study", "tonight", "."], translation: "Más le vale estudiar esta noche.",
          explanation: "Orden: sujeto + had better + verbo base + tiempo." },
        { words: ["They", "had", "better", "not", "forget", "."], translation: "Más les vale no olvidar.",
          explanation: "Negación: had better not + verbo base." },
        { words: ["I", "had", "better", "go", "now", "."], translation: "Más me vale irme ahora.",
          explanation: "Orden: sujeto + had better + verbo base + tiempo." },
        { words: ["He", "had", "better", "apologize", "."], translation: "Más le vale disculparse.",
          explanation: "Orden: sujeto + had better + verbo base." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["You'd better hurry", "Más te vale apurarte"], ["You'd better not be late", "Más te vale no llegar tarde"],
            ["We'd better leave", "Más nos vale irnos"], ["a strong warning", "una advertencia fuerte"],
            ["or else", "o si no"], ["immediately", "inmediatamente"], ["consequence", "consecuencia"],
          ],
          explanation: "'Had better' implica una consecuencia negativa si no se sigue el consejo." }
      ]
    }
  ]
};
