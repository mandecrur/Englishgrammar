window.EXERCISE_DATA = {
  title: "Count Nouns (a / an, -s / -es)",
  translation: "Sustantivos contables — artículo a/an",
  level: "Nivel 2 · Básico 1 (A1)",

  vocabulary: [
    { en: "apple", es: "manzana" },
    { en: "egg", es: "huevo" },
    { en: "orange", es: "naranja" },
    { en: "umbrella", es: "paraguas" },
    { en: "hour", es: "hora" },
    { en: "university", es: "universidad" },
    { en: "consonant sound", es: "sonido consonante" },
    { en: "vowel sound", es: "sonido vocal" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["apple", "manzana"], ["egg", "huevo"], ["orange", "naranja"],
          ["umbrella", "paraguas"], ["hour", "hora"], ["university", "universidad"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Los sustantivos contables se pueden contar (uno, dos, tres...). En singular llevan
    <strong>a</strong> o <strong>an</strong>; en plural añaden <strong>-s</strong> o <strong>-es</strong>.</p>
    <table>
      <tr><th>Regla</th><th>Ejemplo</th></tr>
      <tr><td>Sonido consonante: <strong>a</strong></td><td>a book, a car, a university</td></tr>
      <tr><td>Sonido vocal: <strong>an</strong></td><td>an apple, an hour, an egg</td></tr>
    </table>
    <p>Importante: la regla depende del <strong>sonido</strong>, no de la letra escrita.
    Por eso decimos <strong>a university</strong> (suena "yu-", consonante) pero
    <strong>an hour</strong> (la "h" es muda, suena vocal).</p>
    <p>Para el plural se usan las mismas reglas del tema de plurales: <strong>+s</strong> generalmente,
    <strong>+es</strong> si termina en -s/-sh/-ch/-x/-o, y <strong>y→ies</strong> si termina en consonante+y.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige el artículo correcto (a/an).",
      type: "mc",
      questions: [
        { prompt: "I have ___ apple.", options: ["a", "an", "-"], correct: 1,
          explanation: "'Apple' empieza con sonido vocal, se usa 'an'." },
        { prompt: "She has ___ car.", options: ["a", "an", "-"], correct: 0,
          explanation: "'Car' empieza con sonido consonante, se usa 'a'." },
        { prompt: "He is ___ university student.", options: ["a", "an", "-"], correct: 0,
          explanation: "'University' suena 'yu-' (consonante), se usa 'a'." },
        { prompt: "I need ___ hour to finish.", options: ["a", "an", "-"], correct: 1,
          explanation: "'Hour' tiene h muda, suena vocal, se usa 'an'." },
        { prompt: "We have ___ egg in the fridge.", options: ["a", "an", "-"], correct: 1,
          explanation: "'Egg' empieza con sonido vocal, se usa 'an'." },
        { prompt: "She is ___ doctor.", options: ["a", "an", "-"], correct: 0,
          explanation: "'Doctor' empieza con sonido consonante, se usa 'a'." },
        { prompt: "I bought ___ umbrella.", options: ["a", "an", "-"], correct: 1,
          explanation: "'Umbrella' empieza con sonido vocal, se usa 'an'." },
        { prompt: "He has ___ orange.", options: ["a", "an", "-"], correct: 1,
          explanation: "'Orange' empieza con sonido vocal, se usa 'an'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con a, an, o el plural correcto.",
      type: "fill",
      questions: [
        { prompt: "I want ___ apple. (an/a)", correct: ["an"], explanation: "'Apple' empieza con sonido vocal." },
        { prompt: "She has ___ dog. (an/a)", correct: ["a"], explanation: "'Dog' empieza con sonido consonante." },
        { prompt: "I need ___ hour to finish. (an/a)", correct: ["an"], explanation: "'Hour' tiene h muda." },
        { prompt: "one box, two ___ (plural)", correct: ["boxes"], explanation: "'Box' termina en -x, se añade '-es'." },
        { prompt: "one city, two ___ (plural)", correct: ["cities"], explanation: "'City' cambia y→ies." },
        { prompt: "He is ___ engineer. (an/a)", correct: ["an"], explanation: "'Engineer' empieza con sonido vocal." },
        { prompt: "one apple, two ___ (plural)", correct: ["apples"], explanation: "Plural regular: se añade '-s'." },
        { prompt: "I have ___ umbrella. (an/a)", correct: ["an"], explanation: "'Umbrella' empieza con sonido vocal." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "have", "an", "apple", "."], translation: "Tengo una manzana.",
          explanation: "'An' se usa antes de sonido vocal." },
        { words: ["She", "is", "a", "doctor", "."], translation: "Ella es doctora.",
          explanation: "'A' se usa antes de sonido consonante." },
        { words: ["He", "needs", "an", "hour", "."], translation: "Él necesita una hora.",
          explanation: "'Hour' tiene h muda, suena vocal." },
        { words: ["We", "have", "two", "boxes", "."], translation: "Tenemos dos cajas.",
          explanation: "'Boxes' es el plural de 'box'." },
        { words: ["I", "bought", "an", "umbrella", "."], translation: "Compré un paraguas.",
          explanation: "'An' se usa antes de sonido vocal." },
        { words: ["She", "visited", "three", "cities", "."], translation: "Ella visitó tres ciudades.",
          explanation: "'Cities' es el plural de 'city'." },
        { words: ["He", "is", "a", "university", "student", "."], translation: "Él es estudiante universitario.",
          explanation: "'A' se usa porque 'university' suena consonante." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada sustantivo con el artículo correcto que le corresponde.",
      type: "match",
      questions: [
        { pairs: [
            ["apple", "an apple"], ["car", "a car"], ["hour", "an hour"], ["university", "a university"],
            ["egg", "an egg"], ["dog", "a dog"], ["orange", "an orange"],
          ],
          explanation: "Recuerda: la regla depende del sonido, no de la letra." }
      ]
    }
  ]
};
