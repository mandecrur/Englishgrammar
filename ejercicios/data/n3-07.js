window.EXERCISE_DATA = {
  title: "Future Time Clauses",
  translation: "Cláusulas de tiempo en futuro",
  level: "Nivel 3 · Básico 2 (A2)",

  vocabulary: [
    { en: "as soon as", es: "tan pronto como" },
    { en: "once", es: "una vez que" },
    { en: "by the time", es: "para cuando" },
    { en: "graduate", es: "graduarse" },
    { en: "get home", es: "llegar a casa" },
    { en: "finish", es: "terminar" },
    { en: "arrive", es: "llegar" },
    { en: "retire", es: "jubilarse" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["as soon as", "tan pronto como"], ["once", "una vez que"], ["by the time", "para cuando"],
          ["graduate", "graduarse"], ["get home", "llegar a casa"], ["retire", "jubilarse"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Cuando una cláusula de tiempo (with when, after, before, as soon as, until) se refiere al futuro,
    <strong>no se usa "will" dentro de esa cláusula</strong> — se usa el presente simple.</p>
    <table>
      <tr><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>I will call you when I arrive.</td><td>Te llamaré cuando llegue.</td></tr>
      <tr><td>She will study abroad after she graduates.</td><td>Ella estudiará en el extranjero después de graduarse.</td></tr>
      <tr><td>As soon as I finish, I will send it.</td><td>Tan pronto como termine, lo enviaré.</td></tr>
    </table>
    <p>Nota que la oración principal (la consecuencia) sí lleva "will", pero la cláusula de
    tiempo (la condición temporal) usa presente simple, no futuro.</p>
    <p>Incorrecto: <em>"I will call you when I will arrive"</em> ❌<br>
    Correcto: <strong>"I will call you when I arrive"</strong> ✓</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma verbal correcta.",
      type: "mc",
      questions: [
        { prompt: "I will call you when I ___ (arrive).", options: ["will arrive", "arrive", "arrived"], correct: 1,
          explanation: "Después de 'when' se usa presente simple, no 'will'." },
        { prompt: "She ___ study abroad after she graduates.", options: ["will", "does", "is"], correct: 0,
          explanation: "La oración principal sí lleva 'will'." },
        { prompt: "As soon as I ___ (finish), I will send it.", options: ["will finish", "finish", "finished"], correct: 1,
          explanation: "Después de 'as soon as' se usa presente simple." },
        { prompt: "We will eat once he ___ (arrive).", options: ["will arrive", "arrives", "arrived"], correct: 1,
          explanation: "Después de 'once' se usa presente simple." },
        { prompt: "By the time you ___ (get) here, I'll be gone.", options: ["will get", "get", "got"], correct: 1,
          explanation: "Después de 'by the time' se usa presente simple." },
        { prompt: "I will travel after I ___ (retire).", options: ["will retire", "retire", "retired"], correct: 1,
          explanation: "Después de 'after' se usa presente simple." },
        { prompt: "She will call before she ___ (leave).", options: ["will leave", "leaves", "left"], correct: 1,
          explanation: "Después de 'before' se usa presente simple." },
        { prompt: "They ___ celebrate when they win.", options: ["will", "do", "are"], correct: 0,
          explanation: "La oración principal lleva 'will'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con la forma correcta del verbo.",
      type: "fill",
      questions: [
        { prompt: "I will call you when I ___ (arrive).", correct: ["arrive"], explanation: "Presente simple después de 'when'." },
        { prompt: "She will travel after she ___ (graduate).", correct: ["graduates"], explanation: "Presente simple después de 'after'." },
        { prompt: "As soon as he ___ (get) home, he'll call.", correct: ["gets"], explanation: "Presente simple después de 'as soon as'." },
        { prompt: "We ___ (eat) once everyone arrives.", correct: ["will eat"], explanation: "'Will' en la oración principal." },
        { prompt: "By the time you ___ (finish), I'll be here.", correct: ["finish"], explanation: "Presente simple después de 'by the time'." },
        { prompt: "I ___ (be) happy when I see her.", correct: ["will be"], explanation: "'Will' en la oración principal." },
        { prompt: "Until she ___ (call), we won't know.", correct: ["calls"], explanation: "Presente simple después de 'until'." },
        { prompt: "He will retire before he ___ (turn) 70.", correct: ["turns"], explanation: "Presente simple después de 'before'." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "will", "call", "you", "when", "I", "arrive", "."], translation: "Te llamaré cuando llegue.",
          explanation: "Will en la oración principal, presente simple después de 'when'." },
        { words: ["She", "will", "study", "after", "she", "graduates", "."], translation: "Ella estudiará después de graduarse.",
          explanation: "Will en la principal, presente simple después de 'after'." },
        { words: ["As", "soon", "as", "I", "finish", ",", "I", "will", "send", "it", "."], translation: "Tan pronto como termine, lo enviaré.",
          explanation: "Presente simple después de 'as soon as'." },
        { words: ["We", "will", "eat", "once", "he", "arrives", "."], translation: "Comeremos una vez que él llegue.",
          explanation: "Will en la principal, presente simple después de 'once'." },
        { words: ["I", "will", "travel", "after", "I", "retire", "."], translation: "Viajaré después de jubilarme.",
          explanation: "Will en la principal, presente simple después de 'after'." },
        { words: ["She", "will", "call", "before", "she", "leaves", "."], translation: "Ella llamará antes de irse.",
          explanation: "Will en la principal, presente simple después de 'before'." },
        { words: ["They", "will", "celebrate", "when", "they", "win", "."], translation: "Celebrarán cuando ganen.",
          explanation: "Will en la principal, presente simple después de 'when'." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada conector con su significado.",
      type: "match",
      questions: [
        { pairs: [
            ["as soon as", "tan pronto como"], ["once", "una vez que"], ["by the time", "para cuando"],
            ["until", "hasta que"], ["before", "antes de que"], ["after", "después de que"], ["when", "cuando"],
          ],
          explanation: "Ninguno de estos conectores usa 'will' en su cláusula." }
      ]
    }
  ]
};
