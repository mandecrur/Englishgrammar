window.EXERCISE_DATA = {
  title: "Simple Adjectives (big, small, happy, sad)",
  translation: "Adjetivos básicos",
  level: "Nivel 1 · Beginners",

  vocabulary: [
    { en: "happy", es: "feliz" },
    { en: "sad", es: "triste" },
    { en: "old", es: "viejo / mayor" },
    { en: "new", es: "nuevo" },
    { en: "fast", es: "rápido" },
    { en: "slow", es: "lento" },
    { en: "easy", es: "fácil" },
    { en: "difficult / hard", es: "difícil" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["happy", "feliz"], ["sad", "triste"], ["old", "viejo / mayor"],
          ["new", "nuevo"], ["fast", "rápido"], ["easy", "fácil"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Los adjetivos describen sustantivos. En inglés, a diferencia del español,
    <strong>no cambian</strong> según género o número.</p>
    <table>
      <tr><th>Inglés</th><th>Traducción</th></tr>
      <tr><td>happy</td><td>feliz</td></tr>
      <tr><td>sad</td><td>triste</td></tr>
      <tr><td>big / small</td><td>grande / pequeño</td></tr>
      <tr><td>old / new</td><td>viejo / nuevo</td></tr>
      <tr><td>fast / slow</td><td>rápido / lento</td></tr>
      <tr><td>easy / difficult</td><td>fácil / difícil</td></tr>
    </table>
    <p>Ejemplo: <strong>She is happy.</strong> (Ella está feliz.) — <strong>They are happy.</strong> (Ellos están felices.)
    Nota que "happy" se mantiene igual en ambos casos, sin importar el número.</p>
    <p>Los adjetivos se pueden usar de dos formas:</p>
    <p>1) Después del verbo <em>to be</em>: <strong>The car is fast.</strong> (El carro es rápido.)<br>
    2) Antes del sustantivo: <strong>a fast car</strong> (un carro rápido)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "The children are ___.", options: ["happys", "happy", "happies"], correct: 1,
          explanation: "Los adjetivos no llevan 's' en plural: 'happy' se mantiene igual." },
        { prompt: "This house is very ___.", options: ["old", "olds", "olded"], correct: 0,
          explanation: "El adjetivo 'old' no cambia de forma." },
        { prompt: "This exercise is ___ for me.", options: ["easy", "easily", "easyness"], correct: 0,
          explanation: "'Easy' es el adjetivo correcto (fácil)." },
        { prompt: "That car is very ___.", options: ["fast", "fastly", "fasting"], correct: 0,
          explanation: "'Fast' se usa igual como adjetivo y adverbio." },
        { prompt: "I am ___ because I lost my keys.", options: ["happy", "sad", "new"], correct: 1,
          explanation: "'Sad' (triste) es apropiado para esta situación." },
        { prompt: "This phone is ___, I bought it yesterday.", options: ["old", "new", "slow"], correct: 1,
          explanation: "'New' significa 'nuevo'." },
        { prompt: "The turtle is very ___.", options: ["fast", "slow", "easy"], correct: 1,
          explanation: "Las tortugas son conocidas por ser lentas ('slow')." },
        { prompt: "This math problem is ___.", options: ["difficult", "happy", "fast"], correct: 0,
          explanation: "'Difficult' significa 'difícil'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa cada oración con el adjetivo correcto.",
      type: "fill",
      questions: [
        { prompt: "I am ___ today. (triste)", correct: ["sad"], explanation: "'Sad' significa 'triste'." },
        { prompt: "My phone is ___. (nuevo)", correct: ["new"], explanation: "'New' significa 'nuevo'." },
        { prompt: "This book is very ___. (viejo)", correct: ["old"], explanation: "'Old' significa 'viejo'." },
        { prompt: "The test was ___. (fácil)", correct: ["easy"], explanation: "'Easy' significa 'fácil'." },
        { prompt: "That train is very ___. (rápido)", correct: ["fast"], explanation: "'Fast' significa 'rápido'." },
        { prompt: "She is ___ because she passed the exam. (feliz)", correct: ["happy"], explanation: "'Happy' significa 'feliz'." },
        { prompt: "This exercise is ___. (difícil)", correct: ["difficult", "hard"], explanation: "'Difficult' o 'hard' significan 'difícil'." },
        { prompt: "The snail is very ___. (lento)", correct: ["slow"], explanation: "'Slow' significa 'lento'." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "am", "very", "happy", "."], translation: "Estoy muy feliz.",
          explanation: "Orden: sujeto + verbo + intensificador + adjetivo." },
        { words: ["This", "is", "an", "easy", "exercise", "."], translation: "Este es un ejercicio fácil.",
          explanation: "El adjetivo va antes del sustantivo." },
        { words: ["Is", "the", "test", "difficult", "?"], translation: "¿Es difícil el examen?",
          explanation: "Pregunta simple con el verbo 'to be'." },
        { words: ["My", "car", "is", "old", "."], translation: "Mi carro es viejo.",
          explanation: "Adjetivo después del verbo 'to be'." },
        { words: ["She", "has", "a", "new", "phone", "."], translation: "Ella tiene un teléfono nuevo.",
          explanation: "El adjetivo va antes del sustantivo 'phone'." },
        { words: ["They", "are", "not", "sad", "."], translation: "Ellos no están tristes.",
          explanation: "Negación con 'not' después del verbo 'are'." },
        { words: ["The", "cheetah", "is", "very", "fast", "."], translation: "El guepardo es muy rápido.",
          explanation: "Oración descriptiva con intensificador 'very'." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada adjetivo con su opuesto.",
      type: "match",
      questions: [
        { pairs: [
            ["big", "small"], ["old", "new"], ["fast", "slow"], ["happy", "sad"],
            ["easy", "difficult"], ["long", "short"], ["hot", "cold"],
          ],
          explanation: "Practica los adjetivos opuestos más comunes." }
      ]
    }
  ]
};
