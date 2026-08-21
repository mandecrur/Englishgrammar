window.EXERCISE_DATA = {
  title: "Simple Present vs Present Progressive",
  translation: "Presente simple vs presente continuo",
  level: "Nivel 3 · Básico 2 (A2)",

  vocabulary: [
    { en: "habit", es: "hábito" },
    { en: "currently", es: "actualmente" },
    { en: "fact", es: "hecho" },
    { en: "temporary", es: "temporal" },
    { en: "permanent", es: "permanente" },
    { en: "at the moment", es: "en este momento" },
    { en: "these days", es: "en estos días" },
    { en: "belief", es: "creencia" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["habit", "hábito"], ["currently", "actualmente"], ["fact", "hecho"],
          ["temporary", "temporal"], ["permanent", "permanente"], ["belief", "creencia"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Ambos tiempos hablan del presente, pero con usos distintos.</p>
    <table>
      <tr><th>Presente simple</th><th>Presente continuo</th></tr>
      <tr><td>Hábitos y rutinas</td><td>Acciones en curso ahora mismo</td></tr>
      <tr><td>Hechos generales y permanentes</td><td>Situaciones temporales</td></tr>
      <tr><td>I work in a bank.</td><td>I am working from home this week.</td></tr>
      <tr><td>The sun rises in the east.</td><td>The sun is rising right now.</td></tr>
    </table>
    <p>Algunos verbos (llamados "verbos de estado") normalmente <strong>no se usan</strong> en continuo,
    aunque estén ocurriendo ahora: <strong>like, love, want, know, believe, understand, need</strong>.
    Se dice <strong>I like coffee</strong> (no "I am liking coffee").</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige el tiempo verbal correcto.",
      type: "mc",
      questions: [
        { prompt: "I usually ___ to work by bus. (habit)", options: ["go", "am going", "goes"], correct: 0,
          explanation: "Rutina/hábito: presente simple." },
        { prompt: "She ___ dinner right now.", options: ["cooks", "is cooking", "cook"], correct: 1,
          explanation: "Acción en curso: presente continuo." },
        { prompt: "Water ___ at 100°C. (hecho general)", options: ["boils", "is boiling", "boil"], correct: 0,
          explanation: "Hecho científico general: presente simple." },
        { prompt: "I ___ this book right now.", options: ["read", "am reading", "reads"], correct: 1,
          explanation: "Acción en curso: presente continuo." },
        { prompt: "I ___ coffee. (verbo de estado)", options: ["like", "am liking", "likes"], correct: 0,
          explanation: "'Like' es un verbo de estado, no se usa en continuo." },
        { prompt: "She ___ in Lima these days. (temporal)", options: ["lives", "is living", "live"], correct: 1,
          explanation: "Situación temporal: presente continuo." },
        { prompt: "The Earth ___ around the Sun.", options: ["moves", "is moving", "move"], correct: 0,
          explanation: "Hecho permanente/científico: presente simple." },
        { prompt: "We ___ studying for the exam this week.", options: ["are", "do", "-"], correct: 0,
          explanation: "'Are' + verbo-ing forma el presente continuo." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con la forma correcta (simple o continuo).",
      type: "fill",
      questions: [
        { prompt: "I ___ (work) in a bank. (rutina)", correct: ["work"], explanation: "Rutina general: presente simple." },
        { prompt: "She ___ (study) right now.", correct: ["is studying"], explanation: "Acción en curso: presente continuo." },
        { prompt: "The sun ___ (rise) in the east. (hecho)", correct: ["rises"], explanation: "Hecho general: presente simple." },
        { prompt: "We ___ (not/watch) TV right now.", correct: ["aren't watching"], explanation: "Negación en continuo." },
        { prompt: "I ___ (understand) the lesson. (verbo de estado)", correct: ["understand"], explanation: "'Understand' no se usa en continuo." },
        { prompt: "They ___ (live) in Peru these days. (temporal)", correct: ["are living"], explanation: "Situación temporal: presente continuo." },
        { prompt: "___ you ___ (know) the answer?", correct: ["do you know"], explanation: "'Know' es verbo de estado, presente simple." },
        { prompt: "He ___ (work) from home this week.", correct: ["is working"], explanation: "Situación temporal: presente continuo." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "work", "in", "a", "bank", "."], translation: "Trabajo en un banco.",
          explanation: "Hecho/rutina: presente simple." },
        { words: ["She", "is", "studying", "right", "now", "."], translation: "Ella está estudiando ahora mismo.",
          explanation: "Acción en curso: presente continuo." },
        { words: ["Water", "boils", "at", "100", "degrees", "."], translation: "El agua hierve a 100 grados.",
          explanation: "Hecho científico: presente simple." },
        { words: ["We", "are", "living", "in", "Lima", "this", "year", "."], translation: "Estamos viviendo en Lima este año.",
          explanation: "Situación temporal: presente continuo." },
        { words: ["I", "like", "chocolate", "very", "much", "."], translation: "Me gusta mucho el chocolate.",
          explanation: "Verbo de estado: presente simple." },
        { words: ["They", "are", "working", "hard", "this", "week", "."], translation: "Ellos están trabajando duro esta semana.",
          explanation: "Situación temporal: presente continuo." },
        { words: ["The", "Earth", "moves", "around", "the", "Sun", "."], translation: "La Tierra se mueve alrededor del Sol.",
          explanation: "Hecho permanente: presente simple." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada situación con el tiempo verbal correcto.",
      type: "match",
      questions: [
        { pairs: [
            ["daily routine", "presente simple"], ["action happening now", "presente continuo"],
            ["general fact", "presente simple"], ["temporary situation", "presente continuo"],
            ["state verb (like)", "presente simple"], ["this week", "presente continuo"], ["scientific fact", "presente simple"],
          ],
          explanation: "Cada situación determina qué tiempo verbal usar." }
      ]
    }
  ]
};
