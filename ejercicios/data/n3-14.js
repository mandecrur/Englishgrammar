window.EXERCISE_DATA = {
  title: "A Few / Few / A Little / Little",
  translation: "Pocos / muy pocos (contables e incontables)",
  level: "Nivel 3 · Básico 2 (A2)",

  vocabulary: [
    { en: "a few", es: "unos pocos (positivo)" },
    { en: "few", es: "muy pocos (casi ninguno)" },
    { en: "a little", es: "un poco (positivo)" },
    { en: "little", es: "muy poco (casi nada)" },
    { en: "amount", es: "cantidad" },
    { en: "hardly any", es: "casi ningún/a" },
    { en: "left", es: "que queda / restante" },
    { en: "spare time", es: "tiempo libre" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["a few", "unos pocos"], ["few", "muy pocos"], ["a little", "un poco"],
          ["little", "muy poco"], ["amount", "cantidad"], ["left", "que queda"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Estas expresiones indican cantidad pequeña, pero con un matiz importante de positivo/negativo.</p>
    <table>
      <tr><th>Expresión</th><th>Se usa con</th><th>Significado</th></tr>
      <tr><td><strong>a few</strong></td><td>contables</td><td>unos pocos (suficientes, positivo)</td></tr>
      <tr><td><strong>few</strong></td><td>contables</td><td>muy pocos (casi ninguno, negativo)</td></tr>
      <tr><td><strong>a little</strong></td><td>incontables</td><td>un poco (suficiente, positivo)</td></tr>
      <tr><td><strong>little</strong></td><td>incontables</td><td>muy poco (casi nada, negativo)</td></tr>
    </table>
    <p>Ejemplo comparativo: <strong>I have a few friends.</strong> (Tengo algunos amigos — está bien, tengo)
    vs. <strong>I have few friends.</strong> (Tengo muy pocos amigos — suena a queja, casi ninguno.)</p>
    <p><strong>I have a little money.</strong> (Tengo un poco de dinero — suficiente)
    vs. <strong>I have little money.</strong> (Tengo muy poco dinero — casi nada, problema.)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la expresión correcta.",
      type: "mc",
      questions: [
        { prompt: "I have ___ friends here. (algunos, positivo, contable)", options: ["a few", "few"], correct: 0,
          explanation: "'A few' expresa una cantidad positiva/suficiente." },
        { prompt: "He has ___ money, he needs help. (casi nada, incontable)", options: ["a little", "little"], correct: 1,
          explanation: "'Little' expresa escasez negativa." },
        { prompt: "We have ___ time, let's hurry! (muy poco, incontable)", options: ["a little", "little"], correct: 1,
          explanation: "'Little' expresa escasez negativa." },
        { prompt: "There are ___ apples left, enough for us. (algunas, contable)", options: ["a few", "few"], correct: 0,
          explanation: "'A few' expresa cantidad positiva/suficiente." },
        { prompt: "Few people ___ (know/knows) the answer.", options: ["know", "knows"], correct: 0,
          explanation: "'Few people' es plural, se usa 'know'." },
        { prompt: "I have ___ water left, just enough. (un poco, incontable)", options: ["a little", "little"], correct: 0,
          explanation: "'A little' expresa cantidad positiva/suficiente." },
        { prompt: "She has ___ friends, she feels lonely. (muy pocos, contable)", options: ["a few", "few"], correct: 1,
          explanation: "'Few' expresa escasez negativa." },
        { prompt: "Let's take ___ minutes to relax. (unos pocos, contable)", options: ["a few", "few"], correct: 0,
          explanation: "'A few' expresa cantidad positiva/suficiente." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con a few, few, a little o little.",
      type: "fill",
      questions: [
        { prompt: "I have ___ questions for you. (algunas, positivo)", correct: ["a few"], explanation: "Cantidad positiva con contable." },
        { prompt: "There is ___ hope left. (muy poca, negativo)", correct: ["little"], explanation: "Escasez negativa con incontable." },
        { prompt: "We need ___ more minutes. (unos pocos, positivo)", correct: ["a few"], explanation: "Cantidad positiva con contable." },
        { prompt: "He has ___ experience, he's new. (muy poca, negativo)", correct: ["little"], explanation: "Escasez negativa con incontable." },
        { prompt: "I have ___ sugar, enough for the recipe. (un poco, positivo)", correct: ["a little"], explanation: "Cantidad positiva con incontable." },
        { prompt: "___ students passed the exam. (muy pocos, negativo)", correct: ["few"], explanation: "Escasez negativa con contable." },
        { prompt: "Can I have ___ water, please? (un poco, positivo)", correct: ["a little"], explanation: "Cantidad positiva con incontable." },
        { prompt: "She has ___ close friends. (muy pocos, negativo)", correct: ["few"], explanation: "Escasez negativa con contable." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "have", "a", "few", "friends", "."], translation: "Tengo algunos amigos.",
          explanation: "Cantidad positiva con sustantivo contable." },
        { words: ["He", "has", "little", "money", "."], translation: "Él tiene muy poco dinero.",
          explanation: "Escasez negativa con sustantivo incontable." },
        { words: ["We", "need", "a", "little", "more", "time", "."], translation: "Necesitamos un poco más de tiempo.",
          explanation: "Cantidad positiva con sustantivo incontable." },
        { words: ["Few", "people", "understand", "this", "."], translation: "Pocas personas entienden esto.",
          explanation: "Escasez negativa con sustantivo contable." },
        { words: ["She", "has", "a", "little", "experience", "."], translation: "Ella tiene un poco de experiencia.",
          explanation: "Cantidad positiva con sustantivo incontable." },
        { words: ["There", "are", "a", "few", "apples", "left", "."], translation: "Quedan algunas manzanas.",
          explanation: "Cantidad positiva con sustantivo contable." },
        { words: ["I", "have", "little", "patience", "today", "."], translation: "Hoy tengo muy poca paciencia.",
          explanation: "Escasez negativa con sustantivo incontable." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada expresión con su significado.",
      type: "match",
      questions: [
        { pairs: [
            ["a few", "unos pocos (positivo)"], ["few", "muy pocos (negativo)"],
            ["a little", "un poco (positivo)"], ["little", "muy poco (negativo)"],
            ["a few friends", "contable"], ["a little water", "incontable"], ["hardly any", "casi ningún/a"],
          ],
          explanation: "'A' marca lo positivo; sin 'a' es negativo/escaso." }
      ]
    }
  ]
};
