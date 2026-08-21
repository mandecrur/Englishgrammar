window.EXERCISE_DATA = {
  title: "Adverbs of Frequency",
  translation: "Adverbios de frecuencia",
  level: "Nivel 2 · Básico 1 (A1)",

  vocabulary: [
    { en: "always", es: "siempre (100%)" },
    { en: "usually", es: "usualmente (~80%)" },
    { en: "often", es: "frecuentemente (~60%)" },
    { en: "sometimes", es: "a veces (~40%)" },
    { en: "rarely", es: "raramente (~10%)" },
    { en: "never", es: "nunca (0%)" },
    { en: "how often", es: "con qué frecuencia" },
    { en: "once a week", es: "una vez por semana" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["always", "siempre"], ["usually", "usualmente"], ["often", "frecuentemente"],
          ["sometimes", "a veces"], ["rarely", "raramente"], ["never", "nunca"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Los adverbios de frecuencia indican <strong>qué tan seguido</strong> ocurre algo.
    Van generalmente <strong>antes</strong> del verbo principal, pero <strong>después</strong>
    del verbo to be.</p>
    <table>
      <tr><th>Adverbio</th><th>Frecuencia aproximada</th></tr>
      <tr><td>always</td><td>100%</td></tr>
      <tr><td>usually</td><td>~80%</td></tr>
      <tr><td>often</td><td>~60%</td></tr>
      <tr><td>sometimes</td><td>~40%</td></tr>
      <tr><td>rarely / seldom</td><td>~10%</td></tr>
      <tr><td>never</td><td>0%</td></tr>
    </table>
    <p>Ejemplos: <strong>She always arrives early.</strong> (adverbio antes del verbo 'arrives')<br>
    <strong>He is never late.</strong> (adverbio después de 'is')</p>
    <p>Para preguntar la frecuencia se usa <strong>How often...?</strong>: <strong>How often do you exercise?</strong>
    (¿Con qué frecuencia haces ejercicio?)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la posición correcta del adverbio.",
      type: "mc",
      questions: [
        { prompt: "She ___ arrives on time. (always)", options: ["always arrives", "arrives always", "is always"], correct: 0,
          explanation: "El adverbio va antes del verbo principal." },
        { prompt: "He is ___ late. (never)", options: ["never is", "is never", "never"], correct: 1,
          explanation: "Con el verbo 'to be', el adverbio va después." },
        { prompt: "We ___ eat pizza on Fridays. (usually)", options: ["usually eat", "eat usually", "are usually"], correct: 0,
          explanation: "El adverbio va antes del verbo principal." },
        { prompt: "They ___ tired after work. (often)", options: ["often are", "are often", "often"], correct: 1,
          explanation: "Con 'to be', el adverbio va después." },
        { prompt: "___ do you exercise?", options: ["How much", "How often", "How many"], correct: 1,
          explanation: "'How often' pregunta por la frecuencia." },
        { prompt: "I ___ drink coffee at night. (never)", options: ["never drink", "drink never", "am never"], correct: 0,
          explanation: "El adverbio va antes del verbo principal." },
        { prompt: "She ___ happy on Mondays. (rarely)", options: ["rarely is", "is rarely", "rarely"], correct: 1,
          explanation: "Con 'to be', el adverbio va después." },
        { prompt: "We ___ go to the movies. (sometimes)", options: ["sometimes go", "go sometimes", "are sometimes"], correct: 0,
          explanation: "El adverbio va antes del verbo principal." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Coloca el adverbio en la posición correcta.",
      type: "fill",
      questions: [
        { prompt: "She ___ (always) arrives early.", correct: ["always"], explanation: "Antes del verbo principal." },
        { prompt: "He is ___ (never) on time.", correct: ["never"], explanation: "Después del verbo to be." },
        { prompt: "We ___ (usually) study at night.", correct: ["usually"], explanation: "Antes del verbo principal." },
        { prompt: "They are ___ (often) busy.", correct: ["often"], explanation: "Después del verbo to be." },
        { prompt: "I ___ (rarely) eat fast food.", correct: ["rarely"], explanation: "Antes del verbo principal." },
        { prompt: "She is ___ (sometimes) sad.", correct: ["sometimes"], explanation: "Después del verbo to be." },
        { prompt: "How ___ do you go to the gym?", correct: ["often"], explanation: "'How often' pregunta por frecuencia." },
        { prompt: "We ___ (never) miss class.", correct: ["never"], explanation: "Antes del verbo principal." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["She", "always", "arrives", "on", "time", "."], translation: "Ella siempre llega a tiempo.",
          explanation: "Adverbio antes del verbo principal." },
        { words: ["He", "is", "never", "late", "."], translation: "Él nunca llega tarde.",
          explanation: "Adverbio después de 'is'." },
        { words: ["How", "often", "do", "you", "exercise", "?"], translation: "¿Con qué frecuencia haces ejercicio?",
          explanation: "Pregunta con 'how often'." },
        { words: ["We", "usually", "eat", "dinner", "at", "seven", "."], translation: "Usualmente cenamos a las siete.",
          explanation: "Adverbio antes del verbo principal." },
        { words: ["They", "are", "often", "busy", "."], translation: "Ellos a menudo están ocupados.",
          explanation: "Adverbio después de 'are'." },
        { words: ["I", "rarely", "watch", "TV", "."], translation: "Raramente veo televisión.",
          explanation: "Adverbio antes del verbo principal." },
        { words: ["She", "sometimes", "calls", "me", "."], translation: "Ella a veces me llama.",
          explanation: "Adverbio antes del verbo principal." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada adverbio con su frecuencia aproximada.",
      type: "match",
      questions: [
        { pairs: [
            ["always", "100%"], ["usually", "~80%"], ["often", "~60%"],
            ["sometimes", "~40%"], ["rarely", "~10%"], ["never", "0%"], ["how often", "con qué frecuencia"],
          ],
          explanation: "Ordena estos adverbios de mayor a menor frecuencia." }
      ]
    }
  ]
};
